import React, {Component} from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import doguinho from './doguinho.jpg'
import gatinho from './gatinho.jpg'
import dog1 from './dog1.jpg'
import dog2 from './dog2.jpg'
import dog3 from './dog3.jpg'
import dog4 from './dog4.png'
import cat1 from './cat1.jpg'
import cat2 from './cat2.jpg'
import cat3 from './cat3.png'
import cat4 from './cat4.jpg'
import background from './background.png'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  height:100vh;
  width: 100vw;
  background-color: plum;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 3.5vw;
  color: darkmagenta;
  margin-top: 2vh;
`

const Span = styled.span`
  color: crimson;
`

const Images = styled.div`
  margin-top: 3vw;
  width: 60%;
  height: 27vh;
  display: flex;
  justify-content: space-evenly;
`

const ClearButton = styled.button`
  width: 12vw;
  height: 25vh;
  border: none;
  font-size: 2vw;
  background-image: url(${background});
  background-size: 12vw 25vh;
  color: cyan;
  text-shadow: 2px 2px darkcyan;
  transition: 0.8s;

  &:hover{
      background-size: 13vw 27vh;
      height: 27vh;
      width: 13vw;
      font-size: 2.5vw;
  }
`

const Image = styled.img`
    height:25vh;
    transition: 0.8s;

    &:hover{
        height: 27vh; 
    }
`

const Response = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 4vw;
  text-align: center;

  font-size: 3vw
`

const Nome = styled.li`
  font-size: 1.5vw;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 35vh;
  width: 22vw;
`

const Button = styled.button`
  width: 10vw;
  height: 1.8vw;
  font-size:1.2vw;
  border: none;
  background-color:crimson;

  &:hover{
      border: 2px solid darkmagenta;
      color: white;
  }
`

const Img = styled.img`
    height:25vh;
`

export default class PetLove extends Component{

    state={
        dogs: [
            {
                nome: "Soluço",
                idade: "3 meses",
                img: dog1
            },{
                nome: "Sirius",
                idade: "6 anos",
                img: dog2
            },{
                nome: "Rabito",
                idade: "4 anos",
                img: dog3
            },{
                nome: "Theodor",
                idade: "10 meses",
                img: dog4
            }
        ],
        cats: [
            {
                nome: "Oliver",
                idade: "2 meses",
                img: cat1
            },{
                nome: "Catarina",
                idade: "9 meses",
                img: cat2
            },{
                nome: "Minerva",
                idade: "7 anos",
                img: cat3
            },{
                nome: "Madame Nora",
                idade: "3 anos",
                img: cat4
            }
        ],
        msg: null
    }

    dog = () => {
        let {cats, dogs, msg} = this.state
        let {thanks} = this

        this.setState({
            msg: dogs.map((item) => (
                <List>
                    <Img src={item.img}/>
                    <Nome>{item.nome}</Nome>
                    <Button onClick={thanks}>Adotar</Button>
                </List>
            ))
        })
    }

    cat =  () => {
        let {cats, dogs, msg} = this.state
        let {thanks} = this

        this.setState({
            msg: cats.map((item) => (
                <List>
                    <Img src={item.img}/>
                    <Nome>{item.nome}</Nome>
                    <Button onClick={thanks}>Adotar</Button>
                </List>
            ))
        })
    }

    clear = () => {
        this.setState({
            msg: null
        })
    }

    thanks = () => {
        this.setState({
            msg: "Obrigada por nos ajudar adotando este animalzinho!!!"
        })
    }

    render(){
        let {msg} = this.state
        let {dog, cat, clear} = this
        return(
            <Container>
                <GlobalStyle/>
                <Title><Span>PetLove</Span> Adoption</Title>
                <Images>
                    <Image src={doguinho} onClick={dog}/>
                    <Image src={gatinho} onClick={cat}/>
                    <ClearButton onClick={clear}>CLEAR</ClearButton>
                </Images>
                <Response>{msg}</Response>
            </Container>
        )
    }
}