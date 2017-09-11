import Layout from '../components/layout'
import withPage from '../providers/page'
import VerifyEmail from '../components/verify-email'

export default withPage(({ url }) => {
    return <Layout title="Verificar Correo Electrónico" url={url} hideSide>
        <VerifyEmail token={url.query.token} />
    </Layout>
})
