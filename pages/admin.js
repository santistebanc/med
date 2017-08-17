import Layout from '../components/layout'
import withPage from '../providers/page'
import Admin from '../components/admin'

export default withPage(({url}) => (
  <Layout title="Admin" url={url} hideSide>
    <div className="container">
      <Admin />
    </div>
  </Layout>
))

