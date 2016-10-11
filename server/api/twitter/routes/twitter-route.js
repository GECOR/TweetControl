"use strict";

const twitterController = require('../controller/twitter-controller');

module.exports = class twitterRoutes {
  static init(router) {
    router
      .route('/api/twitter')
      .get(twitterController.getAll)
      .post(twitterController.createNew);

    router
      .route('/api/twitter/:id')
      .delete(twitterController.removeById);
  }
}
