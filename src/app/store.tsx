import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";

const customKepReducer = keplerGlReducer.initialState({
  uiState:{
    readOnly:true,
    currentModal: null
  }
})
const reducers = combineReducers({
  keplerGl: customKepReducer
});

export default createStore(reducers, {}, applyMiddleware(taskMiddleware));