import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
