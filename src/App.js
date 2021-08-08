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
  };

  onChangeMinimo = (event) => {
    this.setState({
      valorInputMinimo: event.target.value.toLowerCase()
    })
  }
  
  onChangeMaximo = (event) => {
    this.setState({
      valorInputMaximo: event.target.value.toLowerCase()
    })
  };
  
  onChangeBuscar = (event) => {
    this.setState({
      valorInputBuscar: event.target.value.toLowerCase()
    })
  };

  

  render(){

    return (
      <>
      <AppContainer>
        <Filtros
       listaProdutos={this.state.trip}
       valorMinimo = {this.state.valorInputMinimo}
       Minimo={this.onChangeMinimo}

       valorMaximo = {this.state.valorInputMaximo}
       Maximo={this.onChangeMaximo}
       
       valorBusca = {this.state.valorInputBuscar}
       Busca={this.onChangeBuscar}
        
        />

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
