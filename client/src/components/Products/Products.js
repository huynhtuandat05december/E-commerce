import React, { useEffect, useState } from 'react';
import './style.scss'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../actions/ProductAction';
import axios from 'axios'
function Products(props) {
    const data = useSelector(state => state.products);
    const dispatch = useDispatch();
    // const [data, setData] = useState([]);
    const getProducts = async () => {
        // console.log(token)
        const res = await axios.get('/api/products')
        // console.log(res.data);
        dispatch(fetchProducts(res.data))

    }
    useEffect(() => {
        getProducts();
    }, [])
    // const data = props.data;
    const [product, setProduct] = useState(null);
    const openModal = (product) => {
        setProduct(product)
    }
    const closeModal = () => {
        setProduct(null);
    }
    return (
        <div>
            <Fade bottom cascade>
                <ul className="products">
                    {
                        data.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={"#" + product._id} onClick={() => openModal(product)}>
                                        <img src={product.image} alt={product.title} />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>{product.price}</div>
                                        <button onClick={() => props.addToCart(product)} className="button button--primary">
                                            Add to cart
                                    </button>
                                    </div>

                                </div>
                            </li>

                        ))
                    }
                </ul>
            </Fade>
            {product && (
                <Modal isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                        <button className="close-modal" onClick={() => closeModal()}>X</button>
                        <div className="product-modal">
                            <img src={product.image} alt={product.title} />
                            <div className="produc-modal-description">
                                <p>
                                    <strong>{product.title}</strong>
                                </p>
                                <p>
                                    {product.description}
                                </p>
                                <p>
                                    Avaiable Size:
                                    {product.avaiblesSizes.map((item) => (
                                    <span>
                                        <button className="button">{item}</button>
                                    </span>
                                ))}
                                </p>
                            </div>
                            <div className="product-price">
                                <div>{product.price}</div>
                                <button className="button--primary" onClick={() => {
                                    props.addToCart(product);
                                    closeModal();
                                }}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </Zoom>

                </Modal>
            )}
        </div >
    );
}

export default Products;