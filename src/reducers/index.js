import { combineReducers } from 'redux'
import processData from './processData'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  processData,
  visibilityFilter
})
