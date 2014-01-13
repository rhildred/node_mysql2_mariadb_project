var renderAsync = require('render-async'),
categories = require('./js/categories.js');

//now we need a server for this so that we can test include
var app= renderAsync.express();
app.set('views', __dirname + '/public');

// add routes for categories

app.get("/categories", function(req, res){categories.categories(req, res);});
app.get("/categories/:category", function(req, res){categories.category(req, res);});
app.get("/categories/:category/products", function(req, res){categories.products(req, res);});
app.get("/categories/:category/products/:product", function(req, res){categories.product(req, res);});
app.get("/categories/:category/products/:product/images", function(req, res){categories.images(req, res);});

//server everything index.html welcome file
app.use(renderAsync.webServer);


//set ipaddress from openshift, to command line or to localhost:8080
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || parseInt(process.argv.pop()) || 8080;

//start the server listening for requests
app.listen(port, ipaddr);
