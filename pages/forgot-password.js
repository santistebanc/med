import Layout from '../components/layout'
import withPage from '../providers/page'
import ForgotPassword from '../components/forgot-password'

export default withPage(() => {
    return <Layout title="Recuperar Contraseña" page="forgot-password" hideSide>
	    <ForgotPassword/>
    </Layout>
})


