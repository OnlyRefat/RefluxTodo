'use strict'

var Reflux = require('reflux');
var action = require('./action');

var ToDoStore = Reflux.createStore({
    listenables : action ,
    onAddItem: function(data){
        alert(data);
    }
});


module.exports = ToDoStore;