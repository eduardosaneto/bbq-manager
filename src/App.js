import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ToastContainer autoClose={2000} closeOnClick={true} />
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
