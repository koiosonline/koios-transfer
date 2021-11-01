import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Mintnonfungible } from "./pages/Mintnonfungible";
import { TransferFungibleRinkeby } from "./pages/TransferfungibleRinkeby";
import { TransferFungibleArbitrum } from "./pages/TransferFungibleDao";


export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/mintnonfungible" exact component={Mintnonfungible}></Route>
        <Route path="/transferfungibleminor" exact component={TransferFungibleRinkeby}></Route>
        <Route path="/transferfungibledao" exact component={TransferFungibleArbitrum}></Route>
      </Switch>
    </Router>
  )
}

