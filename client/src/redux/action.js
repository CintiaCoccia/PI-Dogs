import axios from 'axios';

export const GET_BREEDS = "GET_BREEDS";

export const getBreeds = ()=> {
    return async (dispatch) => {
        try {
            const result = await axios("http://localhost:3001/dogs");
            dispatch({ type: GET_BREEDS, payload: result.data });
        } catch(error) {
            console.log(error)
        }
    }
}

async function getAllBreeds() {
    try {
        const result = await axios("http://localhost:3001/dogs");
        setBreeds(result.data);
    } catch(error) {
        console.log(error)
    }
}