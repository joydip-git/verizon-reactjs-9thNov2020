import { combineReducers } from "redux";
import * as ProductReducers from './productReducers'

const rootReducer = combineReducers({
    getAllProducts: ProductReducers.getProductsReducer,
    getSingleProduct: ProductReducers.getProductByIdReducer
})

export default rootReducer;