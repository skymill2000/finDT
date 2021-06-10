import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from './pages/NewsPage';
import MainPage from './pages/MainPage';


function App() {
  return (    
  <Router>
    <Switch>
      <Route path="/news" exact>
        <NewsPage/>
      </Route>
      <Route path="/main" exact>
        <MainPage/>
      </Route>
  </Switch>
</Router>)
}

export default App;
