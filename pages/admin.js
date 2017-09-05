import Layout from '../components/layout'
import withPage from '../providers/page'
import Admin from '../components/admin'

export default withPage(({ url }) => (
  <Layout title="Administrador" url={url} hideSide>
    <div className="container">
      <Admin url={url} caca={"holaaaa"} />
    </div>
  </Layout>
))

