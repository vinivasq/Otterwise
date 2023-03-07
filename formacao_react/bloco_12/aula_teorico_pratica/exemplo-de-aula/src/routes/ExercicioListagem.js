import React from "react";
import { listAllPosts } from "../services/post";
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #312e81;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ExercicioListagem = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await listAllPosts();
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  if (!posts) return <p>Não há posts a serem exibidos</p>;

  return (
    <StyledList>
      {posts.map((post, i) => (
        <PostCard key={i} title={post.title} description={post.body} />
      ))}
    </StyledList>
  );
};

export default ExercicioListagem;
