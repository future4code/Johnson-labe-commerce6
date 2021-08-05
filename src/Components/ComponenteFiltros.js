import React from 'react';
import styled from 'styled-components';

const ComponenteFiltros = styled.div`
input {
  box-sizing: border-box;
  padding: 5px 10px;
  margin: 5px 0;
  border-radius: 15px;
  border: 1px solid transparent;
  height: 30px;
  background-color: grey;
  &:focus {
    outline: 0;
  }
}
`;

export default class Filtros extends React.Component {
  render() {
    return (
      <ComponenteFiltros>
        <h3>Filtros</h3>

        <form action="">
          <div>
            <label>Valor Mínimo</label>
            <input
            type="number"
            placeholder="Digite o minimo"
            
            />
          </div>

          <div>
            <label>Valor Máximo</label>
            <input
            
            type="number"
              placeholder="Digite o maximo"
            
            />
          </div>

          <div>
            <label>Busca</label>
            <input
            type="text"
            placeholder="Nome do produto"
            
            />
          </div>
        </form>
      </ComponenteFiltros>
    );
  }
}