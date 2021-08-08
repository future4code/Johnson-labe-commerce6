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

   state = {
    carrinho : []
   }
 
   adicionarAoCarrinho = (cadaProduto) => {
    const novoCarrinho = [...this.state.carrinho]
    novoCarrinho.push(cadaProduto);

    this.setState({carrinho: novoCarrinho})
    console.log(novoCarrinho)

  }
  
  apagarProduto = () => {
    console.log("OK")
  }

  render(){

    return (
      <>
      <AppContainer>
        <Filtros/>
        <Produtos onClickAdicionarAoCarrinho = {this.adicionarAoCarrinho}/>
        <Carrinho produtosDoCarrinho = {this.state.carrinho}
        deletar = {this.apagarProduto}
        />
       </AppContainer>
      </>
      
    );

  }
 
}

export default App;
