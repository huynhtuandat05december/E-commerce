import React from 'react';
import './style.scss'
function Filter(props) {

    return (
        <div className="filter">
            <div className="filter--result">{props.count}</div>
            <div className="filter--sort">
                Order
                <select name="" id="" onChange={props.handleSort}>
                    <option value="">ALL</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter--size" onChange={props.handleSize}>
                Filter
                <select name="" id="">
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

        </div>
    );
}

export default Filter;