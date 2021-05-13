import React from 'react';
import './style.scss'
import Fade from 'react-reveal/Fade'
function Cart(props) {
    return (
        <div>
            {
                props.cartItems.length === 0 ? (<div className="cart-header">Cart is empty</div>)
                    : (<div className="cart-header">{props.cartItems.length} items</div>)
            }
            <Fade left cascade>
                <div className="cart-detail">
                    <ul className="cart-detail-items">
                        {
                            props.cartItems.map((item) => (
                                <li key={item._id}>
                                    <div >
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div>{item.title}</div>
                                    <div className="right">
                                        {item.price} x {item.count}
                                        <button onClick={() => props.removeToCart(item)}>Remove</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Fade>
            <div className="total">
                {props.cartItems.length === 0 ? (<div>Total: 0</div>)
                    : (<div>Total:{props.cartItems.reduce((a, c) => a + c.count * c.price, 0)}</div>)
                }
                <button className="button button--primary">Procced</button>
            </div>

        </div>
    );
}

export default Cart;