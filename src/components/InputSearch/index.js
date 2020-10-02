import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styled';

function Filtros() {
  return (
    <Container>
      <div>
        <input placeholder="Pesquisar"/>
        <FiSearch />
      </div>
    </Container>
  )
}

export default Filtros;
