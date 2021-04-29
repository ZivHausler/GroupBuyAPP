import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Ubuntu Condensed', sans-serif;
    letter-spacing: 0px;
    font-size: 30px;
    width: 100px;
    flex: 0.5;
    margin: 15px 10px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    user-select: none;
    @media (max-width: 650px) {
        font-size: 18px;
    }
    @media (min-width: 1100px) {
            flex: 1;
        }
`;

const Logo = () => {
    return(
        <Title>GroupBuy</Title>
    )
}

export default Logo;