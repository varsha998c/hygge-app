import React, { useState } from "react";
import styled from "styled-components";

function ProductCard() {
    const [product, setProduct] = useState([
        {
            id: 1,
            image: require("../../assets/images/Product-1.png"),
            Title: "Sun Cream",
            span: "SUN CARE",
            price: "$30",
            rate: "$20",
        },
        {
            id: 2,
            image: require("../../assets/images/Product-2.png"),
            Title: "Night Eye Cream",
            span: "EYE CARE",
            price: "$100",
            rate: "$50",
            offer: "50% OFF",
        },
        {
            id: 3,
            image: require("../../assets/images/Product-3.png"),
            Title: "Acne Skin Gel",
            span: "treatment",
            rate: "$25",
        },

        {
            id: 4,
            image: require("../../assets/images/Product-4.png"),
            Title: "Dry Skin Rescue",
            span: "MOISTURIZERS",
            rate: "$59",
        },
        {
            id: 5,
            image: require("../../assets/images/Product-5.png"),
            Title: "Body Protection",
            span: "treatment",
            rate: "$32",
        },
        {
            id: 6,
            image: require("../../assets/images/Product-6.png"),
            Title: "All In One Gel",
            span: "FEATURED",
            rate: "$79",
        },
        {
            id: 7,
            image: require("../../assets/images/Product-7.png"),
            Title: "Deep Treatment",
            span: "on sale",
            rate: "$17",
            offer: "5% OFF",
        },
        {
            id: 8,
            image: require("../../assets/images/Product-8.png"),
            Title: "Morning Shine",
            span: "NIGHT CARE",
            rate: "$14",
        },
    ]);

    return product.map((data) => (
        <Container>
            <TopContainer>
                <Section>
                    <Img src={data.image} alt="image" />
                </Section>
                {data.offer ? (
                    <Div key={data.id}>{data?.offer ? data.offer : ""}</Div>
                ) : (
                    ""
                )}
            </TopContainer>
            <BottomContainer>
                <Title>{data.Title}</Title>
                <Contents>
                    <Items bgcolor={data.id % 4}>
                        <Name color={data.id % 4}>{data.span}</Name>
                    </Items>
                    <DivContainer>
                        {data.price ? (
                            <Price>{data?.price ? data.price : ""}</Price>
                        ) : (
                            ""
                        )}

                        <Rate>{data.rate}</Rate>
                    </DivContainer>
                </Contents>
            </BottomContainer>
        </Container>
    ));
}

export default ProductCard;
const Container = styled.div`
    width: calc(23% - 20px);
    margin-bottom: 70px;
    position: relative;
    @media all and (max-width: 1280px) {
        width: calc(25% - 32px);
    }
    @media all and (max-width: 980px) {
        width: 29%;
    }
    @media all and (max-width: 768px) {
        width: 45%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: #f6f7fb;
    width: 100%;
    padding: 20px;
    height: 250px;
    margin-bottom: 40px;
    position: relative;
    @media all and (max-width: 1280px) {
        border-radius: 25px;
        height: 240px;
    }
`;

const Div = styled.div`
    padding: 8px 9px;
    background: red;
    position: absolute;
    width: 78px;
    top: 30px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    right: -31px;
    border-radius: 29px;
    font-family: montserrat_medium;
    display: ${(props) =>
        props.key === 1
            ? "none"
            : props.key === 2
            ? "block"
            : props.key === 3
            ? "none"
            : props.key === 4
            ? "none"
            : props.key === 5
            ? "none"
            : props.key === 6
            ? "none"
            : props.key === 7
            ? "none"
            : "block"};
    @media all and (max-width: 480px) {
        right: -23px;
    }
    @media all and (max-width: 360px) {
        right: -21px;
    }
`;
const Section = styled.div`
    width: 290px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    font-family: montserrat_medium;
    font-size: 22px;
    color: #1a202c;
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
    @media all and (max-width: 1080px) {
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        font-size: 17px;
    }
    @media all and (max-width: 480px) {
        font-size: 19px;
    }
`;
const Contents = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    @media all and (max-width: 640px) {
        width: 209px;
    }
    @media all and (max-width: 480px) {
        width: 200px;
    }
`;
const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Items = styled.div`
    padding: 12px 15px;
    background-color: ${(props) =>
        props.bgcolor === 0
            ? "#00cc961a"
            : props.bgcolor === 1
            ? "#ffc1231a"
            : props.bgcolor === 2
            ? "#2975ff1a"
            : "#ff66a01a"};
    border-radius: 20px;
    @media all and (max-width: 1280px) {
        padding: 12px 10px;
    }
    @media all and (max-width: 980px) {
        padding: 10px 11px;
    }
    @media all and (max-width: 768px) {
        padding: 12px 20px;
    }
    @media all and (max-width: 640px) {
        padding: 13px 9px;
    }
`;
const Name = styled.h3`
    font-size: 13px;
    text-transform: uppercase;
    font-family: "montserrat_medium";
    color: ${(props) =>
        props.color === 0
            ? "#00CC96"
            : props.color === 1
            ? "#FFC123"
            : props.color === 2
            ? "#2975FF"
            : "#FF66A0"};

    @media all and (max-width: 1080px) {
        font-size: 12px;
    }
`;
const Price = styled.span`
    margin-left: 20px;
    font-family: montserrat_bold;
    color: rgba(26, 32, 44, 0.24);
    font-size: 14px;
    position: relative;
    margin-right: 20px;
    @media all and (max-width: 1280px) {
        margin-left: 8px;
    }
    @media all and (max-width: 1080px) {
        margin-left: 7px;
        font-size: 12px;
        margin-right: 6px;
    }
    @media all and (max-width: 768px) {
        margin-left: 30px;
    }
    @media all and (max-width: 640px) {
        margin-left: 10px;
    }
    &::after {
        content: "";
        width: 25px;
        height: 1px;
        bottom: 7px;
        left: 2px;
        background-color: rgba(26, 32, 44, 0.24);
        position: absolute;
    }
`;
const Rate = styled.p`
    font-family: montserrat_bold;
    font-size: 18px;
    position: absolute;
    margin-left: 60px;
    @media all and (max-width: 1280px) {
        margin-left: 44px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
`;
