import {
	EarthSpecularTexture,
	EarthCloudstexture,
	EarthDayTexture,
	EarthNightTexture,
	EarthNormalTexture,
} from "../../assets/textures/textures";
import { useRef } from "react";
import { OrbitControls, Stars } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";

export function Earth(props) {
	const earthRef = useRef();
	const cloudsRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		earthRef.current.rotation.z = -elapsedTime / 100;
		cloudsRef.current.rotation.y = elapsedTime / 60;
		cloudsRef.current.rotation.x = elapsedTime / 120;
	});
	return (
		<>
			<pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
			<Stars
				radius={300}
				depth={60}
				count={20000}
				factor={7}
				saturation={0}
				fade={true}
			/>
			<mesh ref={cloudsRef}>
				<sphereGeometry args={[1.01, 32, 32]} />
				<meshPhongMaterial
					map={EarthCloudstexture}
					opacity={0.4}
					depthWrite={true}
					transparent={true}
					side={DoubleSide}
				/>
			</mesh>
			<mesh ref={earthRef}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={EarthSpecularTexture} />
				<meshStandardMaterial
					map={EarthDayTexture}
					normalMap={EarthNormalTexture}
					metalness={0.4}
					roughness={0.7}
				/>
				<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/>
			</mesh>
		</>
	);
}
