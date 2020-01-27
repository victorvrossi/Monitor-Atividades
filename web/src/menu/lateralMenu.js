import React, { useState } from 'react';
import SubMenuList from './subMenuLista';


function LateralBarMenuItem({ title, listaMenuItem }) {
    const [visible, setVisible] = useState(true);
    function hideMe() {
        setVisible(!visible);
    }
    let style = { display: "none" };
    if (!visible) style.display = "block";

    return (
        <li onClick={hideMe} className="menuLateralListaItem sublist">
            <div className="grid-container">
                <div className="tittleItemMenuLateral sublist_title">{title}</div><p className="pointMenuLateral sublist_icon">></p>
            </div>
            <div style={style} className="subMenu sublist">
                <SubMenuList items={listaMenuItem} />
            </div>
        </li>
    );
}


export default LateralBarMenuItem;