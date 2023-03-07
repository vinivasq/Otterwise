import React from "react";
import styled from "styled-components";
import Posts from "../components/Posts";

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledList = styled.ul`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <div>
      <StyledTitle>Lista de posts</StyledTitle>
      <StyledList>
        <Posts />
      </StyledList>
    </div>
  );
};

export default Home;
