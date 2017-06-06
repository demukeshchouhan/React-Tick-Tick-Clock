import React, {Component} from "react";
import {Navbar, Nav, NavItem, MenuItem} from "react-bootstrap";
import {Link, IndexLink} from "react-router";

const Navigation = (props) =>{
	return(
		<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand href="/">TickTick Clock</Navbar.Brand>
			</Navbar.Header>

			<Navbar.Collapse>
				<ul className="nav navbar-nav">
				<li>
				<IndexLink to="/" activeClassName="active">Timer</IndexLink>
				</li>
				<li>
				<IndexLink to="/countdown" activeClassName="active">Countdown</IndexLink>
				</li>
				</ul>
			</Navbar.Collapse>
		</Navbar>
	);
}

module.exports = Navigation;
