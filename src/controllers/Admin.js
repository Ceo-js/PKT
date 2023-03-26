
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
        console.log( viewsData.products );
        res.render( "admin-panel", viewsData );
	},
];







/* [ exports ]
=============================================== */
// module.exports = homeController;