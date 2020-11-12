import Axios from 'axios'
import { apiURL } from '../constants/apiURL'

export const getProducts = () => {
    return Axios.get(apiURL);
}

export const getProductById = (productId) => {
    return Axios.get(`${apiURL}/${productId}`);
    //return Axios.get(apiURL + '/' + productId)
}

export const deleteProduct = (productId) => {
    return Axios.delete(`${apiURL}/${productId}`)
}

export const addProduct = (product) => {
    return Axios.post(apiURL, product);
}

export const updateProduct = (product) => {
    return Axios.put(apiURL, product);
}