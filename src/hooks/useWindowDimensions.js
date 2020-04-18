import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
	return { width: window.innerWidth, height: window.innerHeight };
};

export default () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	// On mount, create resize listener that sets dimension state
	// each time window resizes
	// On unmount, remove listener
	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};

		window.addEventListener('resize', handleResize);

		// Cleanup function: Remove event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};
