import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Logo from './logo/Logo';
import Links from './links/Links';
import Input from '../input/Input'
import Burger from './burger/Burger';
import SignUpPopup from '../signup/SignUpPopup';
import LoginPopup from '../login/LoginPopup';

const NavContainer = styled.div`
    background-color: rgba(20,20,20,1);
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:sticky;
    top:0;
    z-index: 5;
    color: white;
`;
const Popup = styled.div`
    transition:all ease-in-out 0.4s;
    z-index:${props => props.prop ? '4' : '-1'};
    background-color:${props => props.prop ? 'rgba(138, 138, 138, 0.678)' : 'rgba(138, 138, 138, 0)'};
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
`;

const Nav = () => {
    const [loginPopup, setLoginPopup] = useState(false);
    const [signupPopup, setSignupPopup] = useState(false);
    const [shouldBeOpen, setShouldBeOpen] = useState(false);

    // ref
    const signUpNode = useRef();
    const loginNode = useRef();

    return (
        <div>
            <NavContainer>
                <Logo />
                <Input />
                <Links loginPopup={loginPopup} setLoginPopup={setLoginPopup} signupPopup={signupPopup} setSignupPopup={setSignupPopup} signUpNode={signUpNode} loginNode={loginNode} />
                <Burger loginPopup={loginPopup} setLoginPopup={setLoginPopup} signupPopup={signupPopup} setSignupPopup={setSignupPopup} shouldBeOpen={shouldBeOpen} setShouldBeOpen={setShouldBeOpen} />
            </NavContainer>
            <Popup prop={signupPopup} >
                <SignUpPopup signupPopup={signupPopup} setSignupPopup={setSignupPopup} signUpNode={signUpNode} />
            </Popup>
            <Popup prop={loginPopup} >
                <LoginPopup loginPopup={loginPopup} setLoginPopup={setLoginPopup} loginNode={loginNode} />
            </Popup>
        </div>

    )
}

export default Nav;
