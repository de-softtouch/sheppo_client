import { Switch, Route } from "react-router-dom";
import Login from "./components/public/login/Login";
import Public from "./components/public/Public";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Public} />
      </Switch>
      <ToastContainer theme="light" />
    </>
  );
}

export default App;
