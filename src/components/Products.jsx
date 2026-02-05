import './Products.css';
import QuantityPicker from './QuantityPicker'; //

function Product(props) {
    return (
        <div className="products">
            <img src="https://picsum.photos/220/180" alt="Products" />
            <h5>{props.data.title}</h5>

            <div className="prices">
                <label>{props.data.price}</label>

                <label>Total</label>
            </div>

            <QuantityPicker />
        </div>
    );
}

export default Product; //
