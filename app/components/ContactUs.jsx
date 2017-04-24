var React = require('react');
var uuid = require('node-uuid');

var ContactAPI = require('ContactAPI');
var Form = require('Form');
var Message = require('Message');

var ContactUs = React.createClass({

  getInitialState : function(){
    return({
      status :'initial'
    });
  },



  handleSubmit : function(emailtext, phone, message){

    if (emailtext.length === 0 || phone.length === 0 || message.length === 0){
      this.setState({
        status : 'error'
      });
    }else {
      this.setState({
        status : 'success'
      });
      var contact = ContactAPI.getContacts();
      if(contact.length === 0){
        contact = [
          {
            id    : uuid(),
            email : emailtext,
            phone : phone,
            message : message
          }
        ];
        ContactAPI.setContacts(contact);
      }else{
        contact = [
          ...contact,
          {
            id    : uuid(),
            email : emailtext,
            phone : phone,
            message : message
          }];
          ContactAPI.setContacts(contact);
      }
    }
  },


  render : function(){
    var {status} = this.state;
    var style = {
      paddingTop : '10px',
      textAlign : 'left',
      color :'green'
    };

    if (status === 'initial'){
      return(
        <div>
          <Form onSubmit = {this.handleSubmit}></Form>
        </div>
    );
    }else if (status === 'error') {
      return(
        <div>
          <Form onSubmit = {this.handleSubmit} ></Form>
          <Message></Message>
        </div>
    );
  }else if (status==='success'){
    return(
      <div>
        <Form success= "true" onSubmit = {this.handleSubmit}></Form>
        <div style = {style}><h3>Thanks for your information :)</h3> </div>
      </div>
  );

  }

  }
});

module.exports=ContactUs;
