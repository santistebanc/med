import React from 'react'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default C => props => (
  <div>
    <Head>
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    </Head>
    <C {...props} />
  </div>
)