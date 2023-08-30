const { Auction, Product, Category, Sub_category, User, Auction_bid } = require('../../db.js'); // Asegúrate de importar sequelize
const { handle_date } = require('./handle_date.js');

const get_auction = async () => {
  try {
    const auctions = await Auction.findAll({
      include: [
        {
          model: Product,
          include: [
            { model: Sub_category, include: Category }
          ]
        },
        {
          model: User,
          attributes: ['id', 'favorites', 'created_history']
        },
        {
          model: Auction_bid
        }
      ]
    });

    const formattedAuctions = await Promise.all(
      auctions.map(async auction => {
        const {
          id,
          base_price,
          close_date,
          Product: product,
          User: user,
          authorize,
          image,
          product_name,
          brand,
          description,
          datasheet,
          total,
          status,
          type,
          subCategory,
          category,
          Auction_bids // Access the associated Auction_bids here
        } = auction;

        const formattedAuctionBids = Auction_bids.map(bid => ({
          bid_id: bid.id,
          proposed_price: bid.proposed_price,
          total: bid.total,
          // Include other relevant properties from Auction_bid if needed
        }));

        return {
          id,
          base_price,
          close_date,
          product,
          user,
          authorize,
          image,
          product_name,
          brand,
          description,
          datasheet,
          status,
          total,
          type,
          subCategory,
          category: product.Sub_category.CategoryId,
          auction_bids: formattedAuctionBids // Include the formatted Auction_bids
        };
      })
    );

    return formattedAuctions;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  get_auction
};
