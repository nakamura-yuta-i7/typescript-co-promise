declare function require(x: string): any;

import {Yuta} from "./yuta";
import Default from "./yuta";

var Promise = require("bluebird")
var co = require("co")
var $ = require("jquery")

new Default()

var yuta: Yuta = new Yuta();
console.log( yuta.name() );

function get(str) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(str)
		}, 1000)
	})
}

function ajax(url) {
	return new Promise(function(resolve, reject) {
		setTimeout(()=>{
			resolve("yuta nakamura.")
		}, 10)
	})
}



co(function*() {
	
	var a = get("nyaon a !!!!!")
	var b = get("nyaon b !!!!!")
	var c = get("nyaon c !!!!!")
	console.log( yield {a, b, c} );
	
	return "generators!!!!"
	
}).then(function(result) {
	console.log( {result} );
})
