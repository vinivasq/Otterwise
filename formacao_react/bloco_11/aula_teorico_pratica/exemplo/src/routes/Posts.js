import { Link } from "react-router-dom"
import { listAllPosts } from "../services/posts"
import { useEffect, useState } from "react"

const Posts = () => {
    const [data, setData] = useState("")

    useEffect(()=> {
        const request = async() => {
            const response = await listAllPosts()
            console.log(response.data);
            setData(JSON.stringify(response.data))
        }
        request()
    },[])
    return(
        <div>
            <p>Voce está em posts</p>
            <Link to="/">Voltar para Home</Link>
            <p>{data}</p>
        </div>
    )
}

export default Posts