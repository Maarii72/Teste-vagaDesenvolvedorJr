import Header  from "./Components/Header";
import GlobalStyle  from "./styles/global";
import FavoritesList from "./pages/Favorites"
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import {FavoritesProvider} from './hooks/UseFavorites';


const App = (): JSX.Element => {

  return (
    <BrowserRouter>
      <FavoritesProvider>
        <GlobalStyle />
        <Header />
        <Routes />
        <FavoritesList />
      </FavoritesProvider>
    </BrowserRouter>
  
  );
}

export default App;

