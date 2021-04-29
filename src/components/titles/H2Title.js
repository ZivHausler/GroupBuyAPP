import styled from 'styled-components';

const Title = styled.h2`
    font-family: 'Satisfy', cursive;
    letter-spacing: -2px;
    user-select: none;
    font-size: 45px;
    font-weight: normal;
    margin-bottom: 0px;
    text-align: center;
    color: white;
    transition: all 0.2s ease-in-out;
    @media (max-width: 700px) {
        font-size: 35px;
    }
`

const H2Title = ({text}) => {
    return(
        <Title>{text}</Title>
    )
}

export default H2Title;