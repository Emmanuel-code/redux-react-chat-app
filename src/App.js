
import "./App.css";
import Login from './pages/login/Login'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
 
  const user = null
  
  return (
        <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <div className="app">
          {!user ? (
            <Login />
          ) : (
            <h1>
            Chat page
            </h1>
          )}
        </div>
      </Switch>
    </Router>
     
  );
}

export default App;
