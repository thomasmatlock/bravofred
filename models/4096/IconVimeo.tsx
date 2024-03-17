/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/src/iconVimeo.glb --output models/4096/IconVimeo.tsx -r public/models4096 --transform -t --resolution 4096 --keepmaterials -m --keepmeshes --keepnames -s 
Files: ./public/models/src/iconVimeo.glb [13.45MB] > C:\Users\Tommy\Documents\GitHub\frederic-cartier\models\4096\models/4096/iconVimeo-transformed.glb [181.84KB] (99%)
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
	nodes: {
		vimeo_1: THREE.Mesh;
		vimeo_2: THREE.Mesh;
	};
	materials: {
		vimeoWhite: THREE.MeshStandardMaterial;
	};
	// animations: GLTFAction[]
};

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;

export function Model(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/../../models/4096/iconVimeo-transformed.glb'
	) as GLTFResult;
	return (
		<group {...props} dispose={null}>
			<group name="vimeo" userData={{ name: 'vimeo' }}>
				<mesh
					name="vimeo_1"
					castShadow
					receiveShadow
					geometry={nodes.vimeo_1.geometry}
					material={materials.vimeoWhite}
				/>
				<mesh
					name="vimeo_2"
					castShadow
					receiveShadow
					geometry={nodes.vimeo_2.geometry}
					material={materials.vimeoWhite}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/../../models/4096/iconVimeo-transformed.glb');
