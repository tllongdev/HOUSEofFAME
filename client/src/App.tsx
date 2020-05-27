import React, { useState, useRef, useLayoutEffect } from 'react'
import Navbar from './components/Navbar'
import LaunchPage from './pages/LaunchPage'
import './App.css'
import flier from './HOFFASHIONflier.jpg'

// (function useDimensions() {
// 	const ref = useRef<HTMLBRElement>(null)
// 	const [dimensions, setDimensions] = useState({})
// 	useLayoutEffect(() => {
// 		(ref.current) && setDimensions(ref.current.getBoundingClientRect().toJSON())
// 	}, [ref.current])

// 	return [ref, dimensions]
// }())

function App() {
	return (
		<>
			{/* <div>
				<Navbar />
			</div> */}
			<div className='App'>
				<div>
					<img
						className='flier'
						src={flier}
						alt='SATURDAY. MAY 30TH. 1PM California'
					/>
				</div>
				<div>
					<LaunchPage />
				</div>
			</div>
		</>
	)
}

export default App
