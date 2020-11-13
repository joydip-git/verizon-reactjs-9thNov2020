import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchProductByIdAsyncCallbackCreator } from '../../../redux/async-opertions/productAsyncCallbacks'

const ProductDetail = (props) => {

    //const history = useHistory();
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
                <div classNameName='panel panel-primary'>
                    <div className='panel-heading' style={{ fontSize: 'large' }}>
                        {product.productName}
                        <Link className='btn btn-primary' style={{ width: '80px', float: 'right' }} to={`/product/update/${product.productId}`}>
                            Edit
                        </Link>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{product.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{product.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{product.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{product.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>

                                    <div className='col-md-6'>{product.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>5 Star Rating:</div>
                                    <div className='col-md-6'>
                                        {product.starRating}
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img
                                    className='center-block img-responsive'
                                    style={{ width: '200px', margin: '2px' }}
                                    src={product.imageUr}
                                    title={product.productName}
                                    alt='NA'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='panel-footer'>
                        <Link className='btn btn-default' to={'/products'}
                            style={{ width: '80px' }}>
                            <i className='glyphicon glyphicon-chevron-left'></i>
                            Back
                        </Link>
                    </div>
                </div>
            </>
        );
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
