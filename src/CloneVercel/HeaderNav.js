import React from 'react'
import styled from "styled-components"
import logo from "./assets/logotype-dark.png"

const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo} />
                <Navigation>
                    <Nav>Templates</Nav>
                    <Nav>Integrations</Nav>
                    <Nav>Analytics</Nav>
                    <Nav>Customers</Nav>
                    <Nav>Pricing</Nav>
                    <NavWrapper>
                        <Nav>Contact</Nav>
                        <Nav>Login</Nav>
                        <Button>Sign Up</Button>
                    </NavWrapper>
                </Navigation>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const NavWrapper = styled.div`
display: flex;
margin-left: 30px;
align-items: center;
`;

const Button = styled.button`
border: 1px solid black;
background-color: black;
color: #fff;
padding: 8px 15px;
border-radius: 5px;
font-weight: bold;
transition: all 350ms;

:hover {
    background-color: transparent;
    color: #000;
    cursor: pointer;
}
`;

const Nav = styled.div`
margin: 0 10px;
opacity: 0.7;
transition: all 350ms;

:hover {
    opacity: 1;
    cursor: pointer;
}
`;

const Navigation = styled.div`
display: flex;
align-items: center;
margin-right: 30px;
`;

const Logo = styled.img`
width: 150px;
height: 25px;
padding: 8px;
object-fit; contain;
margin-left: 30px;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Container = styled.div`
width: 100%; 
height: 80px; 
color: #000;
background-color: #fff; 
font-family: Segoe UI;
position: fixed;
background: rgba( 255, 255, 255, 0.8 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border: 2px solid rgba( 255, 255, 255, 0.18 );
`;
