import { BrowserRouter, Route, Switch,  Redirect } from "react-router-dom";
import "./App.css";

// importing  page components
import Home from "./pages/Home";
import Post from "./pages/Post";
import Retrieve from "./pages/Retrieve";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/retrieve">
            <Retrieve />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
