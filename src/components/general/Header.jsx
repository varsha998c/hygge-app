import React, { useState } from "react";
import styled from "styled-components";

function Header() {
    return (
        <Components>
            <div className="wrapper">
                <Left>
                    <MenuContainer>
                        <MenuIcon
                            src={require("../../assets/images/Menu.png")}
                            alt="menu"
                        />
                    </MenuContainer>
                    <LogoContainer>
                        <Logo
                            src={require("../../assets/images/logo.png")}
                            alt="logo"
                        />
                    </LogoContainer>
                    <LogoName>
                        <a href="#">Hygge</a>
                        <Bird>
                            <img
                                src={require("../../assets/images/bird.png")}
                                alt="bird"
                            />
                        </Bird>
                    </LogoName>
                </Left>
                <Right>
                    <SearchContainer>
                        <Search
                            src={require("../../assets/images/Search.png")}
                            alt="search"
                        />
                    </SearchContainer>
                    <CartContainer>
                        <img
                            src={require("../../assets/images/Cart.png")}
                            alt="cart"
                        />
                    </CartContainer>
                    <ProfileContainer>
                        <img
                            src={require("../../assets/images/Profile.png")}
                            alt="profile"
                        />
                    </ProfileContainer>
                </Right>
            </div>
        </Components>
    );
}

export default Header;

const Components = styled.div`
    padding: 30px 0;
    width: 100%;
    div.wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    @media all and (max-width: 480px) {
        width: 65%;
        justify-content: space-between;
    }
`;
const Right = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        width: 14%;
    }
    @media all and (max-width: 980px) {
        width: 18%;
    }
    @media all and (max-width: 640px) {
        width: 22%;
    }
    @media all and (max-width: 480px) {
        width: 10%;
    }
`;
const MenuContainer = styled.div`
    width: 20px;
    margin-right: 10px;
    display: none;
    @media all and (max-width: 480px) {
        display: block;
        width: 30px;
        background: #f6f7fb;
        padding: 5px;
        border-radius: 50%;
    }
`;
const MenuIcon = styled.img`
    width: 100%;
    display: block;
`;
const LogoContainer = styled.div`
    width: 30px;
    margin-right: 5px;
    cursor: pointer;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
const LogoName = styled.h1`
    cursor: pointer;
    position: relative;

    a {
        color: #000;
        position: relative;
        font-size: 22px;
        display: flex;
        font-family: "montserrat_bold";
        @media all and (max-width: 768px) {
            font-size: 20px;
        }
        @media all and (max-width: 480px) {
            width: 100px;
        }
    }
`;
const SearchContainer = styled.div`
    width: 20px;
    cursor: pointer;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Search = styled.img`
    width: 100%;
    display: block;
`;
const CartContainer = styled.div`
    width: 20px;
    cursor: pointer;
    @media all and (max-width: 480px) {
    }
`;
const ProfileContainer = styled.div`
    width: 20px;
    cursor: pointer;
    @media all and (max-width: 480px) {
        display: none;
    }
`;
const Bird = styled.div`
    width: 15px;
    top: -6px;
    position: absolute;
    display: none;
    @media all and (max-width: 480px) {
        display: block;
    }
`;
