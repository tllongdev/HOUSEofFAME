import React, { useState } from 'react'
import logo from '../HouseOfFameLogoWHT.svg'
import '../App.css'

export default function Navbar() {
	const [menuActive, setMenuState] = useState(false)
	return (
		<nav className='navbar'>
			<header>
				<img src={logo} className='Nav-logo' alt='logo' />
				<ul
					className={`${menuActive ? 'nav-active' : ''}`}
					onMouseLeave={() => setMenuState(false)}
					onClick={() => setMenuState(false)}
				>
					<li>
						<a href='#'>HOME</a>
					</li>
					<li>
						<a href='#'>ABOUT</a>
					</li>
					<li>
						<a href='#'>MEDIA</a>
					</li>
					<li>
						<a href='#'>CONTACT</a>
					</li>
				</ul>
				<div className='mcdondals' onClick={() => setMenuState(!menuActive)}>
					<div className='buntop'></div>
					<div className='burger'></div>
					<div className='bunbottom'></div>
				</div>
			</header>
		</nav>
	)
}
