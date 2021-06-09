import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstExample from './components/FirstExample';
import UserList from './components/UserList';


function App() {
  return (    
  <Router>
    <Switch>
      <Route path="/test" exact>
        <FirstExample></FirstExample>
      </Route>
      <Route path="/list" exact>
        <UserList></UserList>
      </Route>
  </Switch>
</Router>)
}

export default App;
