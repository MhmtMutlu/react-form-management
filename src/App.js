import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormList from "./components/FormList";
import FormTemplate from "./components/FormTemplate";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FormList />
        </Route>
        <Route exact path="/forms/:formname">
          <FormTemplate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
