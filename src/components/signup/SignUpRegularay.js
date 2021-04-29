import styled from 'styled-components';
import { useState } from 'react';


let StyledContainer = styled.div`
margin: 10px auto;
    width: 350px;
    display: flex;
    flex-direction: column;
`;
let StyledButton = styled.button`
border-radius: 5px;
    padding: 10px;
    width: 300px;
    margin: 10px auto;
    margin-top: 15px;
    background-color: rgb(170, 0, 255);
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px black;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
&:hover{
    background-color: rgb(119, 34, 162);
     }
`
let StyledInput = styled.input`
 margin: 5px auto;
    padding: 0px 10px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(194, 194, 194);
`


const SignUpRegularay = () => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfPassword, setConfPassword] = useState('');

    const SignUp = () => {
        if (Password != ConfPassword){
            console.log("Passwords don't match");
            return;
        }
        fetch('https://fast-escarpment-21110.herokuapp.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: Email,
                name: FirstName + ' ' + LastName,
                password: Password,
                premission: 10
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user) {
                    console.log(user);
                }
            })
    }
    return (
        <StyledContainer>
            <StyledInput onInput={(e) => setFirstName(e.target.value)} placeholder="First Name" type="text" />
            <StyledInput onInput={(e) => setLastName(e.target.value)} placeholder="Last name" type="text" />
            <StyledInput onInput={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email" />
            <StyledInput onInput={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
            <StyledInput onInput={(e) => setConfPassword(e.target.value)} placeholder="Rewrite Password" type="password" />
            <StyledButton onClick={SignUp}>SIGN UP</StyledButton>
        </StyledContainer>
    )
}
export default SignUpRegularay;