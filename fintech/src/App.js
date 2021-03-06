import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsPage from './pages/NewsPage';
import MainPage from './pages/MainPage';
import AuthResultPage from './pages/AuthResultPage';
import ListPage from './pages/ListPage';

import BalancePage from './pages/BalancePage';

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
      <Route path="/authResult" exact>
        <AuthResultPage/>
      </Route>
      <Route path="/list" exact>
        <ListPage/>
      </Route>
      <Route path="/balance" exact>
        <BalancePage></BalancePage>
      </Route>
  </Switch>
</Router>)
}

export default App;
