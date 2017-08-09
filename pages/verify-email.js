import Layout from '../components/layout'
import withPage from '../providers/page'
import VerifyEmail from 'staart/lib/components/verify-email'

export default withPage(({url: {query: {token}}}) => {
    return <Layout title="Verificar Correo Electrónico" page="verify-email">
        <VerifyEmail token={token}/>
    </Layout>
})
