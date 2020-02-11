import React from 'react';

import TopBarMenu from '../../menu/top';
import LateralBarMenu from '../../menu/lateral';
import FormNovoProjeto from './formNovoProjeto';

import './formNovoProjeto.css';

function NovoProjeto() {
  return (
    <div className="NovoProjeto">
      <LateralBarMenu />
      <TopBarMenu />
      <FormNovoProjeto />
    </div>
  );
}

export default NovoProjeto;
