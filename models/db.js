var settings = require("../settings");
var db = require("mongodb").Db;
var connection = require("mongodb").connection;
var server = require("mongodb").server;

module.exports = new Db(settings.db, new server(settings.host, connection.default_port,{}),{safe:true});