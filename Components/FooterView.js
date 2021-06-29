import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = styled.footer`
background-color: #5D2411;
color: #DCC47D;
height: min(60px, 100px);
position: relative;
bottom: 0px;
padding: 20px;

ul{
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0px;
  }

  li{
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    font-size:clamp(17px, 2vw, 23px);
    padding: 0px;
    
  }
  a{
    text-decoration: none;
    color: #DCC47D;
    font-size: clamp(17px, 2vw, 23px);
    font-family: 'Sulphur Point', sans-serif;
    margin-left: 5px;
    font-size: 1.2rem;
    padding: 0px;
  }
`  


const FooterView = () => {
    return (
        <Footer id="contato">
        <ul>
            {/* <li><FaFacebook/><a href="http://www.facebook.com.br/marionarteira" target="blank"> marionarteira</a></li> */}
            <li><FaInstagram/><a href="http://www.instagram.com.br/aromascakee" target="blank">aromascakee</a></li>
            <li><FaWhatsapp/><a href="https://api.whatsapp.com/send?phone=5551982729582" target="blank">+55 51 98272.9582</a></li>
        </ul>
        </Footer>
    )
}

export default FooterView
