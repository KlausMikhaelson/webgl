import logo from './logo.svg';
import './App.css';
import { Demo } from './Components/Demo';
import {Modelss} from './Components/Player';
import { Canvas} from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import {Physics} from "@react-three/cannon"

function App() {
  return (
    <div className="App">
      <Canvas style={{height: "100vh"}}>
      <Sky sunPosition={[100, 100, 20]} />
      {/* to light every 3D objects */}
      <ambientLight intensity={0.5} />
      <Physics>
        <Modelss />
      </Physics>
      </Canvas>
    </div>
  );
}

export default App;
