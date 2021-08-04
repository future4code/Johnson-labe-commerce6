import React from 'react';
import styled from 'styled-components'

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



class ComponenteCarrinhos extends React.Component {
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
                            <Imagem src="https://images.vivara.com.br/Stores/Fotos/PE00000002-2b.jpg"></Imagem>
                            <p>Perfume Masculino</p>
                            <p>R$250,00</p>
                            <button>Adicionar Carrinho</button>
                        </Card>

                        <Card>
                            <Imagem src="https://azperfumes.vteximg.com.br/arquivos/ids/165087-1000-1000/1000x1000-vicky-tiel-sirene-eau-de-parfum.jpg?v=636613045466570000"></Imagem>
                            <p>Perfume Feminino</p>
                            <p>R$320,00</p>
                            <button> Adicionar Carrinho </button>
                        </Card>
                    </ContainerCard>
                </Main>
            </ContainerPai>
            )
    }
}

export default ComponenteCarrinhos;