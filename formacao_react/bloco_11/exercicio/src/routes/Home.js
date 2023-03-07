import React from "react";
import Posts from "../components/Posts";
import { StyledList } from "../components/StyledList";
import { StyledTitle } from "../components/StyledTitle";

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
