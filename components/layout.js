import React from 'react'
import withHead from '../hocs/head'
import Filters from './filters.js'
import MenuBar from './menubar.js'
import Navigation from './navigation.js'
import globalstyles from '../styles/global.scss'
import styles from '../styles/layout.scss'

export default withHead(({ title, Head, hideSide, children, url }) => (
    <div className="root">
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <div className="menu">
            <MenuBar url={url}/>
        </div>
        <div className={"nav" + (hideSide ? " withoutside" : "")}>
            <Navigation url={url}/>
        </div>
        {!hideSide && <div className="side">
            <Filters />
        </div>}
        <div className={"content" + (hideSide ? " withoutside" : "")}>
            {children}
        </div>

        <style jsx global>{globalstyles}</style>
        <style jsx>{styles}</style>
    </div>
))