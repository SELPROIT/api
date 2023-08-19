const { getAllProd } = require('../controllers/getAllProd')
const { responseObj } = require('./response')

const getProdHandler = async (req, res) => {
  try {
    const getAll = await getAllProd()
    if(!getAll) res.status(400).json({ message: error.message });
    return res.json(responseObj('Successful response', getAll))
  } catch (error) {
    return res.status(400).json(responseObj('Error with database response', {}))
  }

}

module.exports = {
  getProdHandler,
}