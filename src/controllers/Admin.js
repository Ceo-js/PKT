
/* [ imports ]
=============================================== */
const express = require( "express" ),
    productsData = require( "../models/ProductsData" );

/* [ properties ]
=============================================== */
exports.adminController = [
	getAdminPage = ( req, res, next ) => {
        const viewsData = {
            // admin: false,
            products: productsData.products,
            pageTitle: 'Pikituchos - Admin Page',
            title: "Admin Panel",
        };
        // console.log( viewsData.products );
        res.render( "admin-panel", viewsData );
	},
    getAddProductPage = ( req, res, next ) => {
        const viewsData = {
            edit: false,
            pageTitle: "Add Product",
            title: "Title Page",
        };
        res.render( "add-products", viewsData );
    },
    postAddProductPage = ( req, res, next ) => {
        console.log( req.body );
        const product = {
            id: Date.now(),
            pageTitle: "Add Product",
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            cents: req.body.cents,
            oldPrice: req.body.oldPrice,
            oldCents: req.body.oldCents,
            image: req.body.image,
            image01: req.body.image01,
            image02: req.body.image02,
            image03: req.body.image03,
        };
        saveProduct( product );
        // productsData.addProduct( product );
        res.redirect( "/add-products" );
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







/* [ exports ]
=============================================== */
// module.exports = homeController;