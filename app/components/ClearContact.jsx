var React = require('react');

var ClearContact = React.createClass({

  render : function(){
    var style = {
      paddingTop : '200px',
      textAlign : 'center',
      color :'red'
    };
    localStorage.removeItem('contact');
    return <h3 style={style}> All contacts are cleared !</h3>;
  }
});

module.exports = ClearContact ;
