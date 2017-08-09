import Layout from '../components/layout'
import withPage from '../providers/page'
import Register from '../components/register'

export default withPage(({url: {query: {next}}}) => {
    return <Layout title="Registrar Usuario" page="register">
        <Register next={next}/>
    </Layout>
})
