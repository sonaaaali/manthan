import Login from './components/Login';
import {Switch, Route, HashRouter} from 'react-router-dom';
import './App.css';
import UserSide from './components/UserSide';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/form'>
            <UserSide/>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
