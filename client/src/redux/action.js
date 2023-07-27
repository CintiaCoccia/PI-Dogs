import axios from 'axios';

export const GET_BREEDS = "GET_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";


export const getBreeds = (temperament)=> {
    
    return async (dispatch) => {
        try {
            const result = await axios(buildUrl(temperament));
            dispatch({ type: GET_BREEDS, payload: result.data });
        } catch(error) {
            console.log(error)
        }
    }
}

function buildUrl(temperament) {
   const url = new URL("http://localhost:3001/dogs");
   if( temperament!= "todos") {
    url.searchParams.set('temperament', temperament)
   }  // => convierto a obj url
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


