export const fetchProducts = (data) => {
    return {
        type: 'GET_PRODUCTS',
        payload: data,
    }
}
export const filterSize = (data) => {
    return {
        type: 'FILTER_PRODUCTS_BY_SIZE',
        payload: data
    }
}
