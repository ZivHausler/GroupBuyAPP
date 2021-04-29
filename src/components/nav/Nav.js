import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Logo from './logo/Logo';
import Links from './links/Links';
import Input from '../input/Input'
import Burger from './burger/Burger';
import SignUpPopup from '../signup/SignUpPopup';

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
    z-index:${props => props.showPopup ? '4' : '-1'};
    background-color:${props => props.showPopup ? 'rgba(138, 138, 138, 0.678)' : 'rgba(138, 138, 138, 0)'};
    width:100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
`;

const Nav = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [shouldBeOpen, setShouldBeOpen] = useState(false);

    useEffect(() => {
    }, [shouldBeOpen]);

    useEffect(() => {

    }, [showPopup]);

    return (
        <div>
            <NavContainer>
                <Logo />
                <Input />
                <Links showPopup={showPopup} setShowPopup={setShowPopup} />
                <Burger shouldBeOpen={shouldBeOpen} setShouldBeOpen={setShouldBeOpen} />
                {/* <BurgerMenu /> */}
            </NavContainer>
            <Popup showPopup={showPopup}>
                <SignUpPopup showPopup={showPopup} />
            </Popup>
        </div>

    )
}

export default Nav;
