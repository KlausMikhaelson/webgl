import React from "react"
import {Canvas} from "@react-three/fiber"

export const Demo = () => {

    return(
    <Canvas style={{height: "100vh"}}>
        <pointLight position={[10,10,10]} />
        <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    </Canvas>
    )

}