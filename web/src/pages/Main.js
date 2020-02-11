import React from 'react';

import TopBarMenu from './../menu/top';
import LateralBarMenu from './../menu/lateral';
import ListaDeProjetos from './../contexto/listaprojeto';

function Main() {
  return (
    <div className="Main">
      <TopBarMenu />
      <LateralBarMenu/>
      <ListaDeProjetos />
    </div>
  );
}

export default Main;
