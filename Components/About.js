import React from 'react';
import styled, {css}from 'styled-components';


const Section = styled.section`
   width: 100%;
   height: 100vh;
   background-image: url('/img/marionTrabalhando.png');
   background-size: cover;
   background-blend-mode: multiply;
   background-color: rgba(1,0,66, 0.9);
   display:flex;
    align-items: center;
    justify-content:center;
    padding-bottom: 20px;

    img{
        border-radius: 50%;
        width: min(350px, 40%, 40vw );
        align-self: center;
        justify-self: center;
        margin-left: min(0px, 5px, 15px);
    }

    h3{
    color: #FFFFBD;
    font-family: 'Dancing Script', cursive;
    font-size:2.5rem;
    margin-left: 0px
    }
    .para-about{
        padding-left: 15px;
        padding-right: 15px;
        margin: 0px;
    }
    .para-content{
    height: 70vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px;
}

    .p-first-letter::first-letter{
    font-family: 'Dancing Script', cursive;
    font-size:3rem;
    }


    p{
        color: #FFFFBD;
        font-family: 'Sulphur Point', sans-serif;
    }
   
   @media only screen and (max-width: 790px) {
     
   width: 100%;
   height:100%;
   background-image: url('/img/marionTrabalhando.png');
   background-size: cover;
   background-blend-mode: multiply;
   background-color: rgba(1,0,66, 0.9);
   display:flex;
   align-items: center;
   flex-direction: column;
   padding-bottom: 20px;

   img{
        border-radius: 50%;
        width: min(350px, 40%, 40vw );
        align-self: center;
        justify-self: center;
        margin-top: 25px;
    }


    h3{
    color: #FFFFBD;
    font-family: 'Dancing Script', cursive;
    font-size:2rem;
    padding: 0px;
    margin: 0px;
    }

    
    p{
        color: #FFFFBD;
        font-family: 'Sulphur Point', sans-serif;
        margin:0px;
        font-size: .7rem;
        text-align: center;
        padding: 0px;
    }
    .p-first-letter::first-letter{
    font-family: 'Dancing Script', cursive;
    font-size:3rem;
    }

    .para-content{
        height:100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0px;
        padding: 0px;
    }

    .para-about{
        height: 100%;
        padding-left: 25px;
        padding-right: 25px;
        
    }
}  
`;   
   
   
   







const About = (props) => {
    return (
        <Section className="flex-content" id={props.id}>
               <img src="/img/face.png" alt="rosto de marion"/>
               <div className="para-content">
                    <h3>Sobre mim</h3>
                    <div className="para-about">
                    <p className="p-first-letter">Meu nome é Marion. Faço trabalho desde muito jovem. 
                        Iniciei a fazer artesanato, quando aprendi a fazer tricô com uma prima. 
                        Minha mãe dava aula em Clube de Mães, onde eu me matriculei para aprender mais. Ela falava que em casa me ensinaria, alegando que teria mais tempo para me explicar. Na prática, consegui aprender olhando-a ensinar.
                        Quando tinha 12 anos, fiz um trabalho manual, onde recebia um pequeno valor para decorar 
                        caixinhas de sabonete e vidros de perfumes artesanais para uma amiga que participava do 
                        Brique da Redenção em Porto Alegre. Ainda jovem, fiz perfumes e sabonetes, já que morava 
                        num prédio onde vendiam produtos químicos. Não rendeu muito, mas valeu a experiência.
                    </p>
                    <p className="space">Sempre gostei de fazer coisas diferentes: customizar camisetas, pintar tênis, 
                        tudo para não ser igual as outras pessoas. Já fiz panetones, ovos de Páscoa, 
                        vendi sanduíches no trabalho, sempre inventando alguma coisa ligada às atividades 
                        manuais. Também, confeccionei blusões por encomenda.
                    </p>
                    <p className="space">Quando fazia bolsas em crochê, conheci a Loja Altero, pois procurava fechos, alças 
                        e demais acessórios para finalização das bolsas. Foi quando resolvi começar as 
                        montagens das bijuterias. Gostei tanto que acabei me identificando as técnicas e 
                        misturas de materiais, imaginando como cada peça ficará depois de pronta. Hoje, 
                        dedico meu tempo extra para minhas produções. Dedicação e amor, são palavras chaves da Marion Arteira.
                    </p>
                    </div>
               </div>
           
        </Section>
    )
}

export default About