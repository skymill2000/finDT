import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from './pages/NewsPage';


function App() {
  return (    
  <Router>
    <Switch>
      <Route path="/news" exact>
        <NewsPage/>
      </Route>
  </Switch>
</Router>)
}

export default App;
