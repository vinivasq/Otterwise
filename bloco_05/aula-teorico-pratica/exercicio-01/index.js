//consuma a lista de posts do https://jsonplaceholder.typicode.com/posts
//consulte o post de id 2
//cadastre um novo post enviando um objeto com os atributos title e body para o endpoint
//faça a edição de um post enviando novos atributos title e body para o post com id 1
//faça a exclusão do post com id 3

import axios from "axios";

const data = {
    title: "Aprendendo sobre APIS",
    body: "Vou dominar esse mundo"
}

const getPost = async (post) => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`) 

        console.log(response.data)
    } catch (error) {
        console.log(error.response.status);
    }
}
// getPost(2)

const setPost = async (data) => {
    try{
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data)

        console.log(response.data);
    } catch(error) {
        console.log(error.response.status);
    }
}
// setPost(data)

const patchPost = async (data, post) => {
    try{
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${post}`, data)
        console.log(response.data)
    } catch(error) {
        console.log(error.response.status);
    }
}
// patchPost(data, 1)

const deletePost = async (post) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post}`)

        console.log(response.data);
    } catch(error) {
        console.log(error.response.status);
    }
}
// deletePost(3)



