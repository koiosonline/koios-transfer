import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mintnonfungible } from "./pages/Mintnonfungible";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mintnonfungible" exact component={Mintnonfungible}></Route>
      </Switch>
    </Router>
  )
}

