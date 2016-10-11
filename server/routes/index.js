"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const TwitterRoutes = require('../api/twitter/routes/twitter-route');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     TwitterRoutes.init(router);

     app.use('/', router);
   }
}
