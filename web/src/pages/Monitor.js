import React from 'react';

import TopBarMenu from '../menu/top';
import LateralBarMenu from '../menu/lateral';
import ListaDeProjetos from './../contexto/listaprojeto';

function Monitor() {
  return (
    <div className="Monitor">
      <LateralBarMenu />
      <TopBarMenu />  
      <ListaDeProjetos />
    </div>
  );
}

export default Monitor;
