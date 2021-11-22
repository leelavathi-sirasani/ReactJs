import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Posts from "./components/posts"
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';
import Users from './components/users';




import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Register />
      <Switch>
        
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;