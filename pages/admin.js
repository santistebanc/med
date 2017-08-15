import Layout from '../components/layout'
import withPage from '../providers/page'
import Admin from '../components/admin'

export default withPage(() => (
  <Layout title="Admin" page="admin" hideSide>
    <div className="container">
      <Admin />
    </div>
  </Layout>
))

