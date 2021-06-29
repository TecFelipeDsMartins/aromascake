import React from 'react'
import styled from 'styled-components'

const Section = styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-left:100px;
padding-right:100px;





h2{
    text-align: center;
    padding-top :10px;
    padding-bottom :10px;
    border-bottom : 1px solid #5D2411;
    width: 85vw;
    font-family: 'Playball', cursive;
    font-weight: 100;
    color: #5D2411;
    background-color:#fff;
    position: sticky;
    top: 10%;
    z-index:1;
    
}



.grid-products{
    display: flex;
    align-items:center;
    justify-content: center;
    flex-wrap: wrap;



}

`

const ProductSection = (props) => {
    return(
        <Section id={props.id}>
            <h2>{props.name}</h2>
            <div className="grid-products">{props.children}</div>
        </Section>
    )
}

export default ProductSection