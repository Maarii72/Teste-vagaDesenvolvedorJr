import { MusicList } from './styles';
import deezer from '../../assets/images/deezer.svg';
import pause from '../../assets/images/pause.png';
import play from '../../assets/images/play.png';
import heart from '../../assets/images/heart.png';
import {api} from '../../Services/api'
import { useEffect, useState } from 'react';
import { useFavorites } from '../../hooks/UseFavorites';

interface AlbumList{
    id: number;
    cover_medium: string; //imagem
    title: string; //nome da musica
    link: string; //link na deezer
    duration: number; // duração
    preview: string; // play
    name: string; // nome cantor

}

const Played = (): JSX.Element => {
const [album, setAlbum] = useState<AlbumList[]>([]);
const {addAlbum, playAlbum} = useFavorites();


    //carregamento dos produtos
    useEffect(() => {
        async function loadAlbum() {
            const response = await api.get<AlbumList[]>('album');

            const data = response.data.map(album =>({
                ...album,
            }))
            setAlbum(data);
        }

        loadAlbum();
    }, []);


        function handleAddAlbum(id: number){
            addAlbum(id);
        }

        function handlePlayAlbum(id: number, preview:string){
            playAlbum(id, preview);
        }

    return(
        <MusicList>

            {album.map(album => (
            <li key={album.id}>
                <img src={album.cover_medium} alt="capaalbum" />
                <span>{album.title}</span>
                <strong>{album.name}</strong>
                
                <p>Duração {album.duration}</p>
            <button type="button" id="txtmusica">
                Música Completa na Deezer...   
                <img src={deezer} alt="deezer" />
            </button>
            <div>
                <img src={play} onClick= {() => handlePlayAlbum(album.id, album.preview)} alt="play" />
                <img src={pause} alt="pause" />
                <img src={heart} onClick= {() => handleAddAlbum(album.id)} alt="heart" />
            </div>
            </li>

            ))}
        </MusicList>

    );

}

export default Played;