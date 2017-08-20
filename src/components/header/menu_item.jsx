import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <li><a className="third-text-color" href={this.props.menuItem.href}>{this.props.menuItem.text}</a></li>
    );
  }
}

export default MenuItem;
