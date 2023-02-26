import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            <p>Voce está na Home</p>
            <Link  to="/posts">Ir para a pagina de posts</Link>
        </div>
    )
}

export default Home