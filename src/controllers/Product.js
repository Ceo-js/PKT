

// const { saveProduct,
//     fetchAllProducts, 
//     getProductById, 
//     updateProductIdById, 
//     deleteProductById } = require("../models/ProductsData");
const productsData = require("../models/ProductsData");

exports.productController = [
    getAddProductPage = ( req, res ) => {
        const viewsData = {
            edit: false,
            pageTitle: "Add Product"
        };
        res.render( "add-products", viewsData );
    },
    postAddProductPage = ( req, res ) => {
        console.log( req.body );

        const product = {
            id: Date.now(),
            title: req.body.title,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
        };
        saveProduct( product );
        res.redirect( "/admin" );
    },
    getAdminProductsPage = ( req, res ) => {
        fetchAllProducts( products => {
            const viewsData = {
                admin: true,
                pageTitle: "Admin Products",
                products
            };
            res.render( "admin-panel", viewsData );
        } );
    },
    getEditProductPage = ( req, res ) => {
        const productId = req.params.productId;
        getProductById( productId, product => {
            const viewsData = {
                edit: true,
                product,
                pageTitle: "Edit Product"
            };
            res.render( "add-products", viewsData );
        } );
    },
    postEditProductPage = ( req, res ) => {
        // console.log( req.body );
        const product = {
            id: req.body.productId,
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description
        };
        updateProductIdById( product, req.body.productId );
        res.redirect( "/admin" );
    },
    postDeleteProductPage = ( req, res ) => {
        // console.log( req.body );
        const productId = req.body.productId;
        deleteProductById( productId, () => res.redirect( "/admin" ) );
    },
];

