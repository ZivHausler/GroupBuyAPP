import styled from 'styled-components';
import Bubble from '../../../../bubble/Bubble';
import H2Title from '../../../../titles/H2Title'

const Bubbles = styled.div`
    background: transparent;
    display: flex;
    min-height: 100px;
    max-width: 1000px;
    margin: 5px auto 20px auto;
    justify-content:center;
    @media (max-width: 750px) {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
`;

const Search = () => {
    return(
        <div>
            <H2Title text={"Search by subject"}></H2Title>
            <Bubbles>
                <Bubble title="Computers" src="https://img.icons8.com/office/80/000000/computer.png" target="null.com"/>
                <Bubble title="Pets" src="https://img.icons8.com/dusk/64/000000/pets.png" target="null.com"/>
                <Bubble title="Cars" src="https://img.icons8.com/officel/64/000000/car.png" target="null.com"/>
                <Bubble title="Jobs" src="https://img.icons8.com/dusk/64/000000/job.png" target="null.com"/>
                <Bubble title="Real Estate" src="https://img.icons8.com/dusk/64/000000/real-estate.png" target="null.com"/>
                <Bubble title="Clothing" src="https://img.icons8.com/cotton/64/000000/black-women-t-shirt-with-thin-straps.png" target="null.com"/>
                <Bubble title="Furniture" src="https://img.icons8.com/cotton/64/000000/armchair--v3.png" target="null.com"/>
            </Bubbles>
        </div>
    )
}

export default Search;