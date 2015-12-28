var React = require('react');
var Reflux = require('reflux');
var action = require('./action');
var store = require('./store');

var TodoForm = React.createClass({
  getInitialState: function(){
    return ({text: ''});
  },
  render: function(){
    return (
      <form onSubmit={this._handleFormSubmit}>
        <input onChange = {this._handleTodoOnChange} 
        value= {this.state.text} />
        <button>add</button>
      </form>
    )
  },
  _handleTodoOnChange: function(e){
    this.setState({text: e.target.value});
  },
  _handleFormSubmit: function(e){   
    action.addItem(this.state.text);
    this.setState({text: ''});
    e.preventDefault();
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: []};
  },
  render: function() {
    return (
      <div>
        <h3>Todo App</h3>
        <TodoForm />
      </div>
    );
  }
});

React.render(<TodoApp />,  document.getElementById('app'));