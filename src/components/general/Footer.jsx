import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Container>
            <div className="wrappers">
                <LeftContainer>
                    <Contents>
                        <LogoContainer>
                            <Logo
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                        </LogoContainer>
                        <LogoName>
                            <a href="#">Hygge</a>
                        </LogoName>
                    </Contents>
                    <Contents>
                        <CopyRight>© 2020 - All rights reserved</CopyRight>
                    </Contents>
                    <Contents className="media">
                        <MediaIcon>
                            <img
                                src={require("../../assets/images/instagram-1.png")}
                                alt="insta"
                            />
                        </MediaIcon>
                        <MediaIcon>
                            <img
                                src={require("../../assets/images/Icon.png")}
                                alt="twitter"
                            />
                        </MediaIcon>
                        <MediaIcon className="facebook">
                            <img
                                src={require("../../assets/images/facebook-1.png")}
                                alt="facebook"
                            />
                        </MediaIcon>
                    </Contents>
                </LeftContainer>
                <List>
                    <Heading>Categories</Heading>
                    <Item>
                        {" "}
                        <a href="#">Featured</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Masks</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Eye Care</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Moisturizers</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Treatments</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Night Care</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#">Sun Care</a>
                    </Item>
                </List>
                <List>
                    <Heading>Legal</Heading>
                    <Item>
                        {" "}
                        <a href="#">Terms of Service</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#"> Privacy Policy</a>
                    </Item>
                </List>
                <List>
                    <Heading>Company</Heading>
                    <Item>
                        <a href="#"> About</a>
                    </Item>
                    <Item>
                        {" "}
                        <a href="#"> Team</a>
                    </Item>
                    <Item>
                        <a href="#"> Contact</a>
                    </Item>
                </List>
            </div>
        </Container>
    );
}

export default Footer;
const Container = styled.div`
    width: 100%;
    padding: 90px 0;
    @media all and (max-width: 980px) {
        padding: 35px 0 60px;
    }
`;
const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media all and (max-width: 1280px) {
        justify-content: stretch;
    }
    @media all and (max-width: 980px) {
        width: 37%;
    }
    @media all and (max-width: 768px) {
        width: 50%;
    }
    @media all and (max-width: 360px) {
        width: 50%;
        margin-bottom: 40px;
    }
`;
const Contents = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: flex-start;
    &:last-child {
        margin-bottom: 0;
    }
    @media all and (max-width: 980px) {
        width: 236px;
    }
    @media all and (max-width: 360px) {
        width: 183px;
    }
`;

const LogoContainer = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const Logo = styled.img``;
const LogoName = styled.h5`
    cursor: pointer;
    a {
        color: #000;
        position: relative;
        font-size: 22px;
        display: flex;
        font-family: "montserrat_bold";
        @media all and (max-width: 768px) {
            font-size: 20px;
        }
        @media all and (max-width: 1080px) {
            font-size: 18px;
        }
        @media all and (max-width: 980px) {
            font-size: 15px;
        }
    }
`;
const CopyRight = styled.p`
    font-size: 20px;
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1080px) {
        font-size: 16px;
    }
    @media all and (max-width: 980px) {
        font-size: 14px;
    }
`;
const MediaIcon = styled.div`
    width: 54px;
    margin-right: 24px;
    padding: 15px;
    height: 54px;
    background: #f7f7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media all and (max-width: 1280px) {
        width: 48px;
        padding: 15px;
        height: 48px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 16px;
    }
    @media all and (max-width: 480px) {
        width: 44px;
        padding: 13px;
        height: 44px;
    }
    @media all and (max-width: 360px) {
        width: 41px;
        margin-right: 7px;
        padding: 12px;
        height: 41px;
    }
    &:hover {
        opacity: 0.5;
    }
    img {
        width: 100%;
        display: block;
        &:hover {
            opacity: 0.7;
        }
    }
    &.facebook {
        width: 56px;
        height: 56px;
        padding: 20px;
        border-radius: 50%;
        margin-right: 0px;
        @media all and (max-width: 1280px) {
            width: 48px;
            padding: 17px;
            height: 48px;
        }

        @media all and (max-width: 480px) {
            width: 48px;
            padding: 18px;
            height: 48px;
        }
        @media all and (max-width: 360px) {
            width: 41px;
            margin-right: 0;
            padding: 14px;
            height: 41px;
        }
    }
`;

const RightContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 48%;
    }
    @media all and (max-width: 1080px) {
        width: 53%;
    }
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (max-width: 1080px) {
        width: 22%;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 50px;
        width: 20%;
    }
    @media all and (max-width: 768px) {
        width: 26%;
    }
    @media all and (max-width: 360px) {
        width: 36%;
    }
`;
const Heading = styled.h3`
    color: #000;
    font-family: "montserrat_bold";
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
`;
const Item = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
    a {
        @media all and (max-width: 1080px) {
            font-size: 15px;
        }
        @media all and (max-width: 980px) {
            font-size: 14px;
        }
    }
`;
