import { useEffect } from "react";
// import { listAllUsers } from "./services/users.js";
import { listAllPosts } from "./services/posts";

function App() {
  useEffect(() => {
    const request = async () => {
      const response = await listAllPosts();
      console.log(response.data);
    };
    request();
  }, []);

  return <p>teste</p>;
}

export default App;
