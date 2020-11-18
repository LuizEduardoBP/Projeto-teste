import { Home } from "./Pages/Home";
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ListPage } from "./Pages/ListPage";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/lista">
          <ListPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
