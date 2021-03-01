import { Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
