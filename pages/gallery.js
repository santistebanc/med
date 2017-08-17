import Layout from '../components/layout'
import withPage from '../providers/page'
import VideosGrid from '../components/videos-grid'
import VideoCard from '../components/video-card'

export default withPage(({ url }) => (
  <Layout title="Gallery" url={url}>
    <div className="container">
      <VideoCard url={url} />
      <VideosGrid/>
    </div>
  </Layout>
))
