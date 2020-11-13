import { Component } from "react";
import { connect } from "react-redux";
import ProductTable from "../../components/Product/ProductTable/ProductTable";
// import { getProducts, deleteProduct } from "../../services/productService";
import { fetchProductsAsyncCallbackCreator } from '../../redux/async-opertions/productAsyncCallbacks'

class ProductList extends Component {

    deleteProductRecordHandler = (productId) => {
        /*
        deleteProduct(productId)
            .then((resp) => {
                if (resp.status === 200) {
                    let copyOfProducts = [...this.state.products]
                    let index = copyOfProducts.findIndex(p => p.productId === productId);
                    copyOfProducts.splice(index, 1);
                    this.setProducts(copyOfProducts);
                } else {
                    this.setError(resp.statusText)
                }
                // if (resp.status === 200) {
                //     let newProducts = resp.data.data
                //     this.setProducts(newProducts);
                // } else {
                //     this.setError(resp.data.message)
                // }
            })
            .catch(e => this.setError(e))
            */
    }

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        const { products, loading, error } = this.props;

        let design = null;
        if (loading) {
            design = <span>Loading....</span>;
        } else if (error !== null) {
            design = <span>{error}</span>;
        } else if (products.length === 0) {
            design = <span>No Products Found...</span>
        } else {
            design = (
                <div className='container'>
                    <ProductTable products={products} removeHandler={this.deleteProductRecordHandler} />
                </div>
            )
        }

        return design;
    }
}

const mapPropsToStateProps = (appState) => {
    return {
        products: appState.getAllProducts.products,
        loading: appState.getAllProducts.loading,
        error: appState.getAllProducts.error
    }
}
const mapPropsToDispatch = (dispatch) => {
    return {
        getProducts: () => dispatch(fetchProductsAsyncCallbackCreator())
    }
}
// const connector = connect(mapPropsToStateProps, mapPropsToDispatch);
// connector(ProductList);
export default connect(mapPropsToStateProps, mapPropsToDispatch)(ProductList);