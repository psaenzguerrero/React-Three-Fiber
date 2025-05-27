// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import CubeScene from './CubeScene';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <div style={{ width: '100vw', height: '100vh' }}>
//         <CubeScene />
//       </div>
//     </>
//   )
// }

// export default App

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
