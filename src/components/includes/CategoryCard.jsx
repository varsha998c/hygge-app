import React, { useState } from "react";
import styled from "styled-components";

function CategoryCard() {
    const [items, setItems] = useState([
        {
            id: 1,
            image: require("../../assets/images/Shopping-bag.svg").default,
            title: "On Sale",
        },
        {
            id: 2,
            image: require("../../assets/images/Trending.svg").default,
            title: "Featured",
        },
        {
            id: 3,
            image: require("../../assets/images/Skincare.svg").default,
            title: "Masks",
        },
        {
            id: 4,
            image: require("../../assets/images/Eye-care.svg").default,
            title: "Eye Care",
        },
        {
            id: 5,
            image: require("../../assets/images/Natural.svg").default,
            title: "Moisturizers",
        },
        {
            id: 6,
            image: require("../../assets/images/Protection.svg").default,
            title: "Treatments",
        },
        {
            id: 7,
            image: require("../../assets/images/Night-care.svg").default,
            title: "Night Care",
        },
        {
            id: 8,
            image: require("../../assets/images/After-sun.svg").default,
            title: "Sun Care",
        },
    ]);
    console.log(items, "++++++++++++++++++++++++++++");
    return items.map((data) => (
        <Container className="responsive">
            <ImgContainer>
                <img src={data.image} alt="Image" />
            </ImgContainer>
            <Title>{data.title}</Title>
        </Container>
    ));
}

export default CategoryCard;
const Container = styled.div`
    width: 10%;
    padding: 30px 10px;
    border-radius: 20px;
    background-color: #f6f7fb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-right: 30px; */
    &:last-child {
        margin-right: 0;
    }
`;
const ImgContainer = styled.div`
    width: 30px;
    cursor: pointer;
    margin-bottom: 20px;
`;
const Title = styled.h6`
    font-family: montserrat_medium;
    font-size: 14px;
`;
