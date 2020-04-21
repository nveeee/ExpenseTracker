import React from 'react'
import ViewController from './ViewController'
import { GlobalProvider } from '../context/GlobalState'

const centerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '100vh'
};

const App = () => {
	return (
		<GlobalProvider>
			<div style={centerStyle}>
				<div className="ui raised very padded text container segment">
					<ViewController />
				</div>
			</div>
			
		</GlobalProvider>
	)
}

export default App
