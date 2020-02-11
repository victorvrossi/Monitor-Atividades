import React , { useEffect, useState } from 'react';

import './listaprojeto.css';

function ListaDeProjetos() {

    const [counter, setCounter] = useState(0);


  useEffect(() => {
    document.title = counter;
  }, [counter]);
    return (
        <div className="Contexto">
            <h1>{counter}</h1>
            <button onClick={() => { setCounter(counter+1)}}>Adicionar</button>
        </div>);
}

export default ListaDeProjetos;