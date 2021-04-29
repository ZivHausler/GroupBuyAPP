import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import Card from '../../../../card/Card';
import database from '../../../../database';
import H1Title from '../../../../titles/H1Title'

// Styled Components //
const WelcomeDiv = styled.div`

    text-align: center;
`;

// Functions //
const Welcome = () => {
    const [counter,setCounter] = useState(0);

    // let card;
    useEffect(() => {
        const interval = setInterval(() => {
          setCounter((counter+1) % 4);
        }, 7000);
        return () => clearInterval(interval);
      }, [counter]);

      database.products.sort(function (a,b){
        return b.currentFill - a.currentFill;
      });

    return(
        <div>
            <H1Title text="Closing Deals"></H1Title>
            <WelcomeDiv>
            <Card item={database.products[counter]}  />
            </WelcomeDiv>
        </div>
    )
}

export default Welcome;