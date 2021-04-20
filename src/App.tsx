import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mintnonfungible } from "./pages/Mintnonfungible";
import { Transferfungible } from "./pages/Transferfungible";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mintnonfungible" exact component={Mintnonfungible}></Route>
        <Route path="/transferfungible" exact component={Transferfungible}></Route>
      </Switch>
    </Router>
  )
}

