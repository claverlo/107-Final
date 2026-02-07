import Product from "../components/Products"; // Assignment start
import "./Catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    // runs once when component loads
    useEffect(() => {
        console.log("component loaded!");
        loadCatalog();
    }, []);

    function loadCatalog() {
        let service = new DataService();
        let data = service.getProducts();

        setProducts(data);
        setProdsToDisplay(data);

        // keep this EXACTLY as you want it
        let cats = ["PC", "Keyboard", "Mouse"];

        setCategories(cats);
    }

    function clearFilter() {
        setProdsToDisplay(products);
    }

    function filter(category) {
        let list = products.filter(
            prod => prod.category === category
        );
        setProdsToDisplay(list);
    }

    return (
        <div className="catalog">
            <h1>Check our amazing products</h1>

            <div className="filters">
                <button
                    onClick={clearFilter}
                    className="btn btn-dark btn-filter"
                >
                    All Products
                </button>
            </div>

            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => filter(cat)}
                    className="btn btn-primary btn-filter"
                >
                    {cat}
                </button>
            ))}

            <div className="product-list">
                {prodsToDisplay.map((prod, index) => (
                    <Product
                        key={prod._id || prod.id || index}
                        data={prod}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
