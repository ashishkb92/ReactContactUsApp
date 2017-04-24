var React = require("react");

var Form = React.createClass({
  getInitialProps(){
    return({
      success : 'false',
    });
  },

  componentDidUpdate : function(){
    if (this.props.success === 'true'){
      this.refs.emailtext.value = '';
      this.refs.phone.value = '';
      this.refs.message.value = '';
    }
  },

  handleSubmit : function(e){
    e.preventDefault();
    var {emailtext, phone, message} = this.refs;
    this.props.onSubmit(emailtext.value,phone.value,message.value);

  },




  render: function(){

    var style1 = {
      paddingTop : '40px',
      paddingBottom : '10px'
    };
    var style = {
      paddingTop : '10px',
      paddingBottom : '10px'
    };

    return(
      <div className="row">
        <div className = "column small-6 medium-6 large-6">
          <form onSubmit = {this.handleSubmit}>
            <div style= {style1}>
              Enter your email ID :
              <input type = "email" ref = "emailtext"></input>
            </div>
            <div style= {style}>
              Enter your 10 digit phone number :
              <input type = "number" ref = "phone" min = "1000000000" max = "9999999999" maxLength = "10" onChange = {this.handleChange}></input>
            </div>
            <div style= {style} >
              Your Message :
              <textarea ref = "message" rows = "5" cols = "80"></textarea>
            </div>
            <div>
              <input className = "button" type = "submit"></input>
            </div>
          </form>
        </div>

      </div>
    );

  }
});

module.exports = Form;
