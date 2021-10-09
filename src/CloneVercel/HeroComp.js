import React from 'react'
import styled from "styled-components"

const HeroComp = () => {
    return (
        <Container>
            <Wrapper>
               <Text1>Develop.</Text1>
               <Text2>Preview.</Text2> 
               <Text3>Ship.</Text3> 
               <ButtonWrapper>
                <Button clr>Start Deploying</Button>
                <Button bdr>Get a Demo</Button>
               </ButtonWrapper>
               <HeroText>
               Vercel combines the best developer experience with an obsessive focus on end-user performance.
                Our platform enables frontend teams to do their best work.
               </HeroText>
            </Wrapper>
        </Container>
    )
}

export default HeroComp

const HeroText = styled.div`
color: #666;
margin: 64px;
font-size: 20px;
letter-spacing;
line-height: 32px;
text-align: center;
`;

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
margin-top: 60px;
`;

const Button = styled.button`
margin: 0 10px;
width: 200px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
border-radius: 5px;
line-height: 38px;
border: ${({bdr}) => (
    bdr ? "1px solid #eaeaea":"1px solid #000"
)};
background-color: ${({clr}) => (
    clr ? "#000":"#fff"
)};
color: ${({clr}) => (
    clr ? "#fff":"#000"
)};;
transition: all 350ms;

:hover {
    background-color: #fff;
    color: #000; 
    border: ${({bdr}) => (
        bdr ? "1px solid #000":""
    )};
}
`;

const Text3 = styled.div`
font-size: 128px;
font-weight: 800;
letter-spacing: -7.68px;
line-height: 128px;
padding: 0 6.4px;
text-align: center;
`;

const Text2 = styled.div`
font-size: 128px;
font-weight: 800;
letter-spacing: -7.68px;
line-height: 128px;
padding: 0 6.4px;
text-align: center;
`;

const Text1 = styled.div`
font-size: 130px;
font-weight: 800;
letter-spacing: -7.68px;
line-height: 128px;
padding: 0 6.4px;
text-align: center;
`;

const Wrapper = styled.div`
padding-top: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Container = styled.div`
width: 100%;
background-color: #fff; 
font-family: Segoe UI;
padding-top: 80px;
`;