import Layout from '../components/layout'
import withPage from '../providers/page'
import Account from '../components/account'

export default withPage(({url}) => (
    <Layout title="Cuenta de Usuario" url={url} hideSide>
    	<div className="container">
            <Account/>
        </div>
    </Layout>
))

