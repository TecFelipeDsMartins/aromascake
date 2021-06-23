import React from "react";
import styled, {css} from 'styled-components';
import {useState} from 'react'

const ProductCard = styled.div`
  align-self:center;
  justify-self:center;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: max(400px, auto);
  width: 250px;
  background-color: #FFFFBD;
  box-shadow: 1px 3px 7px #aaa;
  margin: 30px;


  img {
    position: relative;
    top: 0px;
    width: 250px;
    height: 300px;
    margin: 0px;
    
    }

  button {
    width: 80%;
    height: 30px;
    border-radius: 5px;
    background-color: #DCC47D;
    text-decoration: none;
    border: none;
    color: white;
    margin-bottom: 10px;
    
  }

  h3{
    position: relative;
    top: 0px;
    flex-grow:0;
    margin: 0px;
    padding: 5px;
    color: #010042;
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Sulphur Point', sans-serif;
    text-align: center
  }

  p{
    color: #010042;
    font-family: 'Sulphur Point', sans-serif;
    font-size: 1.1rem;
    margin:0px;
  }

  a {
    
    text-decoration: none;
    color: #fff;
  }
  
`;

const Product = (props) => {
  const [popup, setPopup] = useState(false)

  let productName = props.link;
  let linkWhats =
    "https://api.whatsapp.com/send?phone=5551982175567&text=Ol%C3%A1.%20Visitei%20seu%20site%20e%20queria%20encomendar%20";
  let linkWithNameProduct = linkWhats + productName + "%20";
  return (
        <ProductCard >
          <img src={props.img} alt={props.nome}/>
          <h3>{props.nome}</h3>
          <p>R${props.preco}</p>
          <button>
            <a href={linkWithNameProduct} target="_blank">Encomendar</a>
          </button>
        </ProductCard>
  );
};

export default Product