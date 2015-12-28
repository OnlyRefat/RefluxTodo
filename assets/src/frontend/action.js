'use strict'

var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
		'addItem',
		'deleteItem'
	]);

module.exports = TodoActions;