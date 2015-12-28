'use strict'

var Reflux = require('reflux');
var action = require('./action.js');

var ToDoStore = Reflux.createStore({
    listenables : action ,
    onAddItem: function(data){
        console.log(data);
    }
});


module.exports = ToDoStore;