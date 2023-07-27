import { FILTER_TEMPERAMENTS, GET_BREEDS, GET_TEMPERAMENTS } from "./action";

const initialState = {
    breeds: [],
    temperaments:[],
    navBar: {
        temperament: "todos"
    }
};

const rootReducer = (state = initialState , action) => {
    switch(action.type) {
        case GET_BREEDS: {
            return {
                ...state,
                breeds: action.payload
            }
        }
        case GET_TEMPERAMENTS: {
            return {
                ...state,
                temperaments: action.payload
            }
        }
        case FILTER_TEMPERAMENTS: {
            const newState = {
                ...state
            } 
            newState.navBar.temperament = action.payload
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;