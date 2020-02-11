import React from 'react';

function ListaDeProjetosItem({ dev }) {
    return (
        <li className="ativideItem">
            <header>Configurar SLA</header>
            <div className="titleProjeto_brown">{dev.titulo}</div>
        </li>
    );
}

export default ListaDeProjetosItem;