import React from "react";
import { useState, useEffect } from "react";
import { getPost, listAllPosts } from "../services/posts";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";
import CommentCard from "./CommentCard";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #60a5fa;
  padding: 4px 8px;
  border-radius: 5px;

  &:hover {
    background-color: #1d4ed8;
    transition: all 300ms;
  }
`;

const Posts = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = id ? await getPost(id) : await listAllPosts();
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  if (!post) {
    return <h2>Não há posts a serem exibidos</h2>;
  }

  if (id) {
    return <CommentCard title={post.title} description={post.body} />;
  }

  return post.map((post, i) => (
    <StyledLink key={i} to={`/comment/${post.id}`}>
      {post.title}
    </StyledLink>
  ));
};

export default Posts;
