import api from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'
function Home() {
    const [filmes, setFillmes] = useState([]);
    const [loagin,setLoagin]=useState(true)
    useEffect(() => {
        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "f45c2274be0445a551e61697637bd9f5",
                    language: "pt-BR",
                    page: 1
                }
            });
            // console.log(response.data.results.slice(0,10))
            setFillmes(response.data.results.slice(0, 10))
            setLoagin(false)
        }
        loadFilmes();
    }, [])
    if(loagin){
        return(
            <div className="loagin">
                <h2>Carregando Filmes</h2>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="lista">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;
