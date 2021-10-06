import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Components/Nav';
import UsersView from './Components/UsersView';
import { UsersContext } from './context';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <UsersContext.Provider value={{}}>
        <Switch>
          <Route path="/home" component={ UsersView }></Route>
          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </UsersContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;