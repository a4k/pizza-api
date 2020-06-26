/**
 * FilmsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  find: function (req, res) {

    sails.models.product.find().populate('category').populate('size').exec((err, products) => {
      if (err) {
        switch (err.name) {
          case 'UsageError':
            return res.badRequest(err);
          default:
            return res.serverError(err);
        }
      }
      products.forEach(product => {
        product.size.forEach(productSize => {
          productSize.image = '/images/' + productSize.image;
        });
      });

      if (!products) {
        return res.notFound();
      }

      return res.ok(products);
    });

  },

};

