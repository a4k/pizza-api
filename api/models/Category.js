/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'categories',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    title: 'string',
    code: 'string',
    sort: 'number',
    createdAt: false,
    updatedAt: false,
    products: {
      collection:'product',
      via: 'category'
    }
  },
};

