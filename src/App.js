import Methods from "./methods";
import Nav from "./components/nav";
import Hooks from "./hooks";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Route  path="/" component={Nav} />  
    <Switch>
       <Route exact path="/" component={Methods} />
       <Route path="/hooks" component={Hooks} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
