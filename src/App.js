import { Switch, Route } from "react-router-dom";
import Login from "./components/public/login/Login";
import Public from "./components/public/Public";
function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Public} />
      </Switch>
    </>
  );
}

export default App;
