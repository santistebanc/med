import Layout from '../components/layout'
import withPage from '../providers/page'
import Logout from '../components/logout'

export default withPage(({ url }) => {
    return <Layout title="Cerrar Sesión" url={url} hideSide>
        <Logout next={url.query.next} />
    </Layout>
})
