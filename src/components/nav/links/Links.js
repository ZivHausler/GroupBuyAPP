import styled from 'styled-components';

const ULLinks = styled.ul`
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin: auto;
        flex: 0.5;
        @media (min-width: 292px) {
            display: none;
        }
        @media (min-width: 1100px) {
            display: flex;
            flex: 1;
        }
    `;
const Link = styled.li`
    cursor: pointer;
    text-align: center;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 10px;
    transition: all 0.25s ease-in-out;
     &:hover{
        background: rgba(255,255,255,.8);
        color: black;
     }
`;
const Links = ({ showPopup,setShowPopup }) => {
    return (
        <>
            <ULLinks>
                <Link onClick={() => {setShowPopup(!showPopup)}}>Sign Up</Link>
                <Link>Log In</Link>
                <Link>Log Out</Link>
            </ULLinks>
        </>
    )
}

export default Links;