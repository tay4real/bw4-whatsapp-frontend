import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import NavBar from "./components/navigation";
import LeftNavBar from "./components/left-side-nav";

function App() {
  return (
    <div className="App">
      <LeftNavBar />
      <NavBar />
      <Switch>
        <div id="main-section">
          <Route path="/" exact component={Home} />
        </div>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
