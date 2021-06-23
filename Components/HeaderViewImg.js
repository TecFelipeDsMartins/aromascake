import styled from "styled-components";


const AsideImg = styled.aside`

grid-area: aside-img;

    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url('/img/pulseirasVarios.jpeg');
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 50%;

`

const HeaderViewImg = () => {
    return (
       <AsideImg className="img-container"></AsideImg>
    
    )
}

export default HeaderViewImg