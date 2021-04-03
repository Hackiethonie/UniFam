import Home from "./pages/Home";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist"
import Navbar from "./components/Navbar";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/playlist' component={Playlist} />
      </Switch>

    
    </main>
  );
}

export default App;
