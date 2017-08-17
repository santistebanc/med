import Layout from '../components/layout'
import withPage from '../providers/page'
import VideoCard from '../components/video-card'

export default withPage(({ url }) => (
  <Layout title="Video" url={url}>
    <div className="container">
      <VideoCard url={url} />
    </div>
  </Layout>
))
