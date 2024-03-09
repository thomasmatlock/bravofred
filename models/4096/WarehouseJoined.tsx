/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ./public/models/src/warehouseJoined.glb --output models/4096/WarehouseJoined.tsx -r public/models4096 --transform -t --resolution 4096 --keepmaterials -m --keepmeshes --keepnames -s 
Files: ./public/models/src/warehouseJoined.glb [51.34MB] > models/4096/warehouseJoined-transformed.glb [868.72KB] (98%)
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
	nodes: {
		roof: THREE.Mesh;
		structure: THREE.Mesh;
	};
	materials: {
		roof: THREE.MeshStandardMaterial;
		structure: THREE.MeshStandardMaterial;
	};
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

export function Model(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/../../models/4096/warehouseJoined-transformed.glb'
	) as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<mesh
				name="roof"
				castShadow
				receiveShadow
				geometry={nodes.roof.geometry}
				material={materials.roof}
				position={[0, 7.62, 0]}
				rotation={[0, 0, Math.PI]}
				userData={{ name: 'roof' }}
			/>
			<mesh
				name="structure"
				castShadow
				receiveShadow
				geometry={nodes.structure.geometry}
				material={materials.structure}
				position={[0, 1.429, 18.288]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				userData={{ name: 'structure' }}
			/>
		</group>
	);
}

useGLTF.preload('/../../models/4096/warehouseJoined-transformed.glb');
