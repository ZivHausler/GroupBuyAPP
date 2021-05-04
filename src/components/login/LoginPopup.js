import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import LoginWith from './LoginWith';
import LoginRegularay from './LoginRegularay';

const StyledTitle = styled.h1`
font-size:20px;
color:white;
margin:5px 0px;
`
const StyledContainer = styled.div`
    transition:all ease-in-out 0.4s;
    position:absolute;
    left:50%;
    top:50%;
    width:400px;
    border:1px solid white;
    border-radius:15px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    background-color:#0a101a;
    opacity: ${props => props.prop ? '1' : '0'};
    transform: ${props => props.prop ? 'translate(-50%, -50%)' : 'translate(-50%, -70%)'};
`;

const LoginPopup = ({ loginPopup, setLoginPopup, loginNode}) => {
    const node = useRef();

    const handleClick = e => {
        if (loginPopup) {
            if (!node.current.contains(e.target)) {
                //outside click
                if (!loginNode.current.contains(e.target)) {
                    //outside click of login btn
                    setLoginPopup(!loginPopup);
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    })

    return (
        <StyledContainer ref={node} prop={loginPopup} >
            <StyledTitle>Login</StyledTitle>
            <LoginWith />
            <StyledTitle>Or</StyledTitle>
            <LoginRegularay />
        </StyledContainer>


    )
}
export default LoginPopup;