/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'products',
  attributes: {
    id: {
      type: 'number',
      unique: true,
      required: true,
    },
    title: 'string',
    description: 'string',
    createdAt: false,
    updatedAt: false,
    category: {
      columnName: 'category_id',
      model: 'category',
      unique: true,
    },
  },
};

