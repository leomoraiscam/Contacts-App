import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { InputContainer } from './styles';

function Filtros() {
  return (
    <InputContainer>
      <input placeholder="Pesquisar"/>
      {/* <FiSearch /> */}
    </InputContainer>
  )
}

export default Filtros;
