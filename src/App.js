import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
// import NavBar from "./components/navigation";
// import LeftNavBar from "./components/left-side-nav";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Protected from "./layouts/Protected";

function App({ location }) {
  return (
    <div className="App">
      {/* {location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/logout" || (
          <>
            <LeftNavBar />
            <NavBar />
          </>
        )} */}

      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />

        <Route
          path="/"
          exact
          render={(props) => (
            <Protected>
              <Home {...props} />
            </Protected>
          )}
        />

        {/* Default PATH */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
