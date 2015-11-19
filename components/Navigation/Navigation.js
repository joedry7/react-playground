/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */
/* Changes copyright (c) Jordan Sissel */

import './Navigation.scss';
import Link from '../Link';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import IconButton from 'material-ui/lib/icon-button';

import React, { Component } from 'react';

export default class extends Component {
  toggleNav() {
    this.refs.leftNav.toggle();
  }

  render() {
    let menuItems = [
      { 
        text: <span>test<b>hello</b></span>,
        onToggle: function() { alert("OK") },
      }
    ]
    return <div>
      <AppBar title="hello"
        onLeftIconButtonTouchTap={this.toggleNav.bind(this)} />
      <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
    </div>
  }
}
