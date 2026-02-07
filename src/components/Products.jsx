import './Products.css';
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';

function Product(props) {
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return (
        <div className="products">
            <img
                className="img"
                src={props.data.image}
                alt={props.data.title}
            />

            <h5 className="title">{props.data.title}</h5>

            <div className="prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            </div>

            <QuantityPicker onChange={handleQuantityChange} />
        </div>
    );
}

export default Product;
