import React from 'react';
import {Filtros} from './Components/Filtros'
import {Produtos} from './Components/Produtos'
import {Carrinho} from './Components/Carrinho'
import styled from "styled-components";


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
 
  
`;


class App extends React.Component {  
  
 
 
  render(){

    return (
      <>
      <AppContainer>
        <Filtros/>
        <Produtos/>
        <Carrinho/>
       </AppContainer>
      </>
      
    );

  }
 
}

export default App;
