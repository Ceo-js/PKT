

const products = [ {
    title: "fodsnfo",
    description: "hfhfshfsdhf",
    price: 15,
    cents: 50,
    image: "img/home/ofertas/oferta-01.png",
    
} ];

const addProduct = product => {
    products.push( product );
};

module.exports = {
    products,
    addProduct 
}