var React = require('react');

var Message = React.createClass({
  render : function(){
    var style = {
      color :'red'
    };
    return(<div style = {style}>
      <b>All fields are mandatory</b>
    </div>);
  }
});

module.exports = Message;
