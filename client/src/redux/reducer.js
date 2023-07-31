import { FILTER_TEMPERAMENTS, GET_BREEDS, GET_TEMPERAMENTS, ORDER_BREEDS, FILTER_SOURCE } from "./action";

const initialState = {
    breeds: null,
    temperaments: [],
    navBar: {
        // input:"",
        temperament: "todos",
        order: "asc",
        source: "todos",
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREEDS: {
            return {
                ...state,
                breeds: action.payload.breeds, //cambie de [ ] de breeds a { breeds:[]}
            };
        }
        case GET_TEMPERAMENTS: {
            return {
                ...state,
                temperaments: action.payload,
            };
        }
        case FILTER_TEMPERAMENTS: {
            const newState = {
                ...state,
            };
            newState.navBar.temperament = action.payload;
            newState.breeds = null; //seteo para caer en Loading
            return newState;
        }
        case ORDER_BREEDS: {
            const newState = {
                ...state,
            };
            newState.navBar.order = action.payload;
            newState.breeds = null; //seteo para caer en Loading
            return newState;
        }
        case FILTER_SOURCE: {
            const newState = {
                ...state,
            };
            newState.navBar.source = action.payload;
            newState.breeds = null; //seteo para caer en Loading
            return newState;
        }

        default: {
            return state;
        }
    }
};

export default rootReducer;
