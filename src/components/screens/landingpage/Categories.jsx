import React, { useState } from "react";
import Slider from "react-slick";

import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Categories() {
    const [items, setItems] = useState([
        {
            id: 1,
            image: require("../../../assets/images/Shopping-bag.svg").default,
            title: "On Sale",
        },
        {
            id: 2,
            image: require("../../../assets/images/Trending.svg").default,
            title: "Featured",
        },
        {
            id: 3,
            image: require("../../../assets/images/Skincare.svg").default,
            title: "Masks",
        },
        {
            id: 4,
            image: require("../../../assets/images/Eye-care.svg").default,
            title: "Eye Care",
        },
        {
            id: 5,
            image: require("../../../assets/images/Natural.svg").default,
            title: "Moisturizers",
        },
        {
            id: 6,
            image: require("../../../assets/images/Protection.svg").default,
            title: "Treatments",
        },
        {
            id: 7,
            image: require("../../../assets/images/Night-care.svg").default,
            title: "Night Care",
        },
        {
            id: 8,
            image: require("../../../assets/images/After-sun.svg").default,
            title: "Sun Care",
        },
    ]);
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container>
            <div className="wrapper">
                <Heading>Browse by Category</Heading>
                <Item>
                    <Slider {...settings}>
                        {items.map((list) => (
                            <Containers>
                                <ImgContainer>
                                    <Img src={list.image} alt="Image" />
                                </ImgContainer>
                                <Title>{list.title}</Title>
                            </Containers>
                        ))}
                    </Slider>
                </Item>
            </div>
        </Container>
    );
}

export default Categories;
const Container = styled.div`
    width: 100%;
    padding: 60px 0;
    @media all and (max-width: 640px) {
        padding: 0px 0 40px;
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
const Item = styled.div`
    margin-top: 60px;
    width: 100% !important;
    /* display: flex; */
`;
const Containers = styled.div`
    cursor: pointer;
    width: 10%;
    padding: 30px 10px;
    border-radius: 20px;
    background-color: #f6f7fb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:last-child {
        margin-right: 0;
    }
`;
const ImgContainer = styled.div`
    width: 30px;
    text-align: center;
    cursor: pointer;
    margin: 0 auto !important;
`;
const Img = styled.img``;
const Title = styled.h6`
    font-family: montserrat_medium;
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
`;
