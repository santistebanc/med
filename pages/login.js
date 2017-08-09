import Layout from '../components/layout'
import withPage from '../providers/page'
import Login from 'staart/lib/components/login'

export default withPage(({url: {query: {next}}}) => {
    return <Layout title="Iniciar Sesión" page="login">
        <Login next={next}/>
    </Layout>
})