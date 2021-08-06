import React from 'react';
import ComponenteCarrinhos from './Components/ComponenteCarrinhos'
import ComponenteFiltros from './Components/ComponenteFiltros';
import ComponenteProdutos from './Components/ComponenteProdutos';
import Apple from './image/apple-fibo.jpg'


class App extends React.Component {  
  
 
    state = {

      Lista:
      [
       {
          id: 1,
          name: "Perfume Masculino",
          value: 200.0,
          imageUrl:"https://images.vivara.com.br/Stores/Fotos/PE00000002-2b.jpg"
       },
   
      //  {
      //     id: 2,
      //     name: "Perfume Feminino",
      //     value: 320.0,
      //     imageUrl: {Apple}
      //  },  
     ],

     Carrinho: [
    
     ]

    }

    onClickAdicionar = (id) => () =>{
     console.log(id)

     const novoCarrinho = [...this.state.Carrinho, this.state.Lista.filter((item) =>{
          return item.id === id
     })]

     this.setState ({
       carrinho: novoCarrinho
     })

    }

   

 
  render(){

    return (
      <div>
        <ComponenteFiltros/>
        <ComponenteProdutos
        produtoLista = {this.state.Lista}
        listaDeProdutos = {this.state.Lista.map((produto) => ({produto: produto, onClickAdicionar: this.onClickAdicionar(produto.id) }))}/>
      </div>
      
    );

  }
 
}

export default App;
