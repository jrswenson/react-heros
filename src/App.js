import { Switch, Route } from "react-router-dom";

import HeroesPage from "./components/heroes/HeroesPage";
import VillainsPage from "./components/villains/VillainsPage";
import PageNotFound from "./PageNotFound";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HeroesPage />
        </Route>
        <Route path="/heroes">
          <HeroesPage />
        </Route>
        <Route path="/villains">
          <VillainsPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
