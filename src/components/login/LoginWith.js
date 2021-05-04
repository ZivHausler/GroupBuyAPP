import React from "react"
import styled from 'styled-components';

let StyledContainer = styled.div`
    margin: 0px;
    
`
let StyledButton = styled.button`
    width: 300px;
    height: 40px;
    margin: 10px auto;
    background-color: white;
    border-radius: 5px;
    border: 1px solid black;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    outline: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover{
        background: rgb(226, 221, 221);
        color: rgb(0, 0, 0);
    }
`
let StyledImg = styled.img`
    height: 75%;
    flex:1;
    padding-left: 7px;
    
`
let StyledTitle = styled.p`
    flex:10;

`

const LoginWith = () => {
    const companies = [
        {
            name: 'Facebook',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            link: 'facebook.com'
        },
        {
            name: 'Google',
            img: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png',
            link: 'google.com'
        },
        {
            name: 'Apple',
            img: 'https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png',
            link: 'apple.com'
        }
    ]

    return (
        <StyledContainer>
            {companies.map((company, i) => (
                <StyledButton onClick={() => { alert(company.link); }} key={i}>
                    <StyledImg src={company.img} />
                    <StyledTitle>{`Continue with ${company.name}`}</StyledTitle>
                </StyledButton>
            ))}
        </StyledContainer>
    );
}
export default LoginWith;