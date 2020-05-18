import React from 'react'
import ReactDom from 'react-dom'
import { useSpring, animated } from 'react-spring'
import Navbar from './components/Navbar'
import logo from './HouseOfFameLogoWHT.svg'
import './App.css'

// import Parallax from 'parallax-js'

function App() {
	// const scene = document.getElementById('scene')
	// const parallaxInstance = new Parallax(scene, {
	// 	relativeInput: true,
	// })
	// parallaxInstance.friction(0.2, 0.2)
	return (
		<>
			<Navbar />
			<div className='App' id='scene'>
				<header
					data-relative-input='true'
					data-depth='0.2'
					className='App-header'
					id='container'
				>
					<img src={logo} className='App-logo slide' alt='logo' />
				</header>
			</div>
		</>
	)
}

export default App
