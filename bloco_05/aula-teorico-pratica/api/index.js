import axios from "axios";

const getPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);

    return response
}

getPosts()