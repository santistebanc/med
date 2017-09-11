import Layout from '../components/layout'
import withPage from '../providers/page'
import ResetPassword from '../components/reset-password'

export default withPage(({ url }) => {
    return <Layout title="Reestablecer Contraseña" url={url} hideSide>
        <ResetPassword token={url.query.token} />
    </Layout>
})
