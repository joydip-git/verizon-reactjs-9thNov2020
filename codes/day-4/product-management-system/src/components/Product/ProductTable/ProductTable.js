import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'
import './ProductTable.css'

const ProductTable = ({ products, removeHandler }) => {
    return (
        <div className='panel panel-primary'>
            <div className='panel panel-heading'>
                <h3>
                    {products.length} Record(s) found...
                </h3>
            </div>
            <div className='panel panel-body'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead className='headerStyle'>
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Code</td>
                                <td>Price</td>
                                <td>Rating</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((p) => {
                                    return <ProductRow product={p} key={p.productId} deleteHandler={removeHandler} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    removeHandler: PropTypes.func.isRequired
}

export default ProductTable
