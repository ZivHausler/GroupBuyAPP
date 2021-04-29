import styled from 'styled-components';
import database from '../database'

const ProductCard = styled.div`
    min-height: 75vh;
    width: 80%;
    max-width: 900px;
    padding: 10px;
    margin: 30px auto;
    background-color: rgba(151,158,160);
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: all 0.2s ease-in-out;
`
const Info = styled.div`
    display: flex;
    flex: 3;
    flex-direction: row;
    width: 100%;
    @media (max-width: 950px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const AdditionalInfo = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductInfo = styled.div`
    flex: 1.5;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px;
    padding: 10px;
    /* background: rgba(0, 0, 255, 0.2); */
`
const SellerInfo = styled.div`
    margin: 5px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.192);
    flex: 0.5;
    /* height: 40%; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;
    cursor: pointer;
    border: 1px solid #313131;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color:rgba(0, 0, 0, 0.3); 
        color: white;
    }
    @media (max-width: 950px) {
        align-self: center;
    }
`
const Line = styled.div`
    display: flex;
    
    margin: ${props => props.space === "yes" ? "-5px 0 -10px 0" : "-10px 0 -10px 0"};
`
const Key = styled.p`
    text-decoration: underline;
    font-weight: bold;
    padding: 0px 3px;
`
const Value = styled.p`
    padding: 0px 3px;
    text-decoration: ${props => props.price === "old" ? "line-through" : "none"};
    @media (max-width: 950px) {
        font-size: 15px;
    }
` 
const ProductImgDiv = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 100%;
    min-height: 100px;
    transition: all 0.2s ease-in-out;
    @media (max-width: 950px) {
        flex: 4;
        flex-direction: column-reverse;
        justify-content: center;
    }
`
const ProductImg = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.3);
    padding: 5px;
    @media (max-width: 950px) {
        width: 80%;
    }

`
const ProductDescriptionDiv = styled.div`
    padding: 10px;
    text-align: center;
`
const ProductDescriptionName = styled.h1`
    margin-top: 0px;
    margin-bottom: 5px;
    @media (max-width: 950px) {
        font-size: 25px;
    }
`
const ProductDescriptionText = styled.p`
    margin-top: 10px;
    @media (max-width: 950px) {
        font-size: 15px;
    }
`
const HR = styled.hr`
    background: rgba(0,0,0,.2);
    border: 1px solid rgba(0,0,0,.05);
    width: 85%;
    margin: -0px auto;
    border-radius: 100%;
`
const Buttons = styled.div`
    flex: 0.5;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: rgba(0, 255, 0, 0.2); */
    @media (max-width: 950px) {
        flex-direction: row;
    }
`
const CompanyLogo = styled.img`
    width: 70%;
    max-width: 400px;
    margin: -15px auto;
    align-self: center;
    justify-self: center;
`
const SellerLogo = styled.img`
    width: 70%;
    align-self: center;
`
const Link = styled.p`
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
`
const Button = styled.button`
    height: 40px;
    width: 100px;
    margin: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #474747;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #292929; 
    }
`
const DryInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
`
const WetInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 5px;
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 650px) {
        flex-direction: column;
    }
`
const Product = () => {
    const product = database.products[0];
    const seller = database.sellers[0];

    return(
        <ProductCard>
            <ProductImgDiv>
                <ProductDescriptionDiv>
                    <ProductDescriptionName>{product.name}</ProductDescriptionName>
                    <HR></HR>
                    <ProductDescriptionText>{product.description}</ProductDescriptionText>
                </ProductDescriptionDiv>
                <ProductImg src={product.img}/>
            </ProductImgDiv>
            <Info>
                <ProductInfo>
                    <CompanyLogo src={product.info.comp_logo}/>
                    <Div>
                        <DryInfo>
                            <Line>
                                 <Key>Product name:</Key>
                                 <Value>{product.info.product_name}</Value>
                             </Line>
                             <Line>
                                 <Key>Brand name:</Key>
                                 <Value>{product.info.brand_name}</Value>
                             </Line>
                             <Line>
                                 <Key>Release date:</Key>
                                 <Value>{product.info.release_date}</Value>
                             </Line>
                             <Line space={"yes"}>
                                 <Key >Product price:</Key>
                                 <Value price={"old"}>{product.info.product_price}</Value>
                             </Line>
                        </DryInfo>
                        <WetInfo>
                            <Line>
                                 <Key>Group price:</Key>
                                 <Value>{product.info.group_price}</Value>
                             </Line>
                             <Line>
                                 <Key>Current requests:</Key>
                                 <Value>{product.info.current_requests}/{product.info.max_requests}</Value>
                             </Line>
                             <Line space={"yes"}>
                                 <Key>Starting date:</Key>
                                 <Value>{product.info.date_started}</Value>
                             </Line>
                             <Line>
                                 <Key>Deadline:</Key>
                                 <Value>{product.info.deadline}</Value>
                             </Line>
                        </WetInfo>
                    </Div>
                    <Link>visit seller's site</Link>
                </ProductInfo>
                <AdditionalInfo>
                <SellerInfo>
                    <SellerLogo src={seller.comp_logo}/>
                    <Line>
                         <Key>Seller:</Key>
                         <Value>{seller.comp_name}</Value>
                     </Line>
                     <Line>
                         <Key>Rating:</Key>
                         <Value>{seller.rate}/5</Value>
                     </Line>
                     <Line>
                         <Key>Delivery:</Key>
                         <Value>{seller.delivery ? "Yes" : "No"}</Value>
                     </Line>
                 </SellerInfo>
                    <Buttons>
                        <Button onClick={()=>console.log("Notify me")}>Notify me</Button>
                        <Button onClick={()=>console.log("Join the bid")}>Join now</Button>
                    </Buttons>
                </AdditionalInfo>
               
            </Info>
        </ProductCard>
    )
}

export default Product;
