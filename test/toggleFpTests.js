const toggleValueInArray = require("../source/fp/toggleValueInArray");

const { describe, it, expect} = require("mocha");
const context = describe;
const { assert }  = require("chai");


describe("fp/toggleValueInArray", function(){
	context("empty array", function(){
		it("should have one element after toggle", function(){
			let arr = [];
			let toggler = toggleValueInArray(arr);
			toggler("shirt");
	
			assert.sameMembers(arr, ["shirt"]);
		});	
	})
	context("array containing one element", function(){
		it("should have two elements after toggle something not in array", function(){
			let arr = ["pants"];
			let toggler = toggleValueInArray(arr);
			toggler("shirt");
	
			assert.sameMembers(arr, ["pants", "shirt"]);
		});	
		it("should have no elements after toggle something in array", function(){
			let arr = ["pants"];
			let toggler = toggleValueInArray(arr);
			toggler("pants");
	
			assert.sameMembers(arr, []);
		});	
	})
	context("starts with array containing many elements", function(){
		it("should add element when toggle something not in array", function(){
			let arr = ["pants", "socks"];
			let toggler = toggleValueInArray(arr);
			toggler("shirt");
	
			assert.sameMembers(arr, ["pants", "socks", "shirt"]);
		});	
		it("should remove element when toggle something in array", function(){
			let arr = ["pants", "socks"];
			let toggler = toggleValueInArray(arr);
			toggler("pants");
	
			assert.sameMembers(arr, ["socks"]);
		});	
	})
})
// Usage:
//    let arr = ["socks", "pants"];
//    let toggler = toggleValueInArray(arr);
//    toggler("socks");
//    toggler("shirt");
//
// arr is now ["pants", "shirt"]