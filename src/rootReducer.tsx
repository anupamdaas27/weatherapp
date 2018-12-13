import  { GET_FIVE_DAY_WEATHER } from './actionCreators';

const initialState = {
    weatherforecast : []    
}

export default function rootReducer (state = initialState, action : any){
   
    switch(action.type){
        case GET_FIVE_DAY_WEATHER:
            return {...state, weatherforecast: action.data}
        default:
            return state;
    }
}