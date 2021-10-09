import { FavoritesList } from "./styles";
import deezer from '../../assets/images/deezer.svg';
import pause from '../../assets/images/pause.png';
import play from '../../assets/images/play.png';
import heartbroken from '../../assets/images/heartbroken.png'

const Favorites =(): JSX.Element => {
    return(
        <FavoritesList>
            <ul>
            <li>
                <img src="capaAlbum" alt="capaalbum" />
                <span>Nome Da música</span>
                <strong>Cantor fulando de tal</strong>
                
                <p>Duração 03:00</p>
                <button type="button" id="txtmusica">
                    Música Completa na Deezer...   
                    <img src={deezer} alt="deezer" />
                </button>
                <div>
                    <img src={play} alt="play" />
                    <img src={pause} alt="pause" />
                
                    <button type="button" id="txtfavorites">
                        Remover Favoritos
                        <img src={heartbroken} alt="heartbroken" />
                    </button>
                
                </div>
            </li>
            </ul>

        </FavoritesList>
    );
};

export default Favorites;