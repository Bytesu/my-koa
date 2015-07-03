/**
 * Created by byte_ on 2015/7/3.
 */
var express = require("express");
var router  = express.Router();
var app     = express();

/**
 * Catch a route like /user/2324
 * and send a JSON response
 */
router.get("/index", function (req, res) {
    res.send('test----------');
    res.end();
});

/**
 * Register the route with Express
 */
app.use(router);
app.listen(3005);

module .exports = app;