
const intialState = [];
console.log(intialState);
const productsReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS': {
            return action.payload;
        }
        // case 'FILTER_PRODUCTS_BY_SIZE': {
        //     if (action.payload === "") {
        //         return state
        //     }
        //     else {
        //         setSize(e.target.value);
        //         setProducts(data.products.filter((product) => (
        //             product.avaiblesSizes.indexOf(e.target.value) >= 0
        //         )))
        //     }
        // }
        default:
            return state

    }
}
export default productsReducer;