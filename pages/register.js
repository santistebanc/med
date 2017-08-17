import Layout from '../components/layout'
import withPage from '../providers/page'
import Register from '../components/register'

export default withPage(({url, url: {query: {next}}}) => {
    return <Layout title="Registrar Usuario" url={url} hideSide>
        <Register next={next}/>
    </Layout>
})
