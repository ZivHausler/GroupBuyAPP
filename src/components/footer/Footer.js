import styled from 'styled-components';
import facebookLogo from './images/facebook.png'
import instagramLogo from './images/instagram.png'
import twitterLogo from './images/twitter.png'

const FooterDiv = styled.div
`
    height: 5vh;
    display: flex;
    width:30%;
    margin: auto;
    justify-content: space-around;
`;
const ImageLogo = styled.img
`
    height: 50px;
    width: 50px;
`;

const Footer = () => {
    return (
        <FooterDiv>
            <ImageLogo src={facebookLogo}/>
            <ImageLogo src={instagramLogo}/>
            <ImageLogo src={twitterLogo}/>
        </FooterDiv>
    );
}
export default Footer