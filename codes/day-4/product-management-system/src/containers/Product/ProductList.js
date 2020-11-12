import { Component } from "react";
import ProductTable from "../../components/Product/ProductTable/ProductTable";
import { getProducts, deleteProduct } from "../../services/productService";

class ProductList extends Component {

    state = {
        products: [],
        error: '',
        loading: true
    }
    setError = (e) => {
        let errorMessage = e.message;
        this.setState({
            products: [],
            error: errorMessage,
            loading: false
        })
    }
    setProducts = (newArray) => {
        this.setState({
            products: newArray,
            error: '',
            loading: false
        })
    }
    deleteProductRecordHandler = (productId) => {
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
    }

    componentDidMount() {
        setTimeout(() => {
            getProducts()
                .then((resp) => {
                    let productArray = resp.data;
                    this.setProducts(productArray);
                })
                .catch((e) => {
                    this.setError(e);
                })
        }, 1000);
    }

    render() {
        const { products, loading, error } = this.state;

        let design = null;
        if (loading) {
            design = <span>Loading....</span>;
        } else if (error !== '') {
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
export default ProductList;