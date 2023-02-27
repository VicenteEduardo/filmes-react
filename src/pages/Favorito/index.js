import './favorito.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Favorito() {
    const [filme, setFilme] = useState([]);
    useEffect(() => {
        const minhaLista = localStorage.getItem("@vicente");
        setFilme(JSON.parse(minhaLista || []))

    }, []);
    function excluir(id) {
        let filtro = filme.filter((item) => {
            return (item.id !== id)
        });
        setFilme(filtro);
        localStorage.setItem("@vicente", JSON.stringify(filtro))
    }
    return (
        <div className='meuFilme'>
            {filme.length === 0 && <span>Voçê não tem nenhum filme salvo</span>}
            <ul>
                {filme.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Detalhes</Link>
                                <button onClick={() => excluir(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Favorito