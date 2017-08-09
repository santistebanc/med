import Layout from '../components/layout'
import withPage from '../providers/page'

export default withPage(() => (
    <Layout title="Dashboard" page="dashboard">
        <div className="container">
            <h1>Dashboard</h1>
            <p>Aquí puedes ver todas tus colecciones de videos</p>
        </div>
    </Layout>
))
