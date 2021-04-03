import Home from "./pages/Home";
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
      </Switch>
    </main> 
  );
}

export default App;
