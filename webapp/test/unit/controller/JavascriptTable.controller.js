/*global QUnit*/

sap.ui.define([
	"javastable/controller/JavascriptTable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("JavascriptTable Controller");

	QUnit.test("I should test the JavascriptTable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
