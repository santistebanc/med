import Layout from '../components/layout'
import withPage from '../providers/page'
import Logout from 'staart/lib/components/logout'

export default withPage(({url: {query: {next}}}) => {
    return <Layout title="Cerrar Sesión" page="logout">
        <Logout/>
    </Layout>
})
