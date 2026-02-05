import { useState } from 'react'; //

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function handleDecrease() {
        let nextVal = quantity - 1; //
        if (nextVal > 0) {
            setQuantity(nextVal);
        }
    }

    function handleIncrease() {
        let nextVal = quantity + 1; //
        setQuantity(nextVal); //
    }

  return (
    <div>
        <button className="btn-minus" onClick={handleDecrease} disabled={quantity === 1}>-</button>
        <label>{quantity}</label>
        <button className="btn-plus" onClick={handleIncrease}>+</button>
    </div>
)

}

export default QuantityPicker;
