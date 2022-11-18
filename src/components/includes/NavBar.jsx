import React from "react";
import styled from "styled-components";

function NavBar({ menu, setMenu }) {
    return (
        <Container>
            <ListItem>
                <List>
                    <a href="#">Home</a>
                </List>
                <a href="#">About</a>
            </ListItem>
        </Container>
    );
}

export default NavBar;
const Container = styled.div`
    width: 400px;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    @media all and (max-width: 360px) {
        display: block;
    }
`;
const ListItem = styled.div`
    display: flex;
    flex-direction: column;
`;
const List = styled.div``;
