import React, { Component } from 'react'
import VideoPlayer from './video-player.js'
import withData from '../hocs/data'
import styles from '../styles/videos-grid.scss'
import { compose } from 'recompose'
import withLink from '../hocs/link'
import { getVideos } from '../redux/actions'

const mapStateToProps = ({ videos }) => ({ videos })

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => {
    return dispatch(getVideos())
  }
})

export default compose(
  withLink,
  withData(mapStateToProps, mapDispatchToProps),
)(
  class VideosGrid extends Component {
    componentDidMount() {
      this.props.fetchVideos();
    }
    render() {
      const Link = this.props.Link;
      return (
        <div className="root">

          {this.props.videos.list.map((vid, i) =>

            <div className={"tile"} key={i}>
              <Link prefetch href={'/gallery?id=' + vid._id}><div className="video">
                <VideoPlayer src={vid.thumbpath} duration={vid.duration} poster={vid.posterpath} />
              </div></Link>
            </div>

          )}

          <style jsx>{styles}</style>
        </div>
      )
    }
  }
  )