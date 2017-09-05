import React, { Component } from 'react'
import withData from '../hocs/data'
import withLoginRequired from '../hocs/login-required'
import styles from '../styles/admin.scss'
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { getUsers, getS3Videos, getVideos, createVideo, deleteVideo, updateVideo } from '../redux/actions'
import { withUser } from 'ooth-client-react'
import { compose, withProps } from 'recompose'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment'
import withRouter from '../hocs/router'
import LoadingAnim from 'react-loading-animation'
var S3config = require('../aws/s3config.js');

const videoatts = ['title', 'thumbpath', 'fullpath', 'posterpath', 'tags', 'dateCreated', 'createdById', 'duration']

const serialize = (obj) => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

const stripUnwantedAttributes = (obj, atts) => {
  const it = { ...obj }
  Object.keys(it).forEach(k => {
    if (atts.indexOf(k) == -1) delete it[k]
  })
  return it
}

const mapStateToProps = ({ videos, s3videos, users }) => {
  return ({ videos, s3videos, users })
}

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
  },
  updateVideo: (_id, video, pos) => {
    return dispatch(updateVideo(_id, video, pos))
  }
})

export default compose(
  withLoginRequired('/admin'),
  withData(mapStateToProps, mapDispatchToProps),
  withUser,
  withRouter,
)
  (class Admin extends Component {
    state = { videos: this.props.videos.list }

    componentDidMount() {
      if (this.props.user) {
        this.props.fetchUsers();
        this.refreshVideos();
      }
    }
    refreshVideos() {
      this.props.fetchS3Videos()
      this.props.fetchVideos()
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
            <Tabs selectedIndex={this.props.url.query.tab ? parseInt(this.props.url.query.tab) : 0} onSelect={tabIndex => this.props.Router.push(`${this.props.url.pathname}?tab=${tabIndex}`)}>
              <TabList>
                <Tab>Usuarios</Tab>
                <Tab>Videos</Tab>
              </TabList>

              <TabPanel>
                <h3>Usuarios</h3>
                <div>
                  {this.props.users.loading && <div style={{ margin: "8px auto" }}><LoadingAnim /></div>}
                  <Griddle data={this.props.users.list.map(u => {
                    const us = { ...u.local }
                    us.roles = u.roles;
                    return us
                  })}  {...griddleprops({
                    props: this.props,
                    onRefresh: () => { this.props.fetchUsers() }
                  }) } >
                    <RowDefinition>
                      <ColumnDefinition
                        id="email"
                        title="Correo Electrónico"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => <div style={{ minWidth: 150, padding: "0 4px" }}>{value}</div>}
                      />
                      <ColumnDefinition
                        id="username"
                        title="Nombre de Usuario"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => <div style={{ minWidth: 150, padding: "0 4px" }}>{value}</div>}
                      />
                      <ColumnDefinition
                        id="roles"
                        title="Roles"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => <div style={{ minWidth: 100, padding: "0 4px" }}>{value}</div>}
                      />
                      <ColumnDefinition
                        id="verified"
                        title="Cuenta Verificada"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => <div style={{ minWidth: 50, padding: "0 4px" }}>{value ? <i className='icon fa fa-check' /> : <i className='icon fa fa-times' />}</div>}
                      />
                    </RowDefinition>
                  </Griddle>
                </div>
              </TabPanel>
              <TabPanel>
                <h3>Videos</h3>
                <div>
                  {(this.props.videos.loading || this.props.s3videos.loading) && <div style={{ margin: "8px auto" }}><LoadingAnim /></div>}
                  <Griddle data={this.state.videos} {...griddleprops({
                    props: this.props,
                    onRefresh: () => { this.refreshVideos() }
                  }) }>
                    <RowDefinition>
                      <ColumnDefinition
                        id="preview"
                        title="Preview"
                        customComponent={({ griddleKey }) => {
                          return <div style={{ maxHeight: 100, minWidth: 100, width: 190 }}>
                            <a href={this.state.videos[griddleKey].thumbpath} target="_blank"><img style={{ maxWidth: "100%", maxHeight: 100, display: "block" }} src={this.state.videos[griddleKey].posterpath} /></a>
                          </div>
                        }}
                      />
                      <ColumnDefinition
                        id="_id"
                        title="Id"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 8px" }}>{title}</div>
                        }}
                        customComponent={({ griddleKey, value }) => {
                          return <div style={{ minWidth: 100, padding: "0 8px" }}>
                            {this.state.videos[griddleKey].notinDB &&
                              <div>{this.state.videos[griddleKey].thumbpath.substring((S3config.videopathstart + S3config.thumbnailpath + S3config.thumbnailprefix).length).replace(/\.[^/.]+$/, "")}</div>
                            }
                            {!this.state.videos[griddleKey].notinDB && <span>{value}</span>}
                          </div>
                        }}
                      />
                      <ColumnDefinition
                        id="title"
                        title="Título"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ griddleKey, value }) => <div style={{ minWidth: 200, padding: "0 4px" }}><EditText value={value} save={(newvalue) => {
                          this.state.videos[griddleKey].title = newvalue;
                          this.state.videos[griddleKey].dirty = true;
                          this.setState({ videos: this.state.videos })
                        }} /></div>}
                      />
                      <ColumnDefinition
                        id="posterpath"
                        title="Poster"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 8px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => {
                          return <div style={{ minWidth: 50, padding: "0 8px" }} title={value}>
                            {value ? <i className='icon fa fa-check' /> : <i className='icon fa fa-times' />}</div>
                        }}
                      />
                      <ColumnDefinition
                        id="thumbpath"
                        title="Thumbnail"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 8px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => {
                          return <div style={{ minWidth: 50, padding: "0 8px" }} title={value}>
                            {value ? <i className='icon fa fa-check' /> : <i className='icon fa fa-times' />}</div>
                        }}
                      />
                      <ColumnDefinition
                        id="fullpath"
                        title="Full"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 8px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => {
                          return <div style={{ minWidth: 50, padding: "0 8px" }} title={value}>
                            {value ? <i className='icon fa fa-check' /> : <i className='icon fa fa-times' />}</div>
                        }}
                      />
                      <ColumnDefinition
                        id="duration"
                        title="Duración"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ griddleKey, value }) => (
                          <div style={{ minWidth: 80, padding: "0 4px" }}>
                            {value && <div>{(parseInt(value / 60) + ":" + (parseInt(value % 60) < 10 ? ("0" + parseInt(value % 60)) : parseInt(value % 60)))}</div>}
                            {!value && <button style={{ marginLeft: 4, height: 25, fontSize: "1em", lineHeight: 0, color: "gray", background: "transparent" }} title="Calcular duración automáticamente" onClick={() => {
                              const vid = document.createElement('video');
                              vid.src = this.state.videos[griddleKey].thumbpath
                              const getduration = () => {
                                this.state.videos[griddleKey].duration = vid.duration;
                                this.state.videos[griddleKey].dirty = true;
                                this.setState({ videos: this.state.videos })
                                vid.src = ""
                                vid.removeEventListener('loadedmetadata', getduration);
                              }
                              vid.addEventListener('loadedmetadata', getduration);
                            }}><i className='icon fa fa-magic' /></button>}
                          </div>
                        )}
                      />
                      <ColumnDefinition
                        id="tags"
                        title="Tags"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ value }) => (<div style={{ minWidth: 100, padding: "0 4px" }}>
                          {value}
                        </div>
                        )}
                      />
                      <ColumnDefinition
                        id="dateCreated"
                        title="Fecha en BD"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 8px" }}>{title}</div>
                        }}
                        customComponent={({ griddleKey, value }) => {
                          return <div style={{ minWidth: 170, padding: "0 8px" }}>
                            {value && moment(new Date(parseInt(value))).format("D-MMM-YYYY, H:mm:ss")}
                            {!value && <div style={{ color: "gray" }}>No se ha agregado a la BD</div>}
                          </div>
                        }}
                      />
                      <ColumnDefinition
                        id="actions"
                        title="Acciones"
                        customHeadingComponent={({ title }) => {
                          return <div style={{ padding: "0 4px" }}>{title}</div>
                        }}
                        customComponent={({ griddleKey }) => {
                          return <div style={{ minWidth: 50, padding: "0 4px" }}>
                            {!this.state.videos[griddleKey].notinDB && this.state.videos[griddleKey].dirty && <button className="bg blue" title="Guardar cambios en Base de Datos" onClick={() => {
                              const vid = { ...this.state.videos[griddleKey] }
                              this.props.updateVideo(vid._id, stripUnwantedAttributes(vid, videoatts), griddleKey)
                            }}><i className='icon fa fa-floppy-o' /></button>}
                            {this.state.videos[griddleKey].notinDB && <button className="bg yellow" title="Agregar a Base de Datos" onClick={() => {
                              const vid = { ...this.state.videos[griddleKey] }
                              this.props.addVideo(stripUnwantedAttributes(vid, videoatts), griddleKey)
                            }}><i className='icon fa fa-database' /></button>}
                            {!this.state.videos[griddleKey].notinDB && <button className="bg red" title="Borrar de la Base de Datos" onClick={() => {
                              const vid = { ...this.state.videos[griddleKey] }
                              this.props.removeVideo(vid._id)
                            }}><i className='icon fa fa-trash' /></button>}
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

const EditText = class extends Component {
  state = { edit: false, newtext: this.props.value }
  submit() {
    this.setState({ edit: false })
    this.props.save(this.state.newtext)
  }
  render() {
    return (
      <div>
        {!this.state.edit && this.props.value && <span>{this.props.value}</span>}
        {!this.state.edit && <button className='icon fa fa-pencil' style={{ marginLeft: 4, height: "1em", fontSize: "0.8em", lineHeight: 0, color: "gray", background: "transparent" }} title="Editar título" onClick={() => {
          this.setState({ edit: true })
        }} />}
        {this.state.edit && <input style={{ width: "calc(100% - 50px)", minWidth: 30 }} autoFocus type="text" value={this.state.newtext || ""} onKeyPress={(e) => { if (e.key === 'Enter') this.submit() }} onChange={(e) => this.setState({ newtext: e.target.value })} />}
        {this.state.edit && <button className='icon fa fa-check-circle-o' style={{ fontSize: "1em", padding: "0 4px", color: "gray", background: "transparent" }} title="Aceptar edición" onClick={() => { this.submit() }} />}
      </div>
    )
  }
}

const griddleprops = ({ onRefresh, props }) => ({
  plugins: [plugins.LocalPlugin],
  pageProperties: {
    currentPage: props.url.query.page ? parseInt(props.url.query.page) : 1,
    pageSize: props.url.query.size ? parseInt(props.url.query.size) : 50
  },
  components: { Layout: griddlelayout({ onRefresh }), NextButton: CustomNextButton, PreviousButton: CustomPreviousButton, PageDropdown: CustomPageDropdown }
})

const griddlelayout = ({ onRefresh }) => ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <button className="bg purple" onClick={() => { onRefresh() }}><i className='icon fa fa-refresh' /> Actualizar</button>
    <Filter />
    <Table />
    <Pagination />
  </div>
);
const CustomNextButton = withRouter(class extends Component {

  render() {
    if (this.props.hasNext) {
      return (
        <button className="bg blue" onClick={() => {
          const query = { ...this.props.Router.query, page: parseInt(this.props.Router.query.page ? this.props.Router.query.page : 1) + 1 }
          this.props.Router.push(`${this.props.Router.route}?${serialize(query)}`)
        }
        }>
          {">"}
        </button>
      )
    } else {
      return null
    }
  }
})

const CustomPreviousButton = withRouter(class extends Component {

  render() {
    if (this.props.hasPrevious) {
      return (
        <button className="bg blue" onClick={() => {
          const query = { ...this.props.Router.query, page: parseInt(this.props.Router.query.page ? this.props.Router.query.page : 1) - 1 }
          this.props.Router.push(`${this.props.Router.route}?${serialize(query)}`)
        }
        }>
          {"<"}
        </button>
      )
    } else {
      return null
    }
  }
})

const CustomPageDropdown = withRouter(class extends Component {
  render() {
    if (this.props.maxPages > 1) {
      const getRange = (number) => Array(number).fill().map((a, i) => i + 1);
      return (
        <select value={this.props.currentPage} onChange={(e) => {
          const query = {
            ...this.props.Router.query, page: e.target.value
          }
          this.props.Router.push(`${this.props.Router.route}?${serialize(query)}`)
        }}>
          {getRange(this.props.maxPages)
            .map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
        </select>
      )
    } else {
      return null
    }
  }
})