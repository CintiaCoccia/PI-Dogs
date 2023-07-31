import { FILTER_TEMPERAMENTS, GET_BREEDS, GET_TEMPERAMENTS, ORDER_BREEDS, FILTER_SOURCE, GET_INPUTSEARCH, PREVIOUS_PAGE, NEXT_PAGE } from "./action";

const initialState = {
    breeds: defaultBreeds(),
    temperaments: [],
    navBar: {
        search:"",
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
                breeds: action.payload, //cambie de [ ] de breeds a { breeds:[]}
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
            newState.breeds = defaultBreeds(); //seteo para caer en Loading
            return newState;
        }
        case ORDER_BREEDS: {
            const newState = {
                ...state,
            };
            newState.navBar.order = action.payload;
            newState.breeds = defaultBreeds(); //seteo para caer en Loading
            return newState;
        }
        case FILTER_SOURCE: {
            const newState = {
                ...state,
            };
            newState.navBar.source = action.payload;
            newState.breeds = defaultBreeds(); //seteo para caer en Loading
            return newState;
        }
        case GET_INPUTSEARCH: {
            const newState = {
                ...state,
            };
            newState.navBar.search = action.payload;
            newState.breeds = defaultBreeds();
            return newState;
        }
        case PREVIOUS_PAGE: {
            const newState = {
                ...state
            }
            newState.breeds.paging.page = Math.max(0, newState.breeds.paging.page-1) //no habrá pag -1.
            return newState;
        }
        case NEXT_PAGE: {
            const newState = {
                ...state
            }
            newState.breeds.paging.page++;
            return newState;
        }
        default: {
            return state;
        }
    }
};

function defaultBreeds() {
    return {
        paging: {
            page: 0,
            moreElements: false
        }
    }
}

export default rootReducer;
