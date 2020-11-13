import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'

const ProductRow = ({ product, deleteHandler }) => {
    return (
        <tr>
            <td>
                <a href={`/products/${product.productId}`}>
                    <img
                        src={product.imageUrl}
                        alt='NA'
                        title={product.productName}
                    />
                </a>
            </td>
            <td>
                <a href={`/product/update/${product.productId}`}>
                    {product.productName}
                </a>
            </td>
            <td>{product.productCode}</td>
            <td>{product.price}</td>
            <td>{product.starRating}</td>
            <td>
                <button className='btn btn-danger' onClick={() => deleteHandler(product.productId)}>Delete</button>
            </td>
        </tr >
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
}

export default ProductRow
