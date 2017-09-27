import OothClient from 'ooth-client'
import withOothNext from 'ooth-client-react-next'
import settings from '../public-settings'
import global from 'global'
import window from 'global/window'

const oothClient = new OothClient({
    oothUrl: `${window.location && window.location.origin || global.process && global.process.env.ORIGIN_URL || settings.url}/auth`,
})

export default withOothNext(oothClient)
