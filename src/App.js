import { Switch, Route } from "react-router-dom";

import HeroesPage from "./components/heroes/HeroesPage";
import VillainsPage from "./components/villains/VillainsPage";
import PageNotFound from "./PageNotFound";
import Header from "./components/Header";
import HeroForm from "./components/heroes/HeroForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HeroesPage} exact />
        <Route path="/heroes" component={HeroesPage} exact />
        <Route path="/villains" component={VillainsPage} />
        <Route path="/hero/:id" component={HeroForm} />
        <Route path="/hero" component={HeroForm} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
