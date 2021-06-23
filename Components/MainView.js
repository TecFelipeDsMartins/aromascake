import React from 'react';
import styled from 'styled-components';


const Main = styled.main`
   .btn-artesanato{
    font-family: Dancing Script;
    font-size: 1.3rem;   
    border: 2px solid #D2BD7F;
    border-radius: 5px;
    height:60px;
    width: max(300px);
    display: block;
    margin: auto auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #F1D992;
    color: #373678;
    padding:5px;
   }
`

const MainView = (props) => {
    return (
        <Main>
            {props.children}
            <button className="btn-artesanato">Confira também as peças de artesanato</button>
        </Main>
    )
}

export default MainView

