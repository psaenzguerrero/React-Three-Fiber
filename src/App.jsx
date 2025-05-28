// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import CubeScene from './CubeScene';


import CubeScene from './components/three/CubeScene';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <h1>Mi Proyecto React + 3D</h1>
      <CubeScene />
    </div>
  );
}

export default App;
