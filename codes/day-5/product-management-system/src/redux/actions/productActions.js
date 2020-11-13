import * as ActionTypes from '../action-types/productActionTypes'

export const getProductsInitateActionCreator = () => {
    return {
        type: ActionTypes.GETPRODUCTS_INITIATE
    }
}

export const getProductsSuccessActionCreator = (products) => {
    return {
        type: ActionTypes.GETPRODUCTS_SUCCESS,
        data: products
    }
}

export const getProductsFailureActionCreator = (error) => {
    return {
        type: ActionTypes.GETPRODUCTS_FAILURE,
        data: error
    }
}

export const getProductByIdInitateActionCreator = () => {
    return {
        type: ActionTypes.GETPRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccessActionCreator = (product) => {
    return {
        type: ActionTypes.GETPRODUCTBYID_SUCCESS,
        data: product
    }
}

export const getProductByIdFailureActionCreator = (error) => {
    return {
        type: ActionTypes.GETPRODUCTBYID_FAILURE,
        data: error
    }
}