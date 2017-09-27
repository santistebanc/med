import Layout from '../components/layout'
import withPage from '../providers/page'
import ForgotPassword from '../components/forgot-password'

export default withPage(({url}) => {
    return <Layout title="Recuperar Contraseña" url={url} hideSide>
	    <ForgotPassword/>
    </Layout>
})


