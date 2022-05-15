import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/QQLZd6X/4.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Content = styled.p`
font-size:18px;
font-wieght:600;
color:black;
margin-top:10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #112B3C;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  marging-top:15px;
`;

const Profile = () => {
    const user = useSelector((state) => state.user.currentUser)
  return (
    <Container>
        <Wrapper>
            <Title>Hi {user.username}</Title>
            <Content>
Email-: {user.email}
            </Content>
            <Button>LOG OUT</Button>
        </Wrapper>
    </Container>
  )
}

export default Profile