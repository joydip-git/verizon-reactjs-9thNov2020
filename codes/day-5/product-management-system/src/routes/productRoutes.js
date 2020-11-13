import Home from "../components/Common/Home/Home";
import PageNotFound from "../components/Common/PageNotFound/PageNotFound";
import ProductList from "../containers/Product/ProductList";
import ProductDetail from '../components/Product/ProductDetail/ProductDetail'
import AddProduct from '../components/Product/AddProduct/AddProduct'
import UpdateProduct from '../components/Product/UpdateProduct/UpdateProduct'

export const productRoutes = [
    {
        id: 1,
        componentName: Home,
        url: '/'
    },
    {
        id: 2,
        componentName: Home,
        url: '/home'
    },
    {
        id: 3,
        componentName: ProductList,
        url: '/products'
    },
    {
        id: 4,
        componentName: ProductDetail,
        url: '/products/view/:id'
    },
    {
        id: 5,
        componentName: AddProduct,
        url: '/products/add'
    },
    {
        id: 6,
        componentName: UpdateProduct,
        url: '/products/update/:id'
    },
    {
        id: 7,
        componentName: PageNotFound,
        url: '*'
    }
]