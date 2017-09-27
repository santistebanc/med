import PropTypes from 'prop-types'
import { withContext } from 'recompose'
import settings from '../public-settings'

export default withContext({
  settings: PropTypes.object,
}, () => ({
  settings
}))