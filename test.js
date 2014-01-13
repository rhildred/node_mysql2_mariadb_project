var TestRunner = require('assert-runner'),
assert = require('assert'),
mysql = require('mysql2-openshift'),
categories = require('./js/categories.js');

var tests = {
	"Test of nothing": function(){
		assert(true == true);
		
	},
	"Test of categories": function(done){
		var req = new TestRunner.TestRequest();
		var res = new TestRunner.TestResponse();
		categories.categories(req, res, null, function(err){
			assert(err == null);
			console.log(res.sBody);
			assert(res.sBody != "");
			done();
		});
	},
	"Test of category": function(done){
		var req = new TestRunner.TestRequest();
		req.params.category = 1;
		var res = new TestRunner.TestResponse();
		categories.category(req, res, null, function(err){
			assert(err == null);
			console.log(res.sBody);
			assert(res.sBody != "");
			done();
		});
	},
	"Test of products": function(done){
		var req = new TestRunner.TestRequest();
		req.params.category = 1;
		var res = new TestRunner.TestResponse();
		categories.products(req, res, null, function(err){
			assert(err == null);
			console.log(res.sBody);
			assert(res.sBody != "");
			done();
		});
	},
	"Test of product": function(done){
		var req = new TestRunner.TestRequest();
		req.params.product = 1;
		var res = new TestRunner.TestResponse();
		categories.product(req, res, null, function(err){
			assert(err == null);
			console.log(res.sBody);
			assert(res.sBody != "");
			done();
		});
	},
	"Test of images": function(done){
		var req = new TestRunner.TestRequest();
		req.params.product = 1;
		var res = new TestRunner.TestResponse();
		categories.images(req, res, null, function(err){
			assert(err == null);
			console.log(res.sBody);
			assert(res.sBody != "");
			done();
		});
	}
};

new TestRunner(tests).again(0);
