import * as ActionTypes from '../action-types/productActionTypes'
import * as ProductStates from '../states/productStates'

export const getProductsReducer = (state = ProductStates.initialProductsState, { type, data }) => {
    let newState = null;

    switch (type) {
        case ActionTypes.GETPRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: null,
                loading: true
            }
            break;

        case ActionTypes.GETPRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: data,
                error: null,
                loading: false
            }
            break;
        case ActionTypes.GETPRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                error: data,
                loading: false
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState;
}

export const getProductByIdReducer = (state = ProductStates.initialProductByIdState, { type, data }) => {
    let newState = null;

    switch (type) {
        case ActionTypes.GETPRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case ActionTypes.GETPRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: data,
                error: null,
                loading: false
            }
            break;
        case ActionTypes.GETPRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                error: data,
                loading: false
            }
            break;

        default:
            newState = {
                ...state
            }
            break;
    }

    return newState;
}
