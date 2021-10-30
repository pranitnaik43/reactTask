import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Components/Nav';
import UsersView from './Components/UsersView';
import About from './Components/About';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';
import CreateUser from './Components/CreateUser';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
        <Switch>
          <Route path="/about" component={ About }></Route>
          <Route exact path="/users" component={ UsersView }></Route>
          <Route path="/users/view/:id" component={ UserProfile }></Route>
          <Route path="/users/edit/:id" component={ EditProfile }></Route>
          <Route path="/create" component={ CreateUser }></Route>
          <Route path="/">
            <Redirect to="/users"></Redirect>
          </Route>
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
