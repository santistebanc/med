import Landing from '../components/landing'
import withPage from '../providers/page'

export default withPage(({ url }) => {
    return <Landing url={url} />
})