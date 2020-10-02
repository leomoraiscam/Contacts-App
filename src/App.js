import React from 'react';
import Menu from './components/Menu';
import InputSearch from './components/InputSearch';
import GlobalStyle from './styles/global';


function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <InputSearch/>
    </>
  );
}

export default App;
