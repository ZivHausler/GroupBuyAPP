import styled from 'styled-components';
import SignUpWith from './SignUpWith';
import SignUpRegularay from './SignUpRegularay';

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

const SignUpPopup = ({showPopup}) => {
    return (
        <StyledContainer prop={showPopup} >
            <StyledTitle>Quick & Dirty</StyledTitle>
            <SignUpWith />
            <StyledTitle>Or</StyledTitle>
            <SignUpRegularay />
        </StyledContainer>


    )
}
export default SignUpPopup;