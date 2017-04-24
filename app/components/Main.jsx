var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
     <Navigation/>
      <div className = "row">
        <div className= "column small-10 medium-10 large-10">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
