import Layout from '../components/layout'
import withPage from '../providers/page'

export default withPage(({url}) => (
    <Layout title="Mis Videos" url={url}>
        <div className="container" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Mis Videos</h1>
            <p>Aquí puedes ver todas tus colecciones de videos</p>
        </div>
    </Layout>
))
