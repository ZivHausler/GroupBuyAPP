import styled from 'styled-components';


const Styledimg = styled.img`
height: 60px;
width: 100px;
object-fit: cover;
margin-right: 15px;
background-color: white;
border-radius: 5px;
box-shadow: 0px 0px 5px black;
`;
const StyledLi = styled.li`
    box-shadow: 0px 0px 5px grey;
    margin: 5px;
    border-radius: 5px;
    background: lightgrey;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: ease-in-out 0.3s;
    padding: 10px;
    &:hover {
        background: #A8A8A8;
    }
`;

const FilterSearch = ({ itemName, itemImg }) => {

    return (
        <StyledLi>
            <Styledimg src={itemImg} />
            {itemName}
        </StyledLi>
    );
}

export default FilterSearch;