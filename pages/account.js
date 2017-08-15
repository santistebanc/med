import Layout from '../components/layout'
import withPage from '../providers/page'
import Account from 'staart/lib/components/account'

export default withPage(() => (
    <Layout title="Cuenta de Usuario" page="account" hideSide>
    	<div className="container">
            <Account/>
        </div>
    </Layout>
))

