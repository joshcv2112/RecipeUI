import React from 'react';
import logo from './logo.svg';
import './App.css';

import PermanentDrawerLeft from './Components/PermanentDrawerLeft';
import MiniDrawer from './Components/MiniDrawer';

function App() {
  return (
    <div className='App'>
      {/* <MiniDrawer></MiniDrawer> */}
      <PermanentDrawerLeft></PermanentDrawerLeft>
    </div>
  );
}

export default App;
