import styled from "styled-components";

const Container = styled.div`
    width: 100px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    margin: 5px;
    margin-top: 0px;

`
const Cricle = styled.div`
    margin: auto;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0,0,0,.5);
    display: flex;
    background-color: rgba(100,100,100,0.4);
    justify-content: center;
    align-items: center;
    transition: ease-in-out 0.2s all;
    &:hover{
        background-color: #ececec;
        transform:scale(1.1);
        box-shadow:0px 0px 20px rgba(0,0,0,.5);
        background-color: rgba(200,200,200,0.8);
    }
    @media (max-width: 750px) {
        width: 70px;
        height: 70px;
    }
`
const Img = styled.img`
    height:55px;
    width:55px;
    @media (max-width: 750px) {
        width: 60%;
        height: 60%;
    }
`
const Title = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-align: center;
    margin-top: 5px;
    color: white;
    font-weight: bold;
    @media (max-width: 750px) {
        font-size: 12px;
    }
`

const Bubble = ({target,src,title}) => {
    return (
        <Container>
            <Cricle>
                <Img src={src}/>
            </Cricle>
            <Title>{title}</Title>
        </Container>
    );
}

export default Bubble;