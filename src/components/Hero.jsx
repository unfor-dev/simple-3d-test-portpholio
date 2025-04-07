import styled from "styled-components";
import React from "react";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

export default function Hero() {
  return (
    <Section>
      <Navbar />
    </Section>
  );
};
