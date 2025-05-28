// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import CubeScene from './CubeScene';

import PyramidScene from './components/three/PyramidScene';
import CubeScene from './components/three/CubeScene';

function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
          <h1>Mi Proyecto React + 3D</h1>
          <PyramidScene />
      </div>
      <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
          <CubeScene />
      </div>
    </section>
  );
}

export default App;
