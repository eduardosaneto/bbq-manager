import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
