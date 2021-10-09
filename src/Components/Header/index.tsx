import { Container} from './styles'
import logo from '../../assets/images/logo.svg';
import lupa from '../../assets/images/lupa.svg';


//onst [musica, setMusica] = useState('');
function handlePesquisa(){
    console.log('funcionou a pesquisa')
}

const Header = (): JSX.Element => {

    return(
        <Container>
            <img  src={logo} id="logo" alt="logo" />
            <h1> Music WebApp </h1>
            <div>
                <button type="button">
                    Mais Tocadas
                </button>

                <button type="button">
                    Favoritas
                </button>

                <div id="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar Música..."/>
                    <img src={lupa} onClick={handlePesquisa} id="btnBusca" alt="Buscar"/>
                </div>
            </div>
        </Container>
    )
}

export default Header;