import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { InputContainer } from './styles';

function Filtros({placeholder, ...rest}) {

  return (
    <InputContainer>
      <input placeholder={placeholder} {...rest}/>
      {/* <FiSearch /> */}
    </InputContainer>
  )
}

export default Filtros;
