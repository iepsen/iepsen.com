import React, { Component } from 'react';
import Menu from './menu';
import Info from './info';

class Header extends Component {
  render() {
    return (
    	<header className="dark-primary-color">
    		<div className="content">
	    		<Info />
	        	<Menu />
        	</div>
        </header>
    )
  }
}

export default Header;
