/* eslint-disable import/no-anonymous-default-export */
import { Switch, Route } from "react-router-dom";

import List from "./pages/list";
import Register from "./pages/register";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/cadastro-produto" component={Register} />
    </Switch>
  );
};
