import React, { useState } from "react";
import styled from "styled-components";

function ListCard() {
    const [item, setItem] = useState([
        {
            id: 1,
            image: require("../../assets/images/returns.png"),
            title: "Easy Returns",
            decription:
                "Our return policy is simple and that is why customers love our shop.",
        },
        {
            id: 2,
            image: require("../../assets/images/Profile.png"),
            title: "Customer Service",
            decription:
                "We offer amazing customer service no matter what happens.",
        },
        {
            id: 3,
            image: require("../../assets/images/quality.png"),
            title: "High Quality",
            decription:
                "All of our products go through very strict inspection before we dispatch them.",
        },
    ]);
    return item.map((data) => (
        <ListItems>
            <ImgContainer>
                <Img src={data.image} alt="image" />
            </ImgContainer>
            <Title>{data.title}</Title>
            <Description>{data.decription}</Description>
        </ListItems>
    ));
}

export default ListCard;
const ListItems = styled.div`
    width: calc(33% - 10px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 640px) {
        width: 45%;
        margin-bottom: 40px;
    }
    @media all and (max-width: 480px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;
const ImgContainer = styled.div`
    width: 56px;
    padding: 12px;
    border-radius: 50%;
    background-color: #f6f7fb;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        width: 51px;
    }
    @media all and (max-width: 980px) {
        width: 45px;
    }
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Title = styled.h5`
    font-family: "montserrat_medium";
    font-size: 24px;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
    @media all and (max-width: 1080px) {
        font-size: 18px;
    }
`;
const Description = styled.p`
    text-align: center;
    width: 77%;
    font-size: 21px;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        width: 84%;
        font-size: 16px;
    }
    @media all and (max-width: 1080px) {
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        width: 91%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
        font-size: 15px;
    }
`;
