import styles from './Nav.module.scss';
import { useProgress } from '@react-three/drei';
import { useRef, useEffect, useState, use, useContext } from 'react';
import UserContextProvider from '../store/userContext';
import { useRoute, useLocation } from 'wouter';
import InputContextProvider from '../store/inputContext';

export default function Nav() {
	const { theme, setTheme } = useContext(UserContextProvider);
	const { activeObject, portalsActive, aboutMeActive } = useContext(InputContextProvider);
	const { active, progress, errors, item, loaded, total } = useProgress();
	const startTime = useRef(new Date().getTime());
	const endTime = useRef(0);
	const loadTime = useRef(0);

	useEffect(() => {
		if (!active) {
			endTime.current = new Date().getTime();
			loadTime.current = (endTime.current - startTime.current) / 1000;
		}
	}, [active, progress, item, loaded, total, errors]);
	// handle routing for nav

	return (
		<nav className={styles.navLoaded}>
			{/* <nav className={styles.navLoading}> */}
			<p
				className={styles.nav_text_loaded}
				style={{
					color: theme === 'dark' ? 'white' : 'black',
				}}
			>
				FREDERIC CARTIER
			</p>
		</nav>
	);
}
