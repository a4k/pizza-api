/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: 'string',
    description: 'string',
    category: {
      model: 'category',
    },
    size:{
      collection: 'size',
      via: 'product',
    },
  },
};

