import {GET_DATA_START, GET_DATA_OK, GET_DATA_ERROR} from "../actionTypes"
import axios from 'axios';
import endpoint from "../index";

function getData (state) {
 
  return dispatch => {
   
      dispatch({type: GET_DATA_START});
      state.checked.forEach(element => {
        let args = {
          'startTime': state.startDate,
          'stopTime': state.endDate,
          'deviceId': element
        }
        axios.get(`${endpoint}/getSerializedData`, {headers: {'Access-Control-Allow-Origin': '*'},params: args})
        .then (response => {
          dispatch({type: GET_DATA_OK, data: response.data});
        })
        .catch(error => dispatch({type: GET_DATA_ERROR}))
       })
      };
      
}


export default getData;