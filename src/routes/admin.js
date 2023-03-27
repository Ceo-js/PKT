var express = require( "express" );
var router = express.Router();
// const { getAdminPage, getAddProductPage } = require("../controllers/Admin"),
const adminController = require( "../controllers/Admin" ),
    productsData = require( "../models/ProductsData" );
    // cartController = require('../controllers/Cart');


/* ==[ Admin ]==========================
 */
router.get( "/admin", getAdminPage );


/* ==[ add-product ]===========================
*/
router.get( "/add-products", getAddProductPage );
router.post( "/add-products", postAddProductPage );


/* ==[ edit-product ]==============================
 */
router.get( "/edit-product/:productId", getEditProductPage );
router.post( "/edit-product", postEditProductPage );
router.post( "/delete-product", postDeleteProductPage );







/* ==[ Exports ]============================
 */
module.exports = router;
