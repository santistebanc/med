import React from 'react'
import styles from '../styles/landing.scss'
import globalstyles from '../styles/youtube.scss'
import withLink from '../hocs/link'
import YouTube from 'react-youtube'

export default withLink(({Link})=>(
        <div className="root">
          <div id="VideoContainer">
            <YouTube
            className="landing"
        videoId="X8S29N_R6YY"
        opts={{playerVars:{loop:1,disablekb:1,iv_load_policy:3,autoplay:1,controls:0,modestbranding:1,rel:0,showinfo:0,playlist:"X8S29N_R6YY"}}}
        onPause={(e)=>{e.target.playVideo()}}
      />
            <div onMouseDown={(e)=>{e.stopPropagation()}}>
              <img src="static/MexicoEnDron-27.png" style={{ height: "12em" }} />
              <h4 style={{ fontSize: '2em', color: 'white', marginTop: 0 }}>Videos 4K de México en dron </h4>
              <input type="text" name="" placeholder="Buscar..." style={{ height: 30, width: "40%" }} /> <i className='fa fa-search' style={{ color: 'white', marginLeft: 5 }} />
              <h5 style={{ fontSize: '1em', color: 'white' }}>No encuentras lo que estass buscando. <a style={{ textDecoration: 'underline', color: 'white' }}>Contactanos</a></h5>
            </div>
          </div>

          <div id="CategoryContainer">
            <h1 style={{ textAlign: 'left', paddingLeft: '2%', color: '#404040' }}>Categorias Más Populares</h1>
            <Link prefetch href="/gallery">
              <div style={{cursor: 'pointer'}}>
                <div className="Category" style={{ background: "url(static/landing/ciudad.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Ciudad</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/campo.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Campo</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/industria.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Industria</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/deportes.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Deportes</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/playa.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Playa</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/fracc.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Fraccionamientos</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/iglesia.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Iglesias</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/parques.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Parques</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/paisaje.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Paisaje</p>
                </div>
                <div className="Category" style={{ background: "url(static/landing/misc.png) top right no-repeat transparent", backgroundSize: "100%" }}>
                  <p>Miscelaneos</p>
                </div>
              </div>
            </Link>
          </div>
          <div id="Contacto">
            <div id="info">
              <h1>Servicio de Grabación y Edición</h1>
              <p>Ofrecemos el servicio de ir a grabar lo que quieras a la locación que quieras.<br />
                Podemos entregarte los videos sin editar o si prefieres te entregamos un video editado. <br />
                Mandanos un correo o contactanos por whatsaap a los números: <br />
                444-849-63-91 / 444-190-20-59</p>
            </div>
            <div id="email">
              <form>
                Nombre: <br /><input type="text" name="" style={{ width: 400 }} /><br />
                Apellido(s): <br /><input type="text" name="" style={{ width: 400 }} /><br />
                Correo: <br /><input type="email" name="" style={{ width: 400 }} /><br />
                Asunto: <br /><input type="text" name="" style={{ width: 400 }} /><br />
                Descripción: <br /><textarea style={{ width: 400, height: 100 }}></textarea><br />
                <input type="submit" value="Enviar" />
              </form>
            </div>
          </div>
          <footer>
            <table >
              <tbody>
                <tr>
                  <td><a href="">Inicio</a></td>
                  <td><a href="">Ingresar</a></td>
                  <td><a href="">YouTube</a></td>
                  <td><a href="">Terminos y Condiciones</a></td>
                </tr>
                <tr>
                  <td><a href="">Videos</a></td>
                  <td><a href="">Editados</a></td>
                  <td><a href="">FaceBook</a></td>
                </tr>
                <tr>
                  <td><a href="">Contactos</a></td>
                  <td><a href="">Nosotros</a></td>
                  <td><a href="">Suscribirse</a></td>
                </tr>
              </tbody>

            </table>
          </footer>

          <style jsx global>{globalstyles}</style>
          <style jsx>{styles}</style>
        </div >
      )
)
