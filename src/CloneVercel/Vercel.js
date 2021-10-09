import React from 'react'
import styled from "styled-components"
import HeaderNav from "./HeaderNav"
import HeroComp from "./HeroComp"

const Vercel = () => {
    return (
       
       <Container>
           <Wrapper>
                <HeaderNav />
                <HeroComp />
           </Wrapper>
       </Container>
    )
}

export default Vercel

const Container = styled.div``;

const Wrapper = styled.div``;

