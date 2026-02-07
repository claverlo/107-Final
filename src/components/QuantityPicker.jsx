import { useState } from "react";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        let nextVal = quantity - 1;
        if (nextVal > 0) {
            setQuantity(nextVal);
            props.onChange(nextVal);
        }
    }

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    return (
        <div>
            <button onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;
