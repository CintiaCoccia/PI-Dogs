import axios from 'axios';

export const GET_BREEDS = "GET_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";
export const ORDER_BREEDS = "ORDER_BREEDS";
export const FILTER_SOURCE = "FILTER_SOURCE";


export const getBreeds = (temperament, order, source)=> {
    
    return async (dispatch) => {
        try {
            const result = await axios(buildUrl(temperament, order, source));
            dispatch({ type: GET_BREEDS, payload: result.data });
        } catch(error) {
            console.log(error)
        }
    }
}

function buildUrl(temperament, order, source) {
   const url = new URL("http://localhost:3001/dogs");
   if( temperament!= "todos") {
    url.searchParams.set('temperament', temperament)
   }
   if(source != "todos") {
    url.searchParams.set('source', source)
    }
   url.searchParams.set('order', order)  // => convierto a obj url
    return url.toString();
}


export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const result = await axios("http://localhost:3001/temperaments")
            dispatch({ type: GET_TEMPERAMENTS, payload: result.data})
        } catch(error) {
            console.log(error)
        }
    }
}

export const filterTemperaments = (value) => {
    return { type: FILTER_TEMPERAMENTS, payload: value}
}
export const orderBreeds = (value) => {
    return { type: ORDER_BREEDS, payload: value}
}
export const filterSource = (value) => {
    return { type: FILTER_SOURCE, payload: value}
}


