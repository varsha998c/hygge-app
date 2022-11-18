import React from "react";
import styled from "styled-components";
import ListCard from "../../includes/ListCard";

function WhyUs() {
    return (
        <Container>
            <div className="wrapper">
                <Heading>Why People Choose Us</Heading>
                <Section>
                    <ListCard />
                </Section>
            </div>
        </Container>
    );
}
export default WhyUs;
const Container = styled.div`
    width: 100%;
    padding: 80px 0 100px;
    @media all and (max-width: 768px) {
        padding-bottom: 40px;
        padding-top: 60px;
    }
`;
const Heading = styled.h1`
    font-size: 40px;
    font-family: "montserrat_bold";
    text-align: center;
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
const Section = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 640px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }
`;
