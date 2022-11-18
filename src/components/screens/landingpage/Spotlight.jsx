import React from "react";
import styled from "styled-components";

function Spotlight() {
    return (
        <Components>
            <div className="wrapper">
                <Contents>
                    <Left>
                        <Heading>
                            We Offer the Best <br></br>Products for your Skin
                        </Heading>
                        <Button>Shop Now</Button>
                    </Left>
                    <Right>
                        <img
                            src={require("../../../assets/images/spotlight.png")}
                            alt="spotlight-image"
                        />
                    </Right>
                </Contents>
            </div>
        </Components>
    );
}

export default Spotlight;
const Components = styled.div`
    padding: 40px 0;
    width: 100%;

    @media all and (max-width: 640px) {
        position: relative !important;
        height: 96vh;
        padding-bottom: 0;
    }
    @media all and (max-width: 360px) {
        height: 75vh;
    }
`;
const Contents = styled.div`
    background: #f6f7fb;
    border-radius: 64px;
    padding: 35px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding: 35px 43px;
    }
    @media all and (max-width: 980px) {
        padding: 35px;
    }

    @media all and (max-width: 640px) {
        padding: 0px;
        flex-direction: column;
        background: transparent;
        width: 100%;
    }
`;
const Left = styled.div`
    width: 45%;
    @media all and (max-width: 1080px) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;
const Heading = styled.h1`
    font-size: 41px;
    font-family: "montserrat_bold";
    margin-bottom: 35px;
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
`;
const Button = styled.button`
    background: #00cc96;
    padding: 20px 45px;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    font-family: "montserrat_bold";
    @media all and (max-width: 1280px) {
        padding: 18px 30px;
    }
    @media all and (max-width: 1080px) {
        padding: 14px 24px;
        font-size: 16px;
    }
    @media all and (max-width: 980px) {
        padding: 13px 19px;
        font-size: 15px;
    }
    @media all and (max-width: 768px) {
        padding: 13px 15px;
        font-size: 14px;
    }
    @media all and (max-width: 640px) {
        padding: 12px 28px;
        font-size: 16px;
    }
    @media all and (max-width: 360px) {
        padding: 10px 18px;
        font-size: 14px;
    }
`;
const Right = styled.div`
    width: 55%;
    @media all and (max-width: 1080px) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
        background: #f6f7fb;
        border-radius: 30px;
        width: 100%;
    }
    @media all and (max-width: 360px) {
        padding: 20px 0;
        border-radius: 50px;
    }
`;
