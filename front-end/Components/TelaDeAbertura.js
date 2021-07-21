import React from "react";
import styled from "styled-components"
import pulseirasVarios from "../img/pulseirasVarios.jpeg"
import Logo from "../img/Logo.jpg"
import GlobalStyle from "../GlobalStyle";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";



const TelaDeAbeturaStyle = styled.section`



  display:flex;
  justify-items:center;
  flex-direction: column;
  height:100vh;
  padding: 0px;
  /* overflow: hidden; */
  align-items: center;
  background-image: url(${pulseirasVarios});
  background-color: rgba(0,0,40,0.7);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat;

  img{
    margin-top: 50px;
    width: min(200px, 40%);
    border-radius: 50%;
    overflow: hidden;
    
  }

  h1{
    font-family: 'Dancing Script', cursive;
    color: #F1D992;
    text-align: center;
    font-size: clamp(2rem, 5vw, 2.5rem);
    width: max(90%, 200px );
    margin-bottom: 2%;
  }

  p {
    text-align: center;
    color: white;
    font-family: 'Sulphur Point', sans-serif;
    font-size: clamp(1rem, 3vw, 1.5rem);
    width: max(90%, 200px);
    margin-top: 0;
  }

  ul{
    list-style: none;
    margin-top: 5%;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li{
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2% 0;
  }
  a{
    text-decoration: none;
    color: white;
    font-size: clamp(17px, 2vw, 23px);
    font-family: 'Sulphur Point', sans-serif;
    margin-left: 10px;
  }

 
`

const TelaDeAbetura = (props) => {
  return (
       <>
        <IconContext.Provider  value={{
          color: "white",
          size: "1.5rem"}}>
         <TelaDeAbeturaStyle>
          <img src={Logo} alt="Logotipo"/>
          <h1>Estamos preparando um site Lindo para você!</h1>
          <p>Enquanto isso, visite nossas redes sociais</p>
          <ul>
            <li><FaFacebook/><a href="http://www.facebook.com.br/marionarteira" target="blank"> marionarteira</a></li>
            <li><FaInstagram/><a href="http://www.instagram.com.br/marion_arteira" target="blank"> marion_arteira</a></li>
            <li><FaWhatsapp/><a href="https://api.whatsapp.com/send?phone=5551982175567" target="blank">+55 51 98217.5567</a></li>
          </ul>
        </TelaDeAbeturaStyle>
        </IconContext.Provider>
       </>
       
    
  )
};

export default TelaDeAbetura