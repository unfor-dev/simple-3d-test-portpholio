import styled from "styled-components";
import React from "react";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 600px) {
    gap: 20px;
    margin-left: -40px;
  }

  @media only screen and (max-width: 490px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logoN.png" />
          <List>
            <ListItem><a href='#'>Home</a></ListItem>
            <ListItem><a href='#'>Studio</a></ListItem>
            <ListItem><a href='#'>Works</a></ListItem>
            <ListItem><a href='#'>Contact</a></ListItem>
          </List>
        </Links>

        <Icons>
          <Icon src="./img/search.png" />
          <Button type="button">Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
