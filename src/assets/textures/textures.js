import { TextureLoader } from "three";
import EarthDayMap from "./8k_earth_daymap.jpg";
import EarthNormalMap from "./8k_earth_normal_map.jpg";
import EarthSpecularMap from "./8k_earth_specular_map.jpg";
import EarthCloudsMap from "./8k_earth_clouds.jpg";
import EarthNightMap from "./8k_earth_nightmap.jpg";

const EarthDayTexture = new TextureLoader().load(EarthDayMap);
const EarthNormalTexture = new TextureLoader().load(EarthNormalMap);
const EarthSpecularTexture = new TextureLoader().load(EarthSpecularMap);
const EarthCloudstexture = new TextureLoader().load(EarthCloudsMap);
const EarthNightTexture = new TextureLoader().load(EarthNightMap);

export {
	EarthDayTexture,
	EarthNormalTexture,
	EarthSpecularTexture,
	EarthCloudstexture,
	EarthNightTexture,
};
