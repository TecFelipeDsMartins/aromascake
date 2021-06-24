import styled from 'styled-components'

const AsideText = styled.aside`
     grid-area: aside-text;

    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    
    }
 
 h1{
    font-family: 'Dancing Script', cursive;
    color: #010042;
    text-align: center;
    font-size: clamp(3rem, 5.5vw, 4.5rem);
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    color: #5D2411;
    font-family: 'Sulphur Point', sans-serif;
    margin-top:0px;
    font-size: 1.2rem;
    
  }

`

const HeaderViewText = (props) => {
    return (
        <AsideText>
             <div className="text-container">
                <img src="img/logoAromas2.png"/>
                <p>O aromas dos melhores momentos</p>
             </div> 
        </AsideText>
    )
}

export default HeaderViewText
