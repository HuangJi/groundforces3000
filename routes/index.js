var express = require('express');
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');
// var router = express.Router();


/* GET home page. */

exports.load = function(req, res){
	res.render('index');
};

exports.queryAndDeletePageLoad = function(req, res){
	res.render('queryAndDelete');
};

exports.modifyPageLoad = function(req, res){
	res.render('modify');
};

exports.queryCategoryPageLoad = function(req, res){
	res.render('queryCategory');
};

exports.getGoodsByID = function(req, res){
	console.log('yo!');
	console.log(req.body.goodID);
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("allGoods");
		var query = {};
		// var filter = [];
		// filter["goodsID"] = parseInt(req.body.goodsID);
		query.goodID = req.body.goodID;
		console.log(query.goodID);
		collection.findOne(query, function(err, item) {
			assert.equal(null, err);
			console.log(item);
			res.send(item);
			db.close();
		})
	});
	// var data = req.body.goodsID + 'dicks';
	// res.send(data);
};

exports.getGoodsByName = function(req, res){
	// res.render('index');
	console.log(req.body.goodsName);
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("allGoods");
		var query = {};
		query['name'] = req.body.goodsName;
		collection.findOne(query, function(err, item) {
			assert.equal(null, err);
			console.log(item);
			res.send(item);
			db.close();
		})
	});
};

exports.checkGoodID = function(req, res){
	// res.render('index');
	console.log(req.body.checkID);
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("allGoods");
		var query = {};
		query['goodID'] = req.body.checkID;
		collection.findOne(query, function(err, item) {
			assert.equal(null, err);
			console.log(item);
			if (item == undefined) {
				res.send(true);
			}
			else{
				res.send(false);
			}
			
			db.close();
		})
	});
};

exports.getGoodsListByCategory = function(req, res){
	console.log(req.body.categoryName);
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("allGoods");
		var query = {};
		query['categoryName'] = req.body.categoryName;
		collection.find(query).toArray(function(err, docs) {
			assert.equal(null, err);
			console.log(docs);
			res.send(docs);
			db.close();
		})
	});
	// res.render('index');
};

exports.addNewGoods = function(req, res){
	// res.render('index');
	console.log(req.body.operation);
	var data;
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		assert.equal(null, err);
		var collection = db.collection("allGoods");
		collection.insert(req.body, function(err, item) {
			assert.equal(null, err);
			console.log(item);
			data = item;
			db.close();
		})
	});
	res.send(data);
};

exports.deleteGoodsByName = function(req, res){
	// res.render('index');
	console.log(req.body.deletedName);
	// var data;
	var selector = {};
	selector['name'] = req.body.deletedName;
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		
		// Fetch a collection to insert document into
		db.collection("allGoods", function(err, collection) {		    

		// Remove the document by selector
			collection.remove(selector, {w:1}, function(err, numberOfRemovedDocs) {
				// assert.equal(null, err);
				// assert.equal(1, numberOfRemovedDocs);
				console.log('numberOfRemovedDocs is : ' + numberOfRemovedDocs);
				if (numberOfRemovedDocs != 0){
					res.send('deleted');
				}else{
					res.send('nothing');
				}
				db.close();
			});
		})
	
	});
	// res.send(data);
};

exports.deleteGoodsByID = function(req, res){
	// res.render('index');
	console.log(req.body.deletedID);
	// var data;
	var selector = {};
	selector['goodID'] = req.body.deletedID;
	// Connect using the connection string
  	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		
		// Fetch a collection to insert document into
		db.collection("allGoods", function(err, collection) {		    

		// Remove the document by selector
			collection.remove(selector, {w:1}, function(err, numberOfRemovedDocs) {
				// assert.equal(null, err);
				// assert.equal(1, numberOfRemovedDocs);
				console.log('numberOfRemovedDocs is : ' + numberOfRemovedDocs);
				if (numberOfRemovedDocs != 0){
					res.send('deleted');
				}else{
					res.send('nothing');
				}
				
				db.close();
			});
		})
	
	});
};

// exports.modifyGoodsByName = function(req, res){

// 	res.render('index');
// };

exports.modifyGoodsByID = function(req, res){
	console.log(req.body.modifyID);
	// var data;
	var selector = {};
	selector['goodID'] = req.body.modifyID;
	delete req.body['modifyID'];
	// var obj = {};
	MongoClient.connect("mongodb://124.250.208.21/aipustore", {native_parser:true}, function(err, db) {
		
		// Fetch a collection to insert document into
		var collection = db.collection("allGoods");    

		// Remove the document by selector
		collection.update(selector, req.body, function(err, result) {
			assert.equal(null, err);
			assert.equal(1, result);

			// Fetch the document that we modified and check if it got inserted correctly
			// collection.findOne({a:1}, function(err, item) {
			// 	assert.equal(null, err);
			// 	assert.equal(1, item.a);
			// 	assert.equal(2, item.b);
			// 	db.close();
			// });
			res.send('kerker modify!');
			db.close();
		});
		
	
	});

	// res.render('index');
};




