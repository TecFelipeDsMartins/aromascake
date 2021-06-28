import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";

const Section = styled.section`
   
   display: grid;
   grid-template-rows: repeat(12,1fr); 
   grid-template-columns: 1fr;
   height: 100vh;
   max-width: 1000px;
   margin: 0 auto;
   align-content: center;
   justify-content: center;
   width: 100%;
   padding:15px;
   
   
   h2{
       font-size: 2rem;
       display:flex;
       align-items:center;
       justify-content: center;
       color: #5D2411;
       /* border: 2px solid #F1D992; */
       border-top-right-radius: 10px;
       border-top-left-radius: 10px;
       width: 100%;
       margin: 0px;
       margin-bottom: 30px;
       font-family: 'Playball', cursive;
       font-weight: 200;
       grid-row: 2 / 4;
       grid-column: 1;
   }
    
    .container-menu{ 
        grid-row: 4 / 13;
        display: grid;
        grid-template-columns: repeat(2, minmax(130px, 300px));
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 50px;
        justify-content: center;
       
        #cat-1{
            background-image: url('/img/_MG_5733.jpg');
            background-size: cover;
            background-position: center;

        }

        #cat-2{
            background-image: url('/img/_MG_5671.jpg');
            background-size: cover;
            background-position: center;
        }

        #cat-3{
            background-image: url('/img/_MG_5651.jpg');
            background-size: cover;
            background-position: center;
        }

        #cat-4{
            background-image: url('/img/_MG_5712.jpg');
            background-size: cover;
            background-position: center;
        }

        .link-cat{
            display: inline-block;
            width: 100%;
            text-decoration: none;
            text-align: center;
            color: #5D2411;
            font-family: 'Sulphur Point', sans-serif;
            font-size: 1.2rem;
            padding-left: 15px;
            padding-right: 15px;
            
        }
        @media only screen and (max-width: 790px) {
        grid-row: 4 / 13;
        display: grid;
        grid-template-columns: repeat(2, minmax(130px, auto));
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 5px;
        box-shadow: 0px 2px 5px 0px grey;
        padding: 10px;
        border-radius: 10px;
        }
    }
    
`;

const SectionMenu = (props) => {
    return (
        <Section id="SectionMenu">
            <h2>Produtos</h2>
            <div className="container-menu">
            
                    <Link 
                        id="cat-1"
                        activeClass="active"
                        to="brincos"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}><div className="link-cat">Bolos Caseirinhos</div>
                    </Link>
                    <Link 
                        id="cat-2"
                        activeClass="active"
                        to="colares"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        ><div className="link-cat">Bolos em camadas</div>
                    </Link>
                    <Link
                        id="cat-3"
                        activeClass="active"
                        to="pulseiras"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        <div className="link-cat">Doces</div>
                    </Link>
                    <Link 
                        id="cat-4"
                        activeClass="active"
                        to="correntes"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}
                        ><a className="link-cat">Salgados</a>
                    </Link>
                    
                    
                </div>
        </Section>
        
    )
}

export default SectionMenu
