import React, { Component } from 'react'
import withData from '../hocs/data'
import withLoginRequired from '../hocs/login-required'
import styles from '../styles/admin.scss'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { getUsers, getS3Videos, getVideos, createVideo, deleteVideo } from '../redux/actions'
import { withUser } from 'ooth-client-react'
import { compose } from 'recompose'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment'

const mapStateToProps = ({ videos, s3videos, users }) => ({ videos, s3videos, users })

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => {
    return dispatch(getUsers())
  },
  fetchS3Videos: () => {
    return dispatch(getS3Videos())
  },
  fetchVideos: () => {
    return dispatch(getVideos())
  },
  addVideo: (video, pos) => {
    return dispatch(createVideo(video, pos))
  },
  removeVideo: (_id) => {
    return dispatch(deleteVideo(_id))
  }
})

export default compose(
  withLoginRequired('/admin'),
  withUser,
  withData(mapStateToProps, mapDispatchToProps),
)
  (class Admin extends Component {
    state = { tabIndex: 0, videos: this.props.videos.list }

    componentDidMount() {
      if (this.props.user) {
        this.props.fetchUsers();
        this.refreshVideos();
      }
    }
    refreshVideos() {
      this.props.fetchS3Videos();
      this.props.fetchVideos();
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.s3videos && !nextProps.s3videos.loading && nextProps.videos && !nextProps.videos.loading) {
        const union = [...nextProps.videos.list];
        nextProps.s3videos.list.forEach(v => {
          const idx = union.findIndex(u => u.thumbpath == v.thumbpath)
          if (idx == -1) {
            const vid = { ...v };
            vid.notinDB = true;
            union.unshift(vid)
          }
        })
        this.setState({ videos: union })
      }
    }
    render() {
      return (
        <div className="root">
          {!this.props.user ? <p>Tienes que tener privilegios de administrador para accesar esta página</p> :
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList>
                <Tab>Usuarios</Tab>
                <Tab>Videos</Tab>
              </TabList>

              <TabPanel>
                <h3>Usuarios</h3>
                <div>
                  <button onClick={() => { this.props.fetchUsers() }}>Actualizar</button>
                  {this.props.users.loading && <span style={{ paddingLeft: 4 }}>Cargando...</span>}
                  <Griddle data={this.props.users.list.map(u => {
                    const us = { ...u.local }
                    us.roles = u.roles;
                    return us
                  })} plugins={[plugins.LocalPlugin]} >
                    <RowDefinition>
                      <ColumnDefinition
                        id="email"
                        title="Correo Electrónico"
                      />
                      <ColumnDefinition
                        id="username"
                        title="Nombre de Usuario"
                      />
                      <ColumnDefinition
                        id="roles"
                        title="Roles"
                      />
                      <ColumnDefinition
                        id="verified"
                        title="Cuenta Verificada"
                        customComponent={({ value }) => <span>{value ? "sí" : "no"}</span>}
                      />
                    </RowDefinition>
                  </Griddle>
                </div>
              </TabPanel>
              <TabPanel>
                <h3>Videos</h3>
                <div>
                  <button onClick={() => { this.refreshVideos() }}>Actualizar</button>
                  {(this.props.videos.loading ||  this.props.s3videos.loading) && <span style={{ paddingLeft: 4 }}>Cargando...</span>}
                  <Griddle data={this.state.videos} plugins={[plugins.LocalPlugin]} >
                    <RowDefinition>
                      <ColumnDefinition
                        id="posterpath"
                        title="Poster"
                        customComponent={({ value }) => {
                          return <div style={{ height: 100 }} title={value}>
                            <a href={value} target="_blank"><img style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }} src={value} /></a>
                          </div>
                        }}
                      />
                      <ColumnDefinition
                        id="_id"
                        title="Id"
                      />
                      <ColumnDefinition
                        id="title"
                        title="Título"
                      />
                      <ColumnDefinition
                        id="dateCreated"
                        title="Fecha en BD"
                        customComponent={({ griddleKey, value }) => {
                          return <div>
                            {value && moment(new Date(parseInt(value))).format("D-MMM-YYYY, H:mm:ss")}
                          </div>
                        }}
                      />
                      <ColumnDefinition
                        id="tags"
                        title="Tags"
                      />
                      <ColumnDefinition
                        id="actions"
                        title="Acciones"
                        customComponent={({ griddleKey }) => {
                          return <div>
                            {this.state.videos[griddleKey].notinDB && <button onClick={() => {
                              delete this.state.videos[griddleKey].notinDB;
                              this.props.addVideo(this.state.videos[griddleKey], griddleKey)
                            }}>Agregar a BD</button>}
                            {!this.state.videos[griddleKey].notinDB && <button onClick={() => {
                              this.props.removeVideo(this.state.videos[griddleKey]._id)
                            }}>Borrar</button>}
                          </div>
                        }}
                      />
                    </RowDefinition>
                  </Griddle> </div>
              </TabPanel>
            </Tabs>
          }

          <style jsx>{styles}</style>
        </div>
      )
    }
  }
  )