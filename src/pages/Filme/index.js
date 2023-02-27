import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './filme.css'
import  {toast} from 'react-toastify'
function Filme() {
    const { id } = useParams();
    const [filme, setFillmes] = useState({});
    const [loagin, setLoagin] = useState(true);
    const navegation = useNavigate();

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: "f45c2274be0445a551e61697637bd9f5",
                    language: "pt-BR",

                }
            }).then((response) => {
                setFillmes(response.data)
                setLoagin(false)
            }).catch(() => {
                //console.log("filme n existe")
                navegation("/", { replace: true });
                return
            })
        }
        loadFilmes();

        return () => {
            //console.log("component")
        }
    }, []);
    function salvarFilme() {
        const minhaLista = localStorage.getItem('@vicente');
     let filmeSalvo =JSON.parse(minhaLista) || [];
     const hasFilme= filmeSalvo.some((filmesSalvo)=>filmeSalvo.id=filme.id)

if(hasFilme){
   toast.error("esse filme já esta na sua lista")
}
filmeSalvo.push(filme);
localStorage.setItem("@vicente",JSON.stringify(filmeSalvo));
toast.success("Filme salvo com sucesso")
       
    }
    if (loagin) {
        return (
            <div className="loadgin">
                Acessando Filme {id}
            </div>
        )
    }
    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path} `} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <span>Avaliação: {filme.vote_average}/10</span>

            <div className="areButton">
                <button onClick={salvarFilme}>Salvar</button>
                <button><a target={"_blank"} href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
            </div>
        </div>
    )
}

export default Filme;
