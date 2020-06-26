module.exports = {
  attributes: {
    title: {
      type: 'string'
    },
    size: {
      type: 'number'
    },
    price: {
      type: 'number'
    },
    price2: {
      type: 'number'
    },
    image: {
      type: 'string'
    },
    product: {
      model: 'product',
    },
  }
};
