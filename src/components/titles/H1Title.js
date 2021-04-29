import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Satisfy', cursive;
    user-select: none;
    letter-spacing: -4px;
    font-size: 70px;
    font-weight: normal;
    margin-bottom: 0px;
    text-align: center;
    color: white;
    transition: all 0.2s ease-in-out;
    @media (max-width: 700px) {
        font-size: 50px;
    }
`

const H1Title = ({text}) => {
    return(
        <Title>{text}</Title>
    )
}

export default H1Title;