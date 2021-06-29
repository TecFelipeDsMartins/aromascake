import React from 'react';
import styled, {css}from 'styled-components';


const Section = styled.section`
   width: 100%;
   height: 100vh;
   background-image: url('/img/rosto.png');
   background-size: cover;
   background-blend-mode: multiply;
   background-color: rgba(79,47,22, 0.9);
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
        margin: 30px;
    }

    h3{
    color: #FFFFBD;
    font-family: 'Playball', cursive;
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
    font-family: 'Playball', cursive;
    font-size:3rem;
    }


    p{
        color: #FFFFBD;
        font-family: 'Sulphur Point', sans-serif;
    }
   
   @media only screen and (max-width: 790px) {
     
   width: 100%;
   height:100%;
   background-image: url('/img/fundoBolo.png');
   background-size: cover;
   background-blend-mode: multiply;
   background-color:  rgba(79,47,22, 0.9);
   display:flex;
   align-items: center;
   flex-direction: column;
   padding: 20px;

   img{
        border-radius: 50%;
        width: min(350px, 40%, 40vw );
        align-self: center;
        justify-self: center;
        margin-top: 25px;
    }


    h3{
    color: #FFFFBD;
    font-family: 'Playball', cursive;
    font-size:2rem;
    font-weight: 100;
    padding: 0px;
    margin: 0px;
    }

    
    p{
        color: #FFFFBD;
        font-family: 'Sulphur Point', sans-serif;
        margin:0px;
        font-size: 1rem;
        text-align: center;
        padding: 0px;
    }
    .p-first-letter::first-letter{
    font-family: 'Playball', cursive;
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
               <img src="/img/rosto.png" alt="rosto de marion"/>
               <div className="para-content">
                    <h3>Sobre o propósito</h3>
                    <div className="para-about">
                    <p className="p-first-letter">A<strong>romas cake</strong> é uma confeitaria artesanal e afetiva. Nosso <strong>principal </strong> 

                        propósito é <strong>glorificar a Deus </strong>por meio da arte da <strong>confeitaria </strong>. Não buscamos o nosso reconhecimento, mas sim 
                       o reconhecimento daquele que nos confiou este talento.
                    </p>
                    <p className="space">Por esta razão, tudo o que fazemos é <strong>feito com a maior excelência </strong>. Seja um bolo caseirinho, ou 
                    um bolo bem elaborado para um casamento, <strong>o amor de Deus </strong> está presente. 
                    </p>
                    <p className="space">Nosso desejo é que aqueles que desfrutam de nossos produtos sintam este grande amor. <cite>"Portanto, quando vocês comem, ou bebem,
                    ou fazem qualquer outra coisa, façam tudo para a glória de Deus." </cite>1Co 10:31
                    </p>
                    </div>
               </div>
           
        </Section>
    )
}

export default About