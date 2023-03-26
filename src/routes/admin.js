var express = require( "express" );
var router = express.Router();
const adminController = require( "../controllers/Admin" ),
    productsData = require( "../models/ProductsData" );
    // cartController = require('../controllers/Cart');


/* ==[ Homepage ]==========================
 */
router.get( "/admin-panel", getAdminPage );
// router.get( "/guide", guide );


/* ==[ Product ]===========================
 */
// router.get( "/product/details/:productId", getProductDetailsPage );


/* ==[ Cart ]==============================
 */
// router.post( "/cart", postCartPage );
// router.get( "/cart", getCartPage );
// router.post( "/cart/delete-item", deleteCartItem );








/* ==[ Exports ]============================
 */
module.exports = router;
