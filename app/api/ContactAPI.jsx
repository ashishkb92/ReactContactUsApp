var $ = require('jquery');

var setContacts = function(contact){
  localStorage.setItem('contact',JSON.stringify(contact));
};

var getContacts = function(){
  var stringContact = localStorage.getItem('contact');
  var contact = [];
  contact = JSON.parse(stringContact);
  return $.isArray(contact) ? contact : [];
};

module.exports = {setContacts , getContacts};
