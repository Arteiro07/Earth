import style from "./styles/homePage.module.scss";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { Canvas } from "@react-three/fiber";

function App() {
	return (
		<div className="App">
			<main className={style.main}>
				<div className={style.container}>
					<Canvas>
						<Suspense fallback={null}>
							<Earth />
						</Suspense>
					</Canvas>
				</div>
			</main>
		</div>
	);
}

export default App;
