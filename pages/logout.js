import Layout from '../components/layout'
import withPage from '../providers/page'
import Logout from '../components/logout'

export default withPage(({url: {query: {next}}}) => {
    return <Layout title="Cerrar Sesión" page="logout" hideSide>
        <Logout next={next}/>
    </Layout>
})
