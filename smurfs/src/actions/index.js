/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_START});
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE,payload: err})
    })
}

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: POST_START})
  axios.post('http://localhost:3333/smurfs',smurf)
    .then(res => {
      dispatch({type: POST_SUCCESS,payload: smurf})
    })
    .catch(err => {
      dispatch({
        type: POST_FAILURE,
        payload: err
      })
    })
}

export const PUT_SUCCESS = "PUT_SUCCESS";

export const updateSmurf = (smurf) => dispatch => {
  
  axios.put(`http://localhost:3333/smurfs/${smurf.id}`,smurf)
    .then(res => {
      console.log("PUT REQUEST: ",res)
      dispatch({
        type: PUT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
