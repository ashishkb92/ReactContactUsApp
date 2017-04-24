var React = require('react');

var Contact = require('Contact');

var ContactAPI = require('ContactAPI');

var ViewContact = React.createClass({
  getInitialState : function(){
    return({
      contact : ContactAPI.getContacts()
    });
  },


  render:function(){
    var contact = this.state.contact;
    var style = {
      paddingTop : '100px',
      textAlign :'left-justified'
    };
    debugger;
    var renderList =() =>{
      return(contact.map((contact)=>{
      return(<Contact key = {contact.id}   {...contact} ></Contact>);
    })
  )};

  return(
    <div style = {style}>
      <ul>
        {renderList()}
      </ul>
    </div>

  );
  }
});

module.exports = ViewContact ;
