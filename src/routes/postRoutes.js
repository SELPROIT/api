const { post_category_handler } = require("../handlers/post_category_handler");
const { post_subCategoty_handler } = require("../handlers/post_subCategory_handler");
const { createdProd } = require('../handlers/postProdH');
const { toPostUser } = require('../handlers/UserToPost');
const { postAuction } = require("../handlers/postAuctionBidHandler");


const postRoutes = require('express').Router()

postRoutes.post("/cat", post_category_handler);
postRoutes.post("/subcat", post_subCategoty_handler);
postRoutes.post('/prod', createdProd);
postRoutes.post('/user', toPostUser);
postRoutes.post('/bid', postAuction);

module.exports = postRoutes