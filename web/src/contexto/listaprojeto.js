import React, { useEffect, useState } from 'react';

import './listaprojeto.css';
import api from '../services/api';

import ListaProjetoItem from './itemLista';

function ListaDeProjetos() {
  const [devs, setDevs] = useState( []);
  useEffect(() => {
    setDevs([{id:'0',titulo:'Falha Não carregou dados'}]);
    const loadDevs = async () => {
      setDevs([{id:'0',titulo:'Falha Passei e carregou dados'}]);
      try {
        const response = await api.get('/projeto/listar');  
        setDevs(response.data);
      } catch (error) {
        setDevs([{id:'0',titulo:''+error}]);
      }
    }

    
    
    loadDevs();
  }, []);

  return (
    <div className="Contexto">      
      <ul className="unselectable">      
        {devs.map(dev => (
          <ListaProjetoItem key={dev.id} dev={dev} />
        ))}
      </ul>
    </div>);
}

export default ListaDeProjetos;