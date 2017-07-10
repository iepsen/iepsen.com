import React, { Component } from 'react';
import MenuItem from './menu_item';

class Menu extends Component {
	constructor(props) {
		super(props)
		this.menuItems = [
			{href: '#', text: 'About me'},
			{href: '#last-work', text: 'Last Work'},
			{href: 'https://goo.gl/ojdrAj', text: 'Resume'},
			{href: 'mailto:contact@iepsen.com', text: 'Contact'}
		];
	}

  render() {
  	let menuItems = this.menuItems.map((object, i) => <MenuItem key={i} menuItem={object} />);

  	return <ul className="menu">{menuItems}</ul>;
  }
}

export default Menu;
