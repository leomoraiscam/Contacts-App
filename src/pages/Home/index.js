import React, { useState, useCallback } from 'react';
import Menu from '../../components/Menu';
import InputSearch from '../../components/InputSearch';
import { Container, Section, Main } from './styles';

function Home() {
  const [filtro, setFiltro] = useState('Nome');
  const data = [0, 1];

  const handleChangeFiltro = useCallback((filter)=>{
    if(filter === filtro){
      setFiltro('Nome');
    }else{
      setFiltro(filter);
    }
  },[filtro]);

  const styleBotaoSelecionado = useCallback((filter) => {
    if(filter===filtro) {
      return {
        color: '#fff',
        backgroundColor: '#f2711c',
        margin: '2px',
        opacity: 1
      };
    }

    return { margin: '2px' };
  }, [filtro]);

  return (
    <>
      <Menu />
      <Container>
        <Section>
          <InputSearch />

          <div>
            <button
              style={styleBotaoSelecionado('Nome')}
              onClick={()=>handleChangeFiltro('Nome')}
            >
              Nome
            </button>
            <button
              style={styleBotaoSelecionado('Pais')}
              onClick={()=>handleChangeFiltro('Pais')}
            >
              País
            </button>
            <button
              style={styleBotaoSelecionado('Empresa')}
              onClick={()=>handleChangeFiltro('Empresa')}
            >
              Empresa
            </button>
            <button
              style={styleBotaoSelecionado('Departamento')}
              onClick={()=>handleChangeFiltro('Departamento')}
            >
              Departamento
            </button>
            <button
              style={styleBotaoSelecionado('Data')}
              onClick={()=>handleChangeFiltro('Data')}
            >
              Data de admissão
            </button>
          </div>
        </Section>

        <Main>
          <table>
            <thead>
              <tr>
                <th>Header content 1</th>
                <th>Header content 2</th>
                <th>Header content 3</th>
                <th>Header content 4</th>
                <th>Header content 5</th>
              </tr>
            </thead>

            <tbody>
              {data.map((data)=>(
               <>
                 <tr>
                  <td>Body content 1</td>
                  <td>Body content 2</td>
                  <td>Body content 3</td>
                  <td>Body content 4</td>
                  <td>Body content 5</td>
                </tr>
                <br />
               </>
              ))}
            </tbody>
          </table>
        </Main>
      </Container>
    </>
  );
}

export default Home;
