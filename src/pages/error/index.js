import { Link } from 'react-router-dom';
import './index.css'

function Erro() {
    return (
        <div className='notFond'>
            <h1>404</h1>
            <h3>Pagina não encontrda</h3>
          
            <Link to="/">Veja todos filmes</Link>
        </div>

    )
}
export default Erro;