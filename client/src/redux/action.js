import axios from "axios";

export const GET_BREEDS = "GET_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";
export const ORDER_BREEDS = "ORDER_BREEDS";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const GET_INPUTSEARCH = "GET_INPUTSEARCH";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";

export const getBreeds = (temperament, order, source, search, page) => {
    return async (dispatch) => {
        try {
            const result = await axios(buildUrl(temperament, order, source, search, page));
            dispatch({ type: GET_BREEDS, payload: result.data });
        } catch (error) {
            dispatch({ type: GET_BREEDS, payload: error.response.data });
        }
    };
};

function buildUrl(temperament, order, source, search, page ) {
    let url;
    if (search) {
        url = new URL("http://localhost:3001/dogs/name");
        url.searchParams.set("", search);
    } else {
        url = new URL("http://localhost:3001/dogs");
    }
    if (temperament != "todos") {
        url.searchParams.set("temperament", temperament);
    }
    if (source != "todos") {
        url.searchParams.set("source", source);
    }
    url.searchParams.set("order", order); // => convierto a obj url
    url.searchParams.set("page", page);
    return url.toString();
}

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const result = await axios("http://localhost:3001/temperaments");
            dispatch({ type: GET_TEMPERAMENTS, payload: result.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const filterTemperaments = (value) => {
    return { type: FILTER_TEMPERAMENTS, payload: value };
};
export const orderBreeds = (value) => {
    return { type: ORDER_BREEDS, payload: value };
};
export const filterSource = (value) => {
    return { type: FILTER_SOURCE, payload: value };
};
export const searchInput = (value) => {
    return { type: GET_INPUTSEARCH, payload: value };
};
export const nextPage = () => {
    return { type: NEXT_PAGE};
};
export const previousPage = () => {
    return { type: PREVIOUS_PAGE};
};
