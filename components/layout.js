import React from 'react'
import Head from 'next/head'
// import Filters from './filters.js'
import MenuBar from './menubar.js'
import globalstyles from '../styles/global.scss'
import styles from '../styles/layout.scss'

const menubarheight = 83;
const sidewidth = 200;

export default (props) => (
    <div className="root">

        <Head>
            <title>{props.title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>

        <div className="menu">
            <MenuBar user={props.user} />
        </div>

        {/* {!props.hideSide && <div className="side">
            <Filters />
        </div>} */}

        <div className={"content" + (props.hideSide ? " withoutside" : "")}>
            {props.children}
        </div>

         <style jsx global>{globalstyles}</style>
        <style jsx>{styles}</style> 

    </div>
)