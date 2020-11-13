import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addProduct } from '../../../services/productService'

const AddProduct = () => {

    const history = useHistory();

    const [formState, setFormState] = useState({
        productId: 0,
        productName: '',
        productCode: '',
        price: 0,
        imageUrl: '',
        starRating: 0,
        description: '',
        releaseDate: ''
    })

    const updateFormHandler = (propName, propValue) => {
        setFormState((ps) => {
            return {
                ...ps,
                [propName]: propValue
            }
        })
    }

    const submitData = (event) => {
        event.preventDefault();
        addProduct(formState)
            .then((resp) => {
                if (resp.status === 200) {
                    history.push('/products');
                } else {

                }
            }).catch(e => console.log(e));
    }

    return (
        <div className="container">
            <form className="form-horizontal">

                <div className="form-group">
                    <label htmlFor="productId" className="col-sm-2 control-label">Id:</label>
                    <div className="col-sm-10">
                        <input type='text'
                            className="form-control"
                            value={formState.productId}
                            name='productId'
                            onChange={(e) => updateFormHandler('productId', parseInt(e.target.value))}
                            placeholder="product id" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productName" className="col-sm-2 control-label">Name:</label>
                    <div className="col-sm-10">
                        <input type='text'
                            value={formState.productName}
                            className="form-control"
                            id="productName"
                            name='productName'
                            placeholder="product name"
                            onChange={(e) => updateFormHandler('productName', e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="productCode" className="col-sm-2 control-label">Code:</label>
                    <div className="col-sm-10">
                        <input type='text'
                            value={formState.productCode}
                            className="form-control" id="productCode" name="productCode" placeholder="product code"
                            onChange={(e) => updateFormHandler('productCode', e.target.value)} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate" className="col-sm-2 control-label">Release Date:</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            value={formState.releaseDate}
                            className="form-control" id="releaseDate" name="releaseDate" placeholder="product release date"
                            onChange={(e) => updateFormHandler('releaseDate', e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="col-sm-2 control-label">Description:</label>
                    <div className="col-sm-10">
                        <input
                            type='textarea'
                            value={formState.description}
                            className="form-control" id="description" name="description" placeholder="product description"
                            onChange={(e) => updateFormHandler('description', e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="price" className="col-sm-2 control-label">Price:</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            value={formState.price}
                            className="form-control" id="price" name="price" placeholder="product price"
                            onChange={(e) => updateFormHandler('price', parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="starRating" className="col-sm-2 control-label">Star Rating:</label>
                    <div className="col-sm-10">
                        <input type='text'
                            value={formState.starRating}
                            className="form-control" id="starRating" name="starRating" placeholder="product Rating"
                            onChange={(e) => updateFormHandler('starRating', parseFloat(e.target.value))} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl" className="col-sm-2 control-label">Image URL:</label>
                    <div className="col-sm-10">
                        <input
                            type='text'
                            value={formState.imageUrl}
                            className="form-control" id="imageUrl" name="imageUrl" placeholder="product image url"
                            onChange={(e) => updateFormHandler('imageUrl', e.target.value)} />
                    </div>
                </div>
                <div className="container-fluid"
                    style={{ textAlign: "center" }}>

                    <input type="submit" className="btn btn-primary" value="Add" onClick={submitData} />
                    <button type="submit" className="btn btn-alert">Cancel</button>

                </div>

            </form>
        </div>
    )
}

export default AddProduct
