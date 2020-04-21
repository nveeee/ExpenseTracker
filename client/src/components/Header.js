import React from 'react'
import GoogleAuth from './GoogleAuth'

const Header = () => {
	return (
		<h2 className="ui block header">
			Expense Tracker
			<GoogleAuth />
		</h2>
	)
}

export default Header
