const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const Axios = require('axios')
const thunk = require('redux-thunk')

const GETPRODUCTS_INITIATE = 'GETPRODUCTS_INITIATE'
const GETPRODUCTS_SUCCESS = 'GETPRODUCTS_SUCCESS'
const GETPRODUCTS_FAILURE = 'GETPRODUCTS_FAILURE'

const getProductsInitateActionCreator = () => {
    return {
        type: GETPRODUCTS_INITIATE
    }
}

const getProductsSuccessActionCreator = (products) => {
    return {
        type: GETPRODUCTS_SUCCESS,
        data: products
    }
}

const getProductsFailureActionCreator = (error) => {
    return {
        type: GETPRODUCTS_FAILURE,
        data: error
    }
}

const initialProductsState = {
    product: null,
    loading: true,
    error: null
}

const getProductsReducer = (state = initialProductsState, action) => {
    let newState = null;

    switch (action.type) {
        case GETPRODUCTS_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case GETPRODUCTS_SUCCESS:
            newState = {
                ...state,
                product: action.data,
                error: null,
                loading: false
            }
            break;
        case GETPRODUCTS_FAILURE:
            newState = {
                ...state,
                product: null,
                error: action.data,
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

const loggerMiddleware = createLogger()
const thunkMiddleware = thunk.default;
const productStore = createStore(getProductsReducer, applyMiddleware(loggerMiddleware, thunkMiddleware));

const fetchProductsAsyncCallbackCreator = (productId) => {
    const fetchProductsAsync = (dispatch) => {

        const initiateAction = getProductsInitateActionCreator();
        dispatch(initiateAction);

        Axios.get('http://127.0.0.1:8081/productservice/' + productId)
            .then(resp => {
                const successAction = getProductsSuccessActionCreator(resp.data);
                dispatch(successAction)
            })
            .catch(e => {
                const failureAction = getProductsFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductsAsync;
}

//fetchProductsAsync(productStore.dispatch);
productStore.dispatch(fetchProductsAsyncCallbackCreator(1))
//productStore.dispatch(fetchProductsAsyncCallbackCreator(5))