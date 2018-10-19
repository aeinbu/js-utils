const toggleValueInArray = require("../source/trad/toggleValueInArray");

const { describe, it, expect} = require("mocha");
const context = describe;
const { assert }  = require("chai");


describe("trad/toggleValueInArray", function(){
	context("empty array", function(){
		it("should have one element after toggle", function(){
			let arr = [];
			toggleValueInArray("shirt", arr);
	
			assert.sameMembers(arr, ["shirt"]);
		});	
	})
	context("array containing one element", function(){
		it("should have two elements after toggle something not in array", function(){
			let arr = ["pants"];
			toggleValueInArray("shirt", arr);
	
			assert.sameMembers(arr, ["pants", "shirt"]);
		});	
		it("should have no elements after toggle something in array", function(){
			let arr = ["pants"];
			toggleValueInArray("pants", arr);
	
			assert.sameMembers(arr, []);
		});	
	})
	context("starts with array containing many elements", function(){
		it("should add element when toggle something not in array", function(){
			let arr = ["pants", "socks"];
			toggleValueInArray("shirt", arr);
	
			assert.sameMembers(arr, ["pants", "socks", "shirt"]);
		});	
		it("should remove element when toggle something in array", function(){
			let arr = ["pants", "socks"];
			toggleValueInArray("pants", arr);
	
			assert.sameMembers(arr, ["socks"]);
		});	
	})
})
