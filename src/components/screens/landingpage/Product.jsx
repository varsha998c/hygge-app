import React from "react";
import styled from "styled-components";
import ProductCard from "../../includes/ProductCard";

function Product() {
    return (
        <Container>
            <div className="wrapper">
                <Heading>New Arrivals</Heading>
                <List>
                    <ProductCard />
                </List>
                <Div>
                    <Button>View all</Button>
                </Div>
            </div>
        </Container>
    );
}

export default Product;
const Container = styled.div`
    width: 100%;
    padding: 50px 0;
    @media all and (max-width: 640px) {
        padding: 125px 0 35px;
    }
`;
const Heading = styled.h1`
    font-family: "montserrat_bold";
    font-size: 40px;
    @media all and (max-width: 1280px) {
        font-size: 32px;
    }
    @media all and (max-width: 1080px) {
        font-size: 31px;
    }
    @media all and (max-width: 980px) {
        font-size: 27px;
    }
    @media all and (max-width: 768px) {
        font-size: 23px;
    }
    @media all and (max-width: 640px) {
        font-size: 30px;
    }
    @media all and (max-width: 480px) {
        font-size: 25px;
    }
    @media all and (max-width: 360px) {
        font-size: 25px;
        width: 70%;
        text-align: center;
        margin: 0 auto;
    }
`;
const List = styled.div`
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        justify-content: center;
        gap: 35px;
    }
    @media all and (max-width: 768px) {
        justify-content: space-between;
        gap: 25px;
    }
`;
const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    color: #fff;
    padding: 20px 40px;
    font-size: 20px;
    border-radius: 40px;
    font-family: montserrat_bold;
    text-transform: capitalize;
    background: #00cc96;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media all and (max-width: 1280px) {
        padding: 17px 35px;
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        padding: 15px 32px;
        font-size: 16px;
    }
`;
