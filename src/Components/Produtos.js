
import React from "react";
import styled from "styled-components";


const ProdutosContainer = styled.div`
  border: 1px solid black;
  padding: 0 8px;
  /* background-color: #181a1b; */
 
`;

const ProdutosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`;

const CardProduto = styled.div`
  border: 1px solid black;
  border-radius:4px;
  
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 50%;



`;

const InfosProduto = styled.div`
  padding: 8px;
`;

export class Produtos extends React.Component {
 
   state = {
     ListaCompleta: this.props.listaDeProdutos,
     ordenacao: "crescente"
   }
   


  

  render() {


   

    const  listaProdutos = this.props.listaDeProdutos.map((Produto) => {
      return  (
      <CardProduto>
      <ImagemProduto src={Produto.imageUrl} alt = {Produto.name}/>
      <InfosProduto>
        <p>{Produto.name}</p>
        <p>R${Produto.value}</p>
        <button onClick={() => this.props.onClickAdicionarAoCarrinho(Produto)}>Adicionar ao carrinho</button>
      </InfosProduto>
    </CardProduto>
      )
     
    })

    return (
      <ProdutosContainer>
        <ProdutosHeader>
          <p>Quantidade de produtos: {this.props.listaDeProdutos.length}</p>
          <div>
            <label>
              Ordenação:
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
            </label>
          </div>
        </ProdutosHeader>
        <ProdutosGrid>
          {listaProdutos}
        </ProdutosGrid>
      </ProdutosContainer>
    );
  }
}
