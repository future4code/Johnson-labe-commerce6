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
    carrinho : [],

   
      produtos: [
        {
          id: 1,
          name: "Traje Espacial",
          value: 8000.00,
          imageUrl: "https://cdn.pixabay.com/photo/2011/12/14/12/11/astronaut-11080_960_720.jpg",
        
        },
        {
          id: 2,
          name: "Meteorito",
          value: 1500,
          imageUrl: "https://cdn.pixabay.com/photo/2018/01/28/11/00/asteroid-3113282_960_720.png",
        
     
        },
        {
          id: 3,
          name: "Foguete",
          value: 2000,
          imageUrl: "https://cdn.pixabay.com/photo/2017/08/28/16/22/space-shuttle-2690279_960_720.jpg",
          
         
        },
        {
          id: 4,
          name: "Viagem para Lua",
          value: 6000,
          imageUrl: "https://cdn.pixabay.com/photo/2018/04/05/16/07/moon-3293238_960_720.jpg",
          
        },
        {
          id: 5,
          name: "Viagem para buraco negro",
          value: 7000,
          imageUrl: "https://cdn.pixabay.com/photo/2021/02/04/16/57/planet-5981947_960_720.jpg",
          
        },

        {
          id: 6,
          name: "Contato com Ovnis",
          value: 5000,
          imageUrl: "https://cdn.pixabay.com/photo/2019/05/12/22/18/ufo-4199298_960_720.jpg",
        
        },
      ],


    };
  
 
   adicionarAoCarrinho = (cadaProduto) => {
   
    const novoCarrinho = [...this.state.carrinho]
    novoCarrinho.push(cadaProduto );
    

    this.setState({carrinho: novoCarrinho,          
    })
    console.log(novoCarrinho)

  }
  

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

        <Carrinho produtosDoCarrinho = {this.state.carrinho}
        deletar = {this.apagarProduto}
        />
       </AppContainer>
      </>
      
    );

  }
 
}

export default App;
