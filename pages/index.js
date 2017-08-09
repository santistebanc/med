import Layout from '../components/layout'
import withPage from '../providers/page'

export default withPage(() => {
  return <Layout title="Inicio" page="home">
        <div className="container">
          <div className="jumbotron">
              <h1>Mexicoendron</h1>
              <p>Compra Stock Videos de lugares en México grabados en dron.</p>
          </div>
        </div>
    </Layout>  
})
