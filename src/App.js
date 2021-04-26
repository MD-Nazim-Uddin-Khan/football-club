import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import CartDetail from "./components/CartDetail/CartDetail";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
        {/* <BackgroundImage/> */}

      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
              <Home/>
          </Route>

          <Route path="/cart/:dynamic">
            <CartDetail/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
