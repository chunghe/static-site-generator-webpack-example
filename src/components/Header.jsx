


import React from 'react';
import Router, {Link} from 'react-router';


class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'>Index</Link>
        <Link to='/about'>About</Link>
      </header>
    )
  }
}

export default Header;
