import {Switch, Route} from 'react-router-dom'
import Favorites from './pages/Favorites';

import Played from './pages/Played';
//<Route path="/played" component={Played} />
//<Route path="/favorites" component={Favorites} />


const Routes = (): JSX.Element => {
    return (
    <Switch>
        <Route path="/" component={Played} />
        <Route path="/favorites" component={Favorites} />
        
    </Switch>
    );
};

export default Routes;
