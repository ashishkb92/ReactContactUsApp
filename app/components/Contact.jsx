var React = require('react');

var Contact = React.createClass({
  render : function(){
    debugger;
    var email=this.props.email ;
    var message =this.props.message;
    var phone = this.props.phone;
    return(<li><b>Email</b> : {email} &nbsp;&nbsp; <b>Phone</b> : {phone} &nbsp;&nbsp;  <b>Message</b> : {message}</li>

     )
       ;
  }
});

module.exports =Contact;
