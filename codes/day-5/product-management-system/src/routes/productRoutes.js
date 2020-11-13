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
        componentName: AddProduct,
        url: '/product/add'
    },
    {
        id: 5,
        componentName: UpdateProduct,
        url: '/product/update/:id'
    },
    {
        id: 6,
        componentName: ProductDetail,
        url: '/product/:id'
    },
    {
        id: 7,
        componentName: PageNotFound,
        url: '*'
    },
    
]