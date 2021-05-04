import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import FilterSearch from '../filtersearch/FilterSearch';
import database from '../database';
import Magnifyglass from '../input/image/magnifyglass.png';

const StyledInput = styled.input`
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    background: lightgrey;
    font-weight: normal;
    font-size:15px;
    width: 100%;
    max-width: 500px;
    padding: 10px 0px;
    margin: 15px auto;
    border-radius: 10px;
    box-shadow: 0px 0px 5px grey;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
`;
const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    width: 100%;
    max-width: 500px;
    position:relative;
    margin:auto;
    width:100%;
    max-width: 500px;
`;
const ReturnDiv = styled.div`
    position:relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.5;
`
const MagnifyImg = styled.img`
    height: 20px;
    width: 20px;
    position: absolute;
    top: 25px;
    right: 10px;
`
const Input = () => {
    let filtered = [];
    const node = useRef();
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // If 'esc' key is pressed when searching for an item, it closes the drop-down list.
    const handleInputChange = ((event) => {
        setSearchValue(event.target.value);
    })
    const searchItems = () => {
        if (searchValue.length >= 3) {
            filtered = database.products.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        setFilteredList(filtered)
    };

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            //inside click
            searchItems();
            return;
        }
        //outside click
        setFilteredList([]);
    };

    useEffect(() => {
        searchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])


    useEffect(() => {

    }, [filteredList])

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                let filtered = [];
                setFilteredList(filtered)
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ReturnDiv ref={node}>
            <StyledDiv>
                <MagnifyImg src={Magnifyglass} />
                <StyledInput onChange={handleInputChange} type="text" placeholder="Search here" />
                <FilterSearch filteredList={filteredList} />
            </StyledDiv>
        </ReturnDiv>
    )
}

export default Input;