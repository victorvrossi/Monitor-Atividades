import React from 'react';
import './lateral.css';
import SubMenuListItem from './lateralMenuItem';

import LateralBarMenuItem from './lateralMenu';


function LateralBarMenu() {
  const listaItemGerenciarMonitor = [
    { linha: <SubMenuListItem key="0" link="/monitor/novo/" title="Novo monitor" /> },
    { linha: <SubMenuListItem key="1" link="#" title="Editar monitor" /> },
    { linha: <SubMenuListItem key="2" link="#" title="Remover monitor" /> },
  ];
  const listaItemGerenciarProjeto = [
    { linha: <SubMenuListItem key="0" link="/projeto/novo" title="Adicionar projeto" /> },
  ];

  return (
    <div className="MenuLateral">
      <div className="MenuLogo">
        <img alt="ok" src="https://pt.freelogodesign.org/Content/img/logo-samples/sailors.png" />
      </div>
      <div className="menuLateralItens">
        <header>Monitor Atividade</header>
        <ul>
          <LateralBarMenuItem title="Gerenciar monitores" listaMenuItem={listaItemGerenciarMonitor} />
          <LateralBarMenuItem title="Gerenciar projetos" listaMenuItem={listaItemGerenciarProjeto} />
        </ul>
      </div>
    </div>
  );
}

export default LateralBarMenu;