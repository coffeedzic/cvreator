import { combineReducers } from "redux"

import creatorReducer from './reducers/creator-reducer'
import personalReducer from './reducers/personal-reducer'
import cvReducer from './reducers/cv-reducer'
import settingsReducer from "./reducers/settings-reducer"

const rootReducer = combineReducers({
  creator: creatorReducer,
  personal: personalReducer,
  cv: cvReducer,
  settings: settingsReducer
})

export default rootReducer