import {createStore, applyMiddleware, combineReducers} from 'redux'
import {useSelector as reduxUseSelector} from 'react-redux'
import thunk from 'redux-thunk'

import userReducer from './user/reducers'
import {StoreType} from './types'

export default createStore(combineReducers({user: userReducer}), applyMiddleware(thunk))

export * from 'react-redux'

export function useSelector(selector: (store: StoreType) => any) {
  return reduxUseSelector(selector)
}
