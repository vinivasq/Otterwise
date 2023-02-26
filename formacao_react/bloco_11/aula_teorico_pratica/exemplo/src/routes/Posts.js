import { useParams } from "react-router-dom";
import { getPost, listAllPosts } from "../services/posts";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts();
      setData(response.data);
    };
    request();
  }, [id]);

  if (!data) return <p>Não existem posts a serem exibidos</p>;
  if (id) return <p>{data.title}</p>;
  return data.map((post, i) => <p key={i}>{post.title}</p>);
};

export default Posts;
