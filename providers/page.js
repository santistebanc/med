import withOothNext from './ooth'
import withNext from './next'
import { compose, setStatic } from 'recompose'
import withRedux from "next-redux-wrapper"
import { makeStore } from '../redux/store.js'

export default compose(
    withRedux(makeStore, (state) => ({ ...state })),
    withOothNext,
    withNext,
)