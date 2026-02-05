const catalog = [
    {
        title: "GamerPC",
        category: "Laptop",
        price: 2000,
        image: "placeholder",
        id: 1
    },
    {
        title: "Ergonomic Mouse",
        category: "Devices",
        price: 50,
        image: "placeholder",
        id: 2
    },
    {
        title: "Ergonomic Keyboard",
        category: "Devices",
        price: 60,
        image: "placeholder",
        id: 3
    },
    {
        title: "Normal Keyboard",
        category: "Devices",
        price: 40,
        image: "placeholder",
        id: 4 // must be unique
    }
];

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;
