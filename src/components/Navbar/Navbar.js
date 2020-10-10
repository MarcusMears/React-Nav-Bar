import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button"
// Standard Imports

// *Note: Desktop and Mobile CSS are different. Easier to distinguish between the two.

// Creates Navbar Component
export default class Navbar extends React.Component {
  // Sets initial state of component to 'false'
  state = { clicked: false }

  //Arrow Function which flips component's state on click 
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Navigator Pro <i className="fas fa-ship"></i> </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}><a className={item.cName} href={item.link}>{item.title}</a></li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}
/* Idea is that classnames are determined by logic, which in turn determines their style - and what is drawn.
1.) nav tag is used as wrapper for contained elements, allows display flex for contents
2.) menu-item is the hamburger icon for mobile - Icon shows by default, and is flipped based on click (only applies in mobile screen width)
3.) Ternary operator, based on instance of state, is used to specify whether hamburger icon shows as X when clicked
4.) 'nav-menu active' is written in CSS as 'nav-menu.active' - tern. op. just as step 3
5.) MenuItems.map takes in data from MenuItems.js and creates a new arrray which updates the links in the nav bar. (Saves you from having to add in new li a tags when you can add to the MenuItems object instead.)
6.) li items in react need a key attribute to keep better track of what ought to be changed from Virtual to Actual DOM.
7.) Filled in attributes from MenuItems.js in curly braces
*/