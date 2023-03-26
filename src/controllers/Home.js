
/* [ imports ]
=============================================== */
const express = require( "express" );
// ,
//     { fetchAllProducts, getProductById } = require( "../models/Products" );

/* [ properties ]
=============================================== */
exports.homeController = [
	getHomePage = ( req, res, next ) => {
        const viewsData = {
            admin: false,
            // products,
            // pageTitle: 'Pikituchos - Home Page'
        };
        res.render( "index", viewsData );
        
        // fetchAllProducts( ( products ) => {
        //     const viewsData = {
        //         admin: false,
        //         products,
        //         pageTitle: 'Pikituchos - Home Page'
        //     };
        //     res.render( "index", viewsData );
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
        const viewsData = {
            pageTitle: "Guia Pikituchos - Homepage",
        };
		y.render( "guide", viewsData );
	},
];







/* [ exports ]
=============================================== */
// module.exports = homeController;