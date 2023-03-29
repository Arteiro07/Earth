import {
	EarthSpecularTexture,
	EarthCloudstexture,
	EarthDayTexture,
	EarthNightTexture,
	EarthNormalTexture,
} from "../../assets/textures/textures";
import { useRef } from "react";

export function Earth(props) {
	return (
		<>
			<ambientLight intensity={1} />
			<mesh>
				<sphereGeometry args={[1, 32, 32]} />
				<meshPhongMaterial specularMap={EarthSpecularTexture} />
				<meshStandardMaterial
					map={EarthDayTexture}
					normalMap={EarthNormalTexture}
				/>
			</mesh>
		</>
	);
}
