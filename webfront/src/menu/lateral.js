import React from 'react';
import './lateral.css';
import SubMenuList from './subMenuLista';

function LateralBarMenu() {
    return (
        <div className="MenuLateral">
        <div className="MenuLogo">
          <img alt="ok"  src="https://pt.freelogodesign.org/Content/img/logo-samples/sailors.png" />
        </div>
        <div className="menuLateralItens">
            <header>Monitor Aividade</header>
          <ul>              
              <li className="menuLateralListaItem sublist"><div className="tittleItemMenuLateral">Gerenciar monitores</div><p className="pointMenuLateral">></p></li>
              <div className="subMenu">
                <SubMenuList/>
              </div>            
          </ul>
        </div>
      </div>
    );
}

export default LateralBarMenu;