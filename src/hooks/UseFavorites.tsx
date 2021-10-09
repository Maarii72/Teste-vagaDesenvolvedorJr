import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../Services/api";
import {AlbumList, Favorites} from '../types';


interface FavoritesProviderProps{
    children: ReactNode;
}

interface FavoritesContextData{
    //searchMusic: AlbumList[];
    addAlbum: (albumId: number) => Promise<void>;
    removeAlbum: (albumId: number) => void;
    playAlbum: (albumId: number, preview: string) => void;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export function FavoritesProvider({children}: FavoritesProviderProps): JSX.Element{

const playAlbum = async (albumId: number, preview: string) =>{

}

const addAlbum = async (albumId: number) =>{

}

const removeAlbum = async (albumId: number) =>{
    
}


    return(
        <FavoritesContext.Provider
            value={{playAlbum, addAlbum,removeAlbum}}
        >
            {children}

        </FavoritesContext.Provider>
    );
}

export function useFavorites(): FavoritesContextData{
    const context =useContext(FavoritesContext);

    return context;
}