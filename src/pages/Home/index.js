import React, { useState, useEffect ,useCallback } from 'react';
import api from '../../services/api';
import Menu from '../../components/Menu';
import InputSearch from '../../components/InputSearch';
import { Container, Section, Main, Avatar } from './styles';

function Home() {
  const [filtro, setFiltro] = useState('Nome');
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    loadContacts();
  },[]);

  const loadContacts = useCallback(async()=> {
    try {
      const response = await api.get('contacts');
      const { data } = response;

      setContacts(data);
    } catch (error) {
      return error;
    }
  },[]);

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
                <th>Nome</th>
                <th>Telefone</th>
                <th>País</th>
                <th>Admissão</th>
                <th>Empresa</th>
                <th>Departamento</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact)=> (
               <>
                 <tr>
                  <td>
                    <Avatar src={contact.avatar} alt="Avatar user"/>
                    <span>{contact.name}</span>
                  </td>
                  <td>{contact.phone}</td>
                  <td>{contact.country}</td>
                  <td>
                    {new Date(contact.admissionDate).toLocaleDateString('pt')}
                  </td>
                  <td>{contact.company}</td>
                  <td>{contact.department}</td>
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
