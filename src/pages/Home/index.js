import React, { useState, useCallback } from 'react';
import Menu from '../../components/Menu';
import InputSearch from '../../components/InputSearch';
import { Container, Section } from './styles';

function Home() {
  const [filtro, setFiltro] = useState('Nome');

  const handleChangeFiltro = useCallback((filter)=>{
    if(filter === filtro){
      setFiltro('Nome');
    }else{
      console.log(filter);
      setFiltro(filter);
    }
  },[filtro])

  return(
    <>
      <Menu />
      <Container>
        <Section>
          <InputSearch />

          <div>
            <button onClick={()=>handleChangeFiltro('Nome')}>Nome</button>
            <button onClick={()=>handleChangeFiltro('Pais')}>País</button>
            <button onClick={()=>handleChangeFiltro('Empresa')}>Empresa</button>
            <button onClick={()=>handleChangeFiltro('Departamento')}>Departamento</button>
            <button onClick={()=>handleChangeFiltro('Data')}>Data de admissão</button>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default Home;
