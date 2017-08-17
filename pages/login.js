import Layout from '../components/layout'
import withPage from '../providers/page'
import Login from '../components/login'

export default withPage(({url, url: {query: {next}}}) => {
    return <Layout title="Iniciar Sesión" url={url} hideSide>
        <Login next={next}/>
    </Layout>
})