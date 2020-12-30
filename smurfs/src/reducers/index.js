/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  FETCH_FAILURE, 
  FETCH_START,
  FETCH_SUCCESS,
  POST_FAILURE, 
  POST_START,
  POST_SUCCESS,
  PUT_SUCCESS,
} from '../actions'; 


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

function reducer(state=initialState,action) {
  switch(action.type){
    case(FETCH_START): {
      return {
        ...state,
        fetchingSmurfs: true
      }
    }
    case(FETCH_SUCCESS): {
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    }
    case(FETCH_FAILURE): {
      return{
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      }
    }
    case(POST_START): {
      return {
        ...state,
        addingSmurfs: true
      }
    }
    case(POST_SUCCESS): {
      return{
        ...state,
        smurfs: [...state.smurfs, action.payload],
        addingSmurfs: false
      }
    }
    case(POST_FAILURE): {
      return{
        ...state,
        error: action.payload,
        addingSmurfs: false
      }
    }
    case(PUT_SUCCESS): {
      //const newSmurfs = state.smurfs.map(smurf => {smurf.id === action.payload.id ? Object.assign(smurf,action.payload) : smurf = smurf})
      console.log("IN REDUCER PUT: ", action.payload)
      return{
        ...state,
        smurfs: action.payload
      }
    }
    default: {
      return state
    }
  }
}

 export default reducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
