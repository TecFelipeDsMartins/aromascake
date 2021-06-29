import styled, {css} from 'styled-components';
import {useState} from 'react'
import { GiHamburgerMenu} from "react-icons/gi";
import { Link } from "react-scroll";



const Navbar = styled.nav`
    grid-area: nav;
    position: fixed; 
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7ACB0;
    height: 10%;
    transition: ease 0.25s all; 
    
    ${props => props.hei && css`
    height: 40vh;
    background-color: rgba(1, 0, 66, 0.9);
    `}
    
    @media only screen and (max-width: 790px) {
    grid-area: nav;

    position: fixed; 
    width: 100%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F7ACB0;
    height: 10%;
    transition: ease 0.25s all; 
    ${props => props.hei && css`
       height:50vh;
       background-color: rgba(200, 100, 100, 0.8);
       
       
    `}
    }

    img{
        border-radius: 50%;
        width: min(95%, 60px);
        margin: 70px 20px 20px 20px;
        transition: ease 0.4s all;
       
        ${props => props.hei && css`
         display: none;
        `}
    }

 
    
    ul{
    
        display: flex;
        flex-direction: row;
        list-style: none;
        padding-left:40px;
        margin-right:30px;
        align-items: left;
        line-height: 2rem;
        ${props => props.hei && css`
         display: flex;
        `}
    
    .li{
        color: #fff;
        font-size:1.2rem;
        font-family: sans-serif;
        padding-left: 20px;
        cursor: pointer;
        }

    }

    @media only screen and (max-width: 790px)  {
        ul{
        flex-grow: 1;
        display: none;
        flex-direction: column;
        list-style: none;
        padding-left:40px;
        align-items: center;
        justify-content: center;
        line-height: 1.5rem;
        ${props => props.hei && css`
         display: flex;
        `}
    
        .li{
            color: #fff;
            font-size:1rem;
            padding: 7px;

            }
        }
    
  }

`
const Hamburger = styled(GiHamburgerMenu)`
   
   @media only screen and (max-width: 790px) {
   display: inline-block;
   font-size: 1.3rem;
   color: #fff;
   transition: ease 0.6s all;
   margin-right: 20px;
   
   ${props => props.hei && css`
      color: #fff;
      transform: rotate(90deg);
   `}
   }
   display: none;
   font-size: 1.3rem;
   color: #010042;
   transition: ease 0.6s all;
   margin-right: 30px;
   
   ${props => props.hei && css`
      color: #fff;
      transform: rotate(90deg);
   `}

`
const NavBarView = () => {
   
    let [hei, setHei] = useState(false);
        return (
                <Navbar hei={hei}   className="nav-container" >
                    
                    <img src="/img/logo.png"/>
                    <ul>
                        <Link className="li"
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        >Propósito</Link>
                        <Link className="li"
                        activeClass="active"
                        to="SectionMenu"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        >Produtos</Link>
                        <Link className="li"
                        activeClass="active"
                        to="contato"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        >Contato</Link> 
                    </ul>
                    <Hamburger  className="menu-hamburger" hei={hei} onClick={()=>setHei(!hei)}></Hamburger>
                </Navbar>
        )
}
            

export default NavBarView
