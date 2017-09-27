import React, { Component } from 'react';
import VideoFull from './video-full.js';
import TagsBar from './tags-bar.js';
import styles from '../styles/video-card.scss'
import withData from '../hocs/data'
import { getVideo } from '../redux/actions'

const mapStateToProps = ({ videos }) => ({ videos })

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (_id) => {
    return dispatch(getVideo(_id))
  }
})

export default withData(mapStateToProps, mapDispatchToProps)
  (class extends Component {
    state = { video: {}, fetchedVideo: false, error: null }
    componentDidMount() {
      this.setVideoState(this.props)
    }
    refreshVideo() {
      this.props.fetchVideo(this.props.url.query.id)
    }
    fetchOrError() {
      if (!this.state.fetchedVideo) {
        this.props.fetchVideo(this.props.url.query.id)
        this.setState({ fetchedVideo: true })
      } else {
        this.setState({ error: "No se pudo encontrar el video." })
      }
    }
    setVideoState(props) {
      if (props.url && props.url.query.id) {
        if (props.videos && !props.videos.loading) {
          const findvid = props.videos.list.find(v => v._id == props.url.query.id);
          if (findvid) {
            this.setState({ video: findvid, error: null })
          } else {
            this.fetchOrError()
          }
        } else {
          this.fetchOrError()
        }
      }
    }
    componentWillReceiveProps(nextProps) {
      this.setVideoState(nextProps)
    }
    render() {
      return (
        <div className={"root"}>

          {this.props.url && this.props.url.query.id &&

            <div className="tile">

              <p className="error-message">{this.state.error}</p>
              {this.state.fetchedVideo && this.props.videos.loading && !this.state.error && <span style={{ paddingLeft: 4 }}>Cargando...</span>}

              <div className="video">
                {this.state.video && !this.state.error && <VideoFull src={this.state.video.fullpath} />}
              </div>

              {this.state.video && !this.state.error && <div className="info">
                <h2>{this.state.video.title}</h2>
                <div className="details">
                  <TagsBar tags={this.state.video.tags} />
                </div>
                <div className="actions">
                  <button id="download" onClick={() => { console.log("requested download") }}>
                    <i className='icon fa fa-download' />Descargar
              </button>
                  <button id="add">
                    <i className='icon fa fa-plus-square-o' />Añadir
              </button>
                </div>
              </div>}

            </div>}

          <style jsx>{styles}</style>
        </div>
      )
    }
  })