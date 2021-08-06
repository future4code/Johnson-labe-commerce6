
import React from 'react';
import styled from 'styled-components'
import App from '../App'

const Header = styled.header`
display: flex;
padding-top: 20px;
justify-content: space-between;
margin: 0 20px;
`

const ContainerCard = styled.div`
display: flex;
padding: 20px;


`

const Card = styled.div`
width: 300px;
height: 500px;
margin: 10px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border: 1px solid black;

button{
    cursor: pointer;
}

`

const Imagem = styled.img`
max-width: 100%;`

const Main = styled.main`
 box-sizing: border-box;

`

const ContainerPai = styled.div`
width: 100%;
`





class ComponenteProdutos extends React.Component {


    Cards = () => this.props.produtoLista.map((elemento, indice) =>{
        return (
            <div key={indice}>
            <image>{this.produtoLista.ImageUrl}</image>
            <p>{this.produtoLista.name}</p>
            <p>{this.produtoLista.value}</p>
            </div>
        )

    })


    render() {
        return(
            <ContainerPai>
                <Header>
                    <div>
                        Quantidade de Produtos: 2
                    </div>
                    <div> Ordenação: 
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </Header>
                <Main>
                    <ContainerCard>
                        <Card>
                            {this.Cards}
                            {<button onClick = {this.props.listaDeProdutos[0].onClickAdicionar}>Adicionar Carrinho</button>}
                        </Card>

                        {/* <Card {this.props.Lista[1]}>
                           <Imagem src={this.props.Lista.imageUrl}></Imagem>
                            <p>{this..props.Lista.name}</p>
                            <p>R${this.props.Lista.value},00</p>
                            <button> Adicionar Carrinho </button>
                        </Card> */}
                    </ContainerCard>
                </Main>
            </ContainerPai>
            )
    }
}

export default ComponenteProdutos;