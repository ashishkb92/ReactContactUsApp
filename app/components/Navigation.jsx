var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React ContactUs App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link" activStyle ={{fontWeight : 'bold'}}>ContactUs</IndexLink>
          </li>
          <li>
            <Link to="/view" activeClassName="active-link">ViewPreviousContacts</Link>
          </li>
          <li>
            <Link to="/clear" activeClassName="active-link">ClearContacts</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Ashish Kumar
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
