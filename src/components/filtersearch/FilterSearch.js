import styled from 'styled-components';
import FilterItem from './filteritem/FilterItem';


const SearchUl = styled.ul`
    position: absolute;
    left:50%;
    top:55px;
    width: 100%;
    max-width: 500px;
    z-index:5;
    list-style:none;
    padding:0;
    margin:0;
    transform:translateX(-50%);
    color: black;
    @media (min-width: 292px) {
        min-width: 300px;
    }
    @media (min-width: 1100px) {
    }
`;

const FilterSearch = ({ filteredList }) => {
    const array = [];
    filteredList.forEach((item, index) => {
        array.push(<FilterItem key={index} itemName={item.name} itemImg={item.img}/>);
    });

    return (
        <SearchUl>
            {array}
        </SearchUl>
    );
}

export default FilterSearch;