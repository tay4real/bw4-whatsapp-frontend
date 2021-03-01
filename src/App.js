import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import NavBar from "./components/navigation";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
