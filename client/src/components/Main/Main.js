import React, { useState } from 'react';
import Products from '../Products/Products';
import './style.scss'
import data from '../../data.json'
import Filter from '../Filter/Filter';
import Cart from '../Cart/Cart';

function Main(props) {
    const [products, setProducts] = useState(data.products)
    const [size, setSize] = useState("");
    const [sort, setSort] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const handleSize = (e) => {
        if (e.target.value === "") {
            setSize(e.target.value);
            setProducts(data.products);
        }
        else {
            setSize(e.target.value);
            setProducts(data.products.filter((product) => (
                product.avaiblesSizes.indexOf(e.target.value) >= 0
            )))
        }
    }
    const handleSort = (e) => {
        console.log(e.target.value);
        setSort(e.target.value);
        setProducts(data.products.slice().sort((a, b) =>
            e.target.value === "lowest"
                ? a.price > b.price
                    ? 1
                    : -1
                : e.target.value === "highest"
                    ? a.price < b.price
                        ? 1
                        : -1
                    : a._id > b._id
                        ? 1
                        : -1

        ))
    }
    const addToCart = (product) => {
        const tempCartItems = cartItems.slice();
        let existInCart = false;
        tempCartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++;
                existInCart = true;
            }
        })
        if (!existInCart) {
            tempCartItems.push({ ...product, count: 1 })
        }
        setCartItems(tempCartItems);

    }
    const removeToCart = (product) => {
        const tempCartItems = cartItems.slice();
        tempCartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count--;
            }
        })
        setCartItems(tempCartItems.filter((item) =>
            item.count > 0
        ));

    }
    return (
        <main>
            <div className="content">
                <div className="main">
                    <Filter count={products.length} handleSize={handleSize} handleSort={handleSort} />
                    <Products addToCart={addToCart} />
                </div>
                <div className="sidebar">
                    <Cart cartItems={cartItems} removeToCart={removeToCart} />
                </div>
            </div>
        </main>
    );
}

export default Main;