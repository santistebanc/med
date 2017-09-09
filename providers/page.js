import { compose, setStatic } from 'recompose'
import withRedux from "next-redux-wrapper"
import { makeStore } from '../redux/store.js'
import provideOothNext from './ooth'
import provideNext from './next'
import provideSettings from './settings'

export default compose(
    withRedux(makeStore, (state) => ({ ...state })),
    provideOothNext,
    provideNext,
    provideSettings
)