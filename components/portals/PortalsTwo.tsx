// import * as THREE from 'three';
// import { useContext, useEffect, useRef, useState } from 'react';
// import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
// import {
// 	useCursor,
// 	MeshPortalMaterial,
// 	CameraControls,
// 	Gltf,
// 	Text,
// 	CameraShake,
// 	Image,
// 	MeshReflectorMaterial,
// } from '@react-three/drei';
// import { useRoute, useLocation } from 'wouter';
// import { easing, geometry } from 'maath';
// import { suspend } from 'suspend-react';
// import { useScroll } from '@react-three/drei';
// import UserContextProvider from '../../store/userContext';
// import { MathUtils } from 'three';
// import getUuid from 'uuid-by-string';
// const GOLDENRATIO = 1.61803398875;
// import dynamic from 'next/dynamic';

// export default function PortalsTwo({ images }) {
// 	// https://codesandbox.io/p/sandbox/image-gallery-lx2h8?
// 	const portalsRef = useRef<THREE.Group>();
// 	const scroll = useScroll();

// 	useFrame((state, delta) => {
// 		portalsRef.current.position.lerpVectors(
// 			new THREE.Vector3(0, 0, -50),
// 			new THREE.Vector3(0, 0, -4),
// 			scroll.offset
// 		);
// 	});
// 	return (
// 		<>
// 			<group position={[0, -0.5, 0]} ref={portalsRef}>
// 				<Frames images={images} />
// 				{/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
// 					<planeGeometry args={[50, 50]} />
// 					<MeshReflectorMaterial
// 						blur={[300, 100]}
// 						resolution={2048}
// 						mixBlur={1}
// 						mixStrength={80}
// 						roughness={1}
// 						depthScale={1.2}
// 						minDepthThreshold={0.4}
// 						maxDepthThreshold={1.4}
// 						color="#050505"
// 						metalness={0.5}
// 						mirror={0.5}
// 					/>
// 				</mesh> */}
// 			</group>
// 		</>
// 	);
// }
// function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
// 	const ref = useRef(null!);
// 	const clicked = useRef<THREE.Mesh>();
// 	const [, params] = useRoute('/item/:id') as any;
// 	const [, setLocation] = useLocation();
// 	useEffect(() => {
// 		clicked.current = ref.current.getObjectByName(params?.id);
// 		if (clicked.current) {
// 			clicked.current.parent.updateWorldMatrix(true, true);
// 			clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
// 			clicked.current.parent.getWorldQuaternion(q);
// 		} else {
// 			p.set(0, 0, 5.5);
// 			q.identity();
// 		}
// 	});
// 	useFrame((state, dt) => {
// 		easing.damp3(state.camera.position, p, 0.4, dt);
// 		easing.dampQ(state.camera.quaternion, q, 0.4, dt);
// 	});
// 	return (
// 		<group
// 			ref={ref}
// 			onClick={(e) => (
// 				e.stopPropagation(),
// 				setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name)
// 			)}
// 			onPointerMissed={() => setLocation('/')}
// 		>
// 			{images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
// 		</group>
// 	);
// }

// function Frame({ url, c = new THREE.Color(), ...props }) {
// 	const image = useRef(null!);
// 	const frame = useRef(null!);
// 	const [, params] = useRoute('/item/:id') as any;
// 	const [hovered, hover] = useState(false);
// 	const [rnd] = useState(() => Math.random());
// 	const name = getUuid(url);
// 	const isActive = params?.id === name;
// 	useCursor(hovered);
// 	useFrame((state, dt) => {
// 		image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
// 		easing.damp3(
// 			image.current.scale,
// 			[0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1],
// 			0.1,
// 			dt
// 		);
// 		easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt);
// 	});
// 	return (
// 		<group {...props}>
// 			<mesh
// 				name={name}
// 				onPointerOver={(e) => (e.stopPropagation(), hover(true))}
// 				onPointerOut={() => hover(false)}
// 				scale={[1, GOLDENRATIO, 0.05]}
// 				position={[0, GOLDENRATIO / 2, 0]}
// 			>
// 				<boxGeometry />
// 				<meshStandardMaterial
// 					color="#151515"
// 					metalness={0.5}
// 					roughness={0.5}
// 					envMapIntensity={2}
// 				/>
// 				<mesh
// 					ref={frame}
// 					raycast={() => null}
// 					scale={[0.9, 0.93, 0.9]}
// 					position={[0, 0, 0.2]}
// 				>
// 					<boxGeometry />
// 					<meshBasicMaterial toneMapped={false} fog={false} />
// 				</mesh>

// 				<Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
// 			</mesh>
// 			<Text
// 				maxWidth={0.1}
// 				anchorX="left"
// 				anchorY="top"
// 				position={[0.55, GOLDENRATIO, 0]}
// 				fontSize={0.025}
// 			>
// 				{name.split('-').join(' ')}
// 			</Text>
// 		</group>
// 	);
// }
