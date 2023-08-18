const { Product, Sub_category } = require('../db')

const postProductC = async ({
  // id,
  name,
  brand,
  image,
  description,
  datasheet,
  rating,
  stock,
  price,
  ref_subCategory,
}) => {
  let product = {
    id: null,
    name,
    brand,
    image,
    description,
    datasheet,
    rating,
    stock,
    price,
  };
  const foundProd = await Product.findAll({where: {SubCategoryId: ref_subCategory}})
  const prodLen = foundProd.length

  if(prodLen === 0) {
    product.id = `${ref_subCategory}1`
    } else {
      const newID = prodLen + 1
      product.id = `${ref_subCategory}${newID}`
    }
  
  const foundRef = await Sub_category.findOne({ where: { id: ref_subCategory } });

  if (foundRef.id) {
    const newProd = await Product.create(product);
    await newProd.setSub_category(foundRef);
    
    return newProd;
  } else {
    console.error("Could not find Sub-Category");
    return null;
  }
};

module.exports = { postProductC }

