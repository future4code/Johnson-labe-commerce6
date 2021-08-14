import React from "react";
import styled from "styled-components";

const FiltrosContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`

const InputsContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class Filtros extends React.Component {
  render() {
    return <FiltrosContainer>
      <h3>Filtros</h3>
      <InputsContainer>
      <div>
        <label>
          Valor Mínimo:
          <input 
          
          value={this.props.valorMinimo}
          onChange={this.props.Minimo}
          placeholder={'Valor minimo'}
          type='number'
          
          />
        </label>
      </div>
      <div>
        <label>
          Valor Máximo:
          <input 
          
          value={this.props.valorMaximo}
          onChange={this.props.Maximo}
          placeholder={'Valor Maximo'}
          type='number'
          
          />
        </label>
      </div>
      <div>
        <label>
          Nome do produto:
          <input value={this.props.valorBuscar}
      onChange={this.props.Busca}
      placeholder={'Digite o nome do produto'} />
        </label>
      </div>
      </InputsContainer>
    </FiltrosContainer>
  }
}
