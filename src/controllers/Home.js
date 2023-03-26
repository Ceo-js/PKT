
/* [ imports ]
=============================================== */
const express = require( "express" );
// ,
//     { fetchAllProducts, getProductById } = require( "../models/Products" );

/* [ properties ]
=============================================== */
exports.homeController = [
	getHomePage = ( req, res, next ) => {
		// res.render( "index" );
        
        // fetchAllProducts( ( products ) => {
            const viewsData = {
                admin: false,
                products,
                pageTitle: 'Pikituchos - Home Page'
            };
            res.render( "index", viewsData );
        // });
	},
    // getProductDetailsPage = ( req, res ) => {
    //     const productId = req.params.productId;
    //     getProductById( productId, ( product ) => {
    //         const viewsData = {
    //             product,
    //             pageTitle: product.title 
    //         };
    //         res.render( "productDetails", viewsData );
    //     } );
    // },
	guide = ( l, y, h ) => {
		y.render( "guide" );
	},
];







/* [ exports ]
=============================================== */
// module.exports = homeController;