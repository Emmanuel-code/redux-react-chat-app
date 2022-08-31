
import "./App.css";
import Login from './pages/login/Login'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ChatMessages from "./pages/messagePage/ChatMessages";
import {  useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  // const user = "Emmas";
  const user = useSelector(selectUser);
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <div className="app">
          {!user ? (
            <Login />
          ) : (
            <div className="main">
               
                <ChatMessages />
            </div>
          )}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
