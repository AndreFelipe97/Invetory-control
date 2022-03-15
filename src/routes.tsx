/* eslint-disable import/no-anonymous-default-export */
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/signIn";
import List from "./pages/list";
import Register from "./pages/register";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/lista-produto" component={List} />
      <Route path="/cadastro-produto" component={Register} />
    </Switch>
  );
};
