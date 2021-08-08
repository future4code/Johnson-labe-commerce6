import React from "react";
import styled from "styled-components";

const CarrinhoContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const ListaCarrinho = styled.div`
  display: grid;
  gap: 8px;
`;

const ItemCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export class Carrinho extends React.Component {
  render() {
    
    return (
      <CarrinhoContainer>
        <h3>Carrinho</h3>
        <ListaCarrinho>
              <ItemCarrinho>
                <p>1x - Produto 1</p>
                <button>Remover</button>
              </ItemCarrinho>
          <p>Valor total: R$1000,00</p>
        </ListaCarrinho>
      </CarrinhoContainer>
    );
  }
}