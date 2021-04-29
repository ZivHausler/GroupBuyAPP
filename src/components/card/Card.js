import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
    0% {opacity: 0}
    5% {opacity: 0}
   15% {opacity: 1}
   85% {opacity: 1}
   95% {opacity: 0}
  100% {opacity: 0}
`;

const CardDiv = styled.div`
    user-select: none;
    animation: ${fadeInOut} 7s alternate infinite;
    transition: all 0.2s ease-in-out;
    max-width: 700px;
    position: relative;
    display: flex;
    background-color: rgba(70,70,70,0.4);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 265px;
    width: 75%;
    margin: 10px auto;
    padding: 5px 10px;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    cursor: pointer;
    overflow: hidden;
    &:hover {
        background: rgba(50,50,50,0.5);
    }
    @media (max-width: 950px) {
        flex-direction: column;
        justify-content: space-between;
        max-width: 65%;
        height: auto;
        padding: 5px;
    }
`;


const ImgDiv = styled.div`
    align-self: center;
    padding: 5px;
    flex: 2;
    @media (max-width: 950px) {
        width: 95%;
    }
`
const Img = styled.img`
    display: flex;
    object-fit: contain;
    border-radius: 17px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    height: 250px;
    max-width: 550px;
    justify-self: center;
    @media (max-width: 950px) {
        height: auto;
        width: 100%;
    }
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    flex: 1;
    color: rgba(255,255,240,0.8);
    height: 100px;
    @media (max-width: 950px) {
        padding: 5px auto 5px auto;
        flex: 1;
    }
`
const Ribbon = styled.h3`
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    transform: rotate(-45deg) translate(-25%,-200%);
    background-color: #AB2929;

    box-shadow: 0 0px 10px rgba(0,0,0,.8);
    width: 200px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 950px) {
        font-size: 15px;
        left: -5px;
    }
`
const ProductName = styled.h1`
    margin: 0px auto 5px auto;
    font-size: 30px;
    @media (max-width: 950px) {
        font-size: 27px;
    }
    @media (max-width: 700px) {
        font-size: 23px;
    }
`
const ProductDescription = styled.p`
    margin: 5px auto;
    @media (max-width: 950px) {
        font-size: 15px;
    }
    @media (max-width: 700px) {
        font-size: 13px;
    }
`
const HR = styled.hr`
    width: 85%;
    margin: -0px auto;
    opacity: 0.2;
`


const Card = ({item}) => {
    return (
        <CardDiv>
            <Ribbon>{item.currentFill}/{item.fillDestination}</Ribbon>
            <ImgDiv>
                <Img src={item.img}></Img>
            </ImgDiv>
            <TextDiv>
                <ProductName>{item.name}</ProductName>
                <HR></HR>
                <ProductDescription>{item.description}</ProductDescription>
            </TextDiv>
        </CardDiv>

    )
}

export default Card;