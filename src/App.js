import { Route, Switch } from "react-router-dom";

import HeroesPage from "./components/heroes/HeroesPage";
import VillainsPage from "./components/villains/VillainsPage";
import PageNotFound from "./PageNotFound";
import Header from "./components/Header";
import HeroManager from "./components/heroes/HeroManager";
import VillainManager from "./components/villains/VillainManager";
import FavoritesPage from "./components/Favorites/FavoritesPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={FavoritesPage} exact />
        <Route path="/heroes" component={HeroesPage} exact />
        <Route path="/villains" component={VillainsPage} />
        <Route path="/hero/:id" component={HeroManager} />
        <Route path="/hero" component={HeroManager} />
        <Route path="/villain/:id" component={VillainManager} />
        <Route path="/villain" component={VillainManager} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
