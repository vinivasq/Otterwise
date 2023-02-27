import { useParams, useSearchParams } from "react-router-dom";
import { getPost, listAllPosts } from "../services/posts";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  console.log(userId);

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts({ userId });
      console.log(response.data);
      setData(response.data);
    };
    request();
  }, []);

  if (!data) return <p>Não existem posts a serem exibidos</p>;
  if (id) return <p>{data.title}</p>;
  return data.map((post, i) => <p key={i}>{post.title}</p>);
};

export default Posts;
