import { useFrame } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { useScroll } from '@react-three/drei';
import { MathUtils } from 'three';
import { easing, geometry } from 'maath';
import { useLocation } from 'wouter';
export default function ScrollNav() {
	const scroll = useScroll();
	const [lastScroll, setLastScroll] = useState(0);
	const [currentScroll, setCurrentScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState(Math.sign(currentScroll - lastScroll));
	useFrame((state, delta) => {
		setCurrentScroll(scroll.offset);
		if (currentScroll > lastScroll) setScrollDirection(1);
		if (currentScroll < lastScroll) setScrollDirection(-1);
		setLastScroll(currentScroll);
		if (scrollDirection === 1) {
			// console.log('scrolling down');
		}
		if (scrollDirection === -1) {
			// console.log('scrolling up');
			// scroll.offset = MathUtils.lerp(scroll.offset, 1, 0.1);
		}
		// scroll.offset = MathUtils.lerp(scroll.offset, 0.999, 0.1);
		// scroll.offset = MathUtils.lerp(scroll.offset, 0.001, 0.5);
		// scroll.offset = easing.damp(scroll.offset, 1, 0.1, delta);
		// scroll.offset = MathUtils.lerp(scroll.offset, 1, 0.1);
		// if (scrollDirection === -1) console.log('scrolling up');
	});

	return null;
}