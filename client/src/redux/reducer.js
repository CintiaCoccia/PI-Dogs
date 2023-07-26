import { GET_BREEDS } from "./action";

const initialState = {
    breeds: []
};

const rootReducer = (state = initialState , action) => {
    switch(action.type) {
        case GET_BREEDS: {
            return {
                ...state,
                breeds: action.payload
            }
        }
        default: {
            return {...state}
        }
    }
};

export default rootReducer;