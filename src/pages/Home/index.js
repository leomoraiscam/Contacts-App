import React from 'react';
import Menu from '../../components/Menu';
import InputSearch from '../../components/InputSearch';
import { Container, Section } from './styles';

function Home() {
  return(
    <>
      <Menu />
      <Container>
        <Section>
          <InputSearch />

          <div>
            <label>Nome</label>
            <label>País</label>
            <label>Empresa</label>
            <label>Departamento</label>
            <label>Data de admissão</label>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default Home;
