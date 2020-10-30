import React, { useState, useEffect ,useCallback } from 'react';
import api from '../../services/api';
import Menu from '../../components/Menu';
import InputSearch from '../../components/InputSearch';
import { Container, Section, Main, Avatar } from './styles';

function Home() {
  const [filtro, setFiltro] = useState('name');
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);


  useEffect(()=>{
    loadContacts();
  },[]);

  const loadContacts = useCallback(async()=> {
    try {
      const response = await api.get('contacts');
      const { data } = response;

      setContacts(data);
      setFilteredContacts(data);
    } catch (error) {
      return error;
    }
  },[]);

  const handleChangeFiltro = useCallback((filtered)=>{

    if(filtered === filtro) {
      setFiltro('name');
    }else {
      setFiltro(filtered);
      contacts.sort((a,b)=>{
        if(a[filtered] < b[filtered]) return -1;
        if(a[filtered] > b[filtered]) return 1;
        return 0;
      });
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

  const filterContacts = useCallback((inputValue)=>{
    if (inputValue.target.value === "") {
      setFilteredContacts(contacts);
      return;
    }

    const contactsValue = contacts.filter((contact)=> (
      contact.name
        .toLowerCase()
        .indexOf(inputValue.target.value) >- 1
    ));

    console.log(contactsValue);

    setFilteredContacts(contactsValue);
  },[contacts]);

  return (
    <>
      <Menu />
      <Container>
        <Section>
          <InputSearch
            placeholder="Pesquisar"
            onChange={(e)=>filterContacts(e)}
          />

          <div>
            <button
              style={styleBotaoSelecionado('name')}
              onClick={()=>handleChangeFiltro('name')}
            >
              Nome
            </button>
            <button
              style={styleBotaoSelecionado('country')}
              onClick={()=>handleChangeFiltro('country')}
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
              {filteredContacts.map((contact)=> (
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
