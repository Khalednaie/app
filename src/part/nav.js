import React from 'react';
import './nav.css';
// import logo1 from './img/1.jpg';

function Nav() {
	return (
		<div id="navbar-example2" className="navbar navbar-light bg-light px-3">
			<ul className="nav nav-pills">
				<li className="nav-item">
					<a className="nav-link" href="#home">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#about">
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#conuect">
						Conuect Me
					</a>
				</li>
			</ul>
		</div>
	);
}
export default Nav;
