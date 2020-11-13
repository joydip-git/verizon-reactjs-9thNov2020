import React from 'react'

export default function ProductDetail() {
    let product = null;
    let design = (
        <>
            <div classNameName='panel panel-primary'>
                <div className='panel-heading' style='font-size:large'>
                    {product.productName}
                    <a className='btn btn-primary' style='width:80px;float:right'>
                        Edit
                    </a>
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
                                title={product.productName} />
                        </div>
                    </div>
                </div>

                <div className='panel-footer'>
                    <a className='btn btn-default'
                        onClick={() => { }}
                        style={{ width: '80px' }}>
                        <i className='glyphicon glyphicon-chevron-left'></i>
                        Back
                    </a>
                </div>
            </div>
        </>
    );
    return design;
}
