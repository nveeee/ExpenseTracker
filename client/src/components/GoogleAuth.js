import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { GAPI_CLIENT_ID } from '../utils/config'

const GoogleAuth = () => {
	const { isSignedIn, signIn, signOut } = useContext(GlobalContext);
	const [auth, setAuth] = useState();

	// Reach out to Google API to retrieve login status on mount
	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: GAPI_CLIENT_ID,
				scope: 'email'
			}).then(() => {
				setAuth(window.gapi.auth2.getAuthInstance())
				onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
				window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
			})
		})
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
		} else {
			signOut();
		}
	};

	const onSignIn = () => {
		auth.signIn();
	};

	const onSignOut = () => {
		auth.signOut();
	};

	if (isSignedIn === null) {
		return (
			<button className="ui right floated loading blue button">
				Loading
			</button>
		);
	} else if (isSignedIn) {
		return (
			<button onClick={onSignOut} className="ui right floated red google button">
				<i className="google icon" />
				Sign Out
			</button>
		);
	} else {
		return (
			<button onClick={onSignIn} className="ui right floated blue google button">
				<i className="google icon" />
				Sign In With Google
			</button>
		);
	}
}

export default GoogleAuth
