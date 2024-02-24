/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/kitchen.glb --transform -t --resolution 4096 --keepmaterials -m 
Files: ./public/models/kitchen.glb [71.65MB] > models/static/4096/kitchen-transformed.glb [2.81MB] (96%)
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
	nodes: {
		Cylinder090: THREE.Mesh;
		Cylinder090_1: THREE.Mesh;
		Cylinder090_2: THREE.Mesh;
		Cylinder090_3: THREE.Mesh;
		Cylinder090_4: THREE.Mesh;
		Cylinder090_5: THREE.Mesh;
		Plane: THREE.Mesh;
	};
	materials: {
		water: THREE.MeshStandardMaterial;
		['Pot_Plant_A.001']: THREE.MeshStandardMaterial;
		['Foliage_Kitchen_A.001']: THREE.MeshStandardMaterial;
		['white flat']: THREE.MeshStandardMaterial;
		['#1a1a1a gloss']: THREE.MeshStandardMaterial;
		['#CACACA. flat']: THREE.MeshStandardMaterial;
		cover: THREE.MeshStandardMaterial;
	};
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

export function Model(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/models/kitchen-transformed.glb') as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<group userData={{ name: 'combined' }}>
				<mesh castShadow geometry={nodes.Cylinder090.geometry} material={materials.water} />
				<mesh
					castShadow
					geometry={nodes.Cylinder090_1.geometry}
					material={materials['Pot_Plant_A.001']}
				/>
				<mesh
					castShadow
					geometry={nodes.Cylinder090_2.geometry}
					material={materials['Foliage_Kitchen_A.001']}
				/>
				<mesh
					castShadow
					geometry={nodes.Cylinder090_3.geometry}
					material={materials['white flat']}
				/>
				<mesh
					castShadow
					geometry={nodes.Cylinder090_4.geometry}
					material={materials['#1a1a1a gloss']}
				/>
				<mesh
					castShadow
					geometry={nodes.Cylinder090_5.geometry}
					material={materials['#CACACA. flat']}
				/>
			</group>
			<mesh
				geometry={nodes.Plane.geometry}
				material={materials.cover}
				userData={{ name: 'Plane' }}
			/>
		</group>
	);
}

useGLTF.preload('/models/kitchen-transformed.glb');