import axios from "axios";

const getPosts = async () => {
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/12");
        
        console.log(response.data);
        return response

    }catch(error){
        console.log(error.message);
    }
}
// getPosts()

const data = {
    userId: 10,
    title: "Meu titulo",
}

const setPost = async (data) => {
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
        
        console.log(response.data)
    }catch(error){
        console.log(error.response.status);
    }
}
// setPost(data)

const putPost = async (data, value) => {
    try{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${value}`, data)

        console.log(response.data)
    } catch(error) {
        console.log(error.response.status)
    }
}
// putPost(data,1)

const patchPost = async (data, value) => {
    try{
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${value}`, data)

        console.log(response.data)
    } catch (error) {
        console.log(error.response.status)
    }
}
// patchPost(data, 1)

const deletePost = async (value) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${value}`)

        console.log(response.data);
    } catch(error) {
        console.log(error.response.status);
    }
}
// deletePost(1)
