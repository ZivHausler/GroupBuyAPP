import styled from 'styled-components';
import Welcome from './welcome/Welcome';
import Search from './search/Search';

const Main = styled.main
`
`;

const Body = () => {
    return(
        <Main>
            <Welcome/>
            <Search/>
        </Main>
    )
}

export default Body;
