const { toCategory } = require('../handlers/catHandler');
const { toSubCategory } = require('../handlers/subCatHandler');
const { getProdHandler } = require('../handlers/getAllProdH');
const { getAllUsers } = require('../handlers/getUserHandler');
const { getAllAuctionBids } = require('../handlers/getAuctionBidHandler');

const getRoutes = require('express').Router()

getRoutes.get('/cat', toCategory);
getRoutes.get('/subCat', toSubCategory);
getRoutes.get('/prod', getProdHandler);
getRoutes.get('/users', getAllUsers);
getRoutes.get('/bids', getAllAuctionBids);

module.exports = getRoutes