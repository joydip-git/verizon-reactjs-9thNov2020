import * as Actions from '../actions/productActions'
import * as ProductService from '../../services/productService'

export const fetchProductByIdAsyncCallbackCreator = (productId) => {
    const fetchProductByIdAsync = (dispatch) => {

        const initiateAction = Actions.getProductByIdInitateActionCreator();
        dispatch(initiateAction);

        ProductService.getProductById(productId)
            .then(resp => {
                const successAction = Actions.getProductByIdSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failureAction = Actions.getProductByIdFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductByIdAsync;
}


export const fetchProductsAsyncCallbackCreator = () => {
    const fetchProductsAsync = (dispatch) => {

        const initiateAction = Actions.getProductsInitateActionCreator();
        dispatch(initiateAction);

        ProductService.getProducts()
            .then(resp => {
                const successAction = Actions.getProductsSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failureAction = Actions.getProductsFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductsAsync;
}