import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";



 const navLocation = {
    home:true,
    maps:false,
    data:false

  }
  function navToggleReducer(state = navLocation, action){
    return state;
  }


const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  navToggle: navToggleReducer
});

export default createStore(reducers, {}, applyMiddleware(taskMiddleware));