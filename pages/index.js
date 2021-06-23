import Head from "next/head";
import styled from "styled-components"
import HeaderViewText from "../Components/HeaderViewText";
import HeaderViewImg from "../Components/HeaderViewImg";
import FooterView from "../Components/FooterView";
import NavBarView from "../Components/NavBarView";
import MainView from "../Components/MainView";
import Product from "../Components/Product";
import SectionMenu from "../Components/SectionMenu";
import ProductSection from "../Components/ProductSection";
import About from "../Components/About";
import Prismic from 'prismic-javascript'
import { Fragment } from "react";


const Content = styled.header`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 5px;
  height: 100vh;
  margin: 0 auto;

  grid-template-areas:
    "nav nav nav nav nav nav"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img"
    "aside-text aside-text    aside-img aside-img aside-img aside-img";

  @media only screen and (max-width: 790px) {
    
    grid-template-areas:
      "nav nav nav nav nav nav"
      "aside-text aside-text aside-text aside-text aside-text aside-text"
      "aside-text aside-text aside-text aside-text aside-text aside-text"
      "aside-text aside-text aside-text aside-text aside-text aside-text"
      "aside-img aside-img aside-img aside-img aside-img aside-img"
      "aside-img aside-img aside-img aside-img aside-img aside-img"
      "aside-img aside-img aside-img aside-img aside-img aside-img"
      "aside-img aside-img aside-img aside-img aside-img aside-img"
      "aside-img aside-img aside-img aside-img aside-img aside-img"
      "aside-img aside-img aside-img aside-img aside-img aside-img";
  }
`;




const Home = (props) => {
  const {brincos} = props
  const {colares} = props
  const {correntes} = props
  const {pulseiras} = props
  
  return (
      <Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#F1D992" />
          <meta name="description" content="Site para vendas de bijuterias"/>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Sulphur+Point&display=swap" rel="stylesheet"/>
          <title>-- Marion Arteira --</title>
        </Head>
        <Fragment>
          <Content>  
            <NavBarView className="nav"/>
            <HeaderViewText className="aside-text"/>
            <HeaderViewImg className="aside-img"/>
          </Content>
          <MainView>
            <SectionMenu/>
            <ProductSection name={"Brincos"} id="brincos">
            {brincos.map((brinco)=>(
            <Product 
              img={brinco.data.imagem.url}
              nome={brinco.data.name}
              preco={brinco.data.preco}
              link={brinco.data.name}/>)
            )}
            </ProductSection>
            <ProductSection name={"Colares"} id="colares">
            {colares.map((colar)=>(
            <Product 
              img={colar.data.imagem.url}
              nome={colar.data.name}
              preco={colar.data.preco}
              link={colar.data.name}/>)
            )}
            </ProductSection>
            <ProductSection name={"Pulseiras"} id="pulseiras">
            {pulseiras.map((pulseira)=>(
            <Product 
              img={pulseira.data.imagem.url}
              nome={pulseira.data.name}
              preco={pulseira.data.preco}
              link={pulseira.data.name}/>)
            )}
            </ProductSection>
            <ProductSection name={"Correntes"} id="correntes">
            {correntes.map((corrente)=>(
            <Product 
              img={corrente.data.imagem.url}
              nome={corrente.data.name}
              preco={corrente.data.preco}
              link={corrente.data.name}/>)
            )}
            </ProductSection>
          </MainView> 
          <About id="about" /> 
        <FooterView/>
        </Fragment>
      </Fragment>
       
    
  )
};

export async function getServerSideProps({ res }){
  const client = Prismic.client('')
  const brinco = await client.query(Prismic.Predicates.at('document.type', ''))
  const corrente = await client.query(Prismic.Predicates.at('document.type', ''))
  const colar = await client.query(Prismic.Predicates.at('document.type', ''))
  const pulseira = await client.query(Prismic.Predicates.at('document.type', ''))
  return {
    props:{
      bri: bri.results,
      corr: corr.results,
      col: col.results,
      pul: pul.results
    },
  }
}

export default Home