import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

const AsideImg = styled.aside`
 /* border-top: 20px solid #AC893C; */
 border-bottom: 30px solid #AC893C;
 border-left: 20px solid #AC893C;
 /* box-shadow: -10px 0px 20px  lightgray; */

grid-area: aside-img;

    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url('/img/background.png');
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;

`

const HeaderViewImg = () => {
    
    return (
       
       <AsideImg className="img-container"></AsideImg>
       
    )
}

export default HeaderViewImg