import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Barbecues from "./pages/Barbecues";
import SelectedBarbecue from "./pages/SelectedBarbecue";
import AddBarbecue from "./pages/AddBarbecue";

import UserContext from "./context/UserContext";
import FoodContext from "./context/FoodContext";
import DrinkContext from "./context/DrinkContext";

function App() {
  const [user, setUser] = useState("");
  const [food, setFood] = useState(null);
  const [drink, setDrink] = useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <FoodContext.Provider value={{ food, setFood }}>
          <DrinkContext.Provider value={{ drink, setDrink }}>
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
                <Route path="/barbecues" exact>
                  <Barbecues />
                </Route>
                <Route path="/barbecues/:id" exact>
                  <SelectedBarbecue />
                </Route>
                <Route path="/add-barbecue" exact>
                  <AddBarbecue />
                </Route>
              </Switch>
            </Router>
          </DrinkContext.Provider>
        </FoodContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
