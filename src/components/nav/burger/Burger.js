import styled from 'styled-components';

const BurgerDiv = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    flex-direction: column;
    flex: 0.5;
    cursor: pointer;
    @media (min-width: 292px) {
        display: flex;
    }
    @media (min-width: 1100px) {
        display: none;
    }
`;
const JustDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    width: 30px;
    height: 100%;
`;
const Line = styled.div`
    margin: 2.5px 0px;
    background: white;
    height: 2px;
    width: 30px;
`;
const Menu = styled.ul`
    list-style-type: none;
    /* display: flex; */
    display: flex;
    opacity: ${props => props.prop ? '1' : '0'};
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 22px;
    padding: 10px;
    transform: ${props => props.prop ? 'translate(-50%, 0%)' : 'translate(-50%, -80%)'};
    background-color: #141414;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: auto;
    transition: all 0.5s cubic-bezier(0.61,-0.23, 0.43, 1.35);
    @media (min-width: 292px) {
    }
    @media (min-width: 1100px) {
    }
`;
const Link = styled.li`
    z-index: 3;
    cursor: pointer;
    text-align: center;
    padding: 2px 5px;
    width: 60px;
    margin: 5px auto;
    border-radius: 10px;
    opacity: ${props => props.prop ? '1' : '0'};
    transform: ${props => props.prop ? 'translate(0%, 0%)' : 'translate(0%, -40%)'};
    transition: all 0.3s ease-in-out;
     &:hover{
        background: rgba(255,255,255,.8);
        color: black;
     }
`;

const Burger = ({shouldBeOpen, setShouldBeOpen, signupPopup, setSignupPopup, loginPopup, setLoginPopup}) => {

    const ToggleLinks = () => {
        setShouldBeOpen(!shouldBeOpen)
    }
    

    return(
        <BurgerDiv  onClick={ToggleLinks}>
            <JustDiv>
                <Line/>
                <Line/>
                <Line/>
            </JustDiv>
            <Menu prop={shouldBeOpen}>
                <Link onClick={() => {setSignupPopup(!signupPopup)}} prop={shouldBeOpen}>Sign Up</Link>
                <Link onClick={() => {setLoginPopup(!loginPopup)}} prop={shouldBeOpen}>Log In</Link>
                <Link prop={shouldBeOpen}>Log Out</Link>
            </Menu>
        </BurgerDiv>
    )
}
export default Burger;