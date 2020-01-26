import React from 'react';
import './App.css';

import TopBarMenu from './menu/top';
import LateralBarMenu from './menu/lateral';
import ListaDeProjetos from './contexto/listaprojeto';

function App() {
  return (
    <div className="App">
      <LateralBarMenu/>
      
      <TopBarMenu/>
      <ListaDeProjetos/>
      
    </div>
  );
}

export default App;
