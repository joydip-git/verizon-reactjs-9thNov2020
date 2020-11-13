import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductByIdAsyncCallbackCreator } from '../../../redux/async-opertions/productAsyncCallbacks'

const ProductDetail = (props) => {

    const history = useHistory();
    const params = useParams();
    const id = parseInt(params.id)

    const product = useSelector((appState) => appState.getSingleProduct.product)
    const loading = useSelector((appState) => appState.getSingleProduct.loading)
    const error = useSelector((appState) => appState.getSingleProduct.error)
    const dispatch = useDispatch()

    const callback = fetchProductByIdAsyncCallbackCreator(id)
    dispatch(callback)

    let design = null;
    if (loading) {
        design = <span>Loading....</span>;
    } else if (error !== null) {
        design = <span>{error}</span>;
    } else if (product === null) {
        design = <span>No Product Found with id: {id}</span>
    } else {
        design = (
            <>
                Name:&nbsp;<span>{product.productName}</span>
                <br />
                <button
                    className='btn btn-primary'
                    onClick={() => history.push('/products')}>
                    Back To Products
                </button>
            </>
        )
    }
    return design;
}
/*
const mapPropsToStateProps = (appState) => {
    return {
        product: appState.getSingleProduct.product,
        error: appState.getSingleProduct.error,
        loading: appState.getSingleProduct.loading
    }
}
const mapPropsToDispatch = (dispatch) => {
    return {
        getProductById: () => {
           const callback = fetchProductByIdAsyncCallbackCreator(1)
            dispatch(callback)
        }
    }
}
export default connect(mapPropsToStateProps, mapPropsToDispatch)(ProductDetail)
*/
export default ProductDetail
