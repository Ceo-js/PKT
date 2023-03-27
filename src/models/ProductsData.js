


const fs = require( "fs" ),
    path = require( "path" ),
    rootDir = require( "../utils/path" ),
    // { deleteProductFromCart } = require("./Cart");
    cartData = require("./CartData");

// const products = [ {
//     title: "Produto 1",
//     description: "descrição",
//     price: 15,
//     cents: 50,
//     oldPrice: 25,
//     oldCents: 90,
//     image: "img/home/ofertas/oferta-01.png",
//     image01: "img/home/ofertas/oferta-01.png",
//     image02: "img/home/ofertas/oferta-01.png",
//     image03: "img/home/ofertas/oferta-01.png",
// } ];

const getProductsFromFile = handler => {
    const productsPath = path.join( rootDir, "../data", "products.json" );
    fs.readFile( productsPath, ( error, productsData ) => {
        if( error ) {
            return handler( [] );
        }
        return handler( JSON.parse( productsData ) );
    } );
}

exports.productsData = [
    saveProduct = product => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( productsData => {
            productsData.push( product );
            fs.writeFile( productsPath, JSON.stringify( productsData ), ( error ) => {
                console.log( error );
            } );
        } );
    },
    fetchAllProducts = ( handler ) => {
        getProductsFromFile( handler );

        const productsPath = path.join( rootDir, "../data", "products.json" );
        fs.readFile( productsPath, ( error, productsData ) => {
            let products = [];
            products = JSON.parse( productsData );
            handler( products );
        } );
    },
    getProductById = ( productId, handler ) => {
        getProductsFromFile( products => {
            const product = products.find( p => p.id.toString() == productId );
            handler( product );
        } );
    },
    updateProductIdById = ( product, productId ) => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( products => {
            const existingProductIndex = products.findIndex( p => p.id.toString() == productId );

            const updatedProducts = [ ...products ];
            updatedProducts[ existingProductIndex ] = product;

            fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
        } );
    },
    deleteProductById = ( productId, handler ) => {
        const productsPath = path.join( rootDir, "../data", "products.json" );
        getProductsFromFile( products => {
            let updatedProducts = products.filter( product => product.id.toString() != productId.toString() );
            deleteProductFromCart( productId );
            fs.writeFile( productsPath, JSON.stringify( updatedProducts ), error => console.log( error ) );
            handler();
        } );
    },
];
// ============================================