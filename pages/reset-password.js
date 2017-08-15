import Layout from '../components/layout'
import withPage from '../providers/page'
import ResetPassword from 'staart/lib/components/reset-password'

export default withPage(({url: {query: {token}}}) => {
    return <Layout title="Reestablecer Contraseña" page="reset-password" hideSide>
        <ResetPassword token={token}/>
    </Layout>
})
