import Layout from '../components/layout'
import withPage from '../providers/page'
import ForgotPassword from 'staart/lib/components/forgot-password'

export default withPage(() => {
    return <Layout title="Recuperar Contraseña" page="forgot-password">
	    <ForgotPassword/>
    </Layout>
})


