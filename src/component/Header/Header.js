import React from 'react'
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<NavLink to="/thrive"
						className="header__logo">
				MySite
			</NavLink>
			<ul className="header__nav">
				<li className="header__nav-item">
					<NavLink to="/home" className="header__link" activeClassName="header__link_active">
						Home
					</NavLink>
				</li>
				<li className="header__nav-item">
					<NavLink to="/about" className="header__link" activeClassName="header__link_active">
						About
					</NavLink>
				</li>
				<li className="header__nav-item">
					<NavLink to="/services" className="header__link" activeClassName="header__link_active">
						Services
					</NavLink>
				</li>
				<li className="header__nav-item">
					<NavLink to="/blog" className="header__link" activeClassName="header__link_active">
						Blog
					</NavLink>
				</li>
			</ul>
			<NavLink to="/contact" className="header__contact">
				Contact us
			</NavLink>
		</div>
	)
}

export default Header