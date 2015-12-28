'use strict'

var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
		'addItem',
		'deleteItem'
	]);
TodoActions.addItem.preEmit = function(data) { alert(data) ;};

module.exports = TodoActions;