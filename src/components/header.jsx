//package
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {


	useEffect(() => {}, []);

	return (
		<header className="header">
			<div className="header__logo">
				<h1>
					<span className="span1">FOOD</span>
					<span className="span2">LAB</span>
				</h1>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/menu"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact-us"
							className={({ isActive }) =>
								isActive ? "activeStyle" : undefined
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;
