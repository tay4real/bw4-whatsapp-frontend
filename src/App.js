import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Protected from "./layouts/Protected";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />

        <Route
          path="/"
          exact
          render={(props) => (
            // <Protected>
            //   <Home {...props} />
            // </Protected>
             <Home {...props} />
          )}
        />

        {/* Default PATH */}
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
