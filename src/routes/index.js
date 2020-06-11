import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}explore`} component={asyncComponent(() => import('./MatchingPlace'))}/>
      <Route path={`${match.url}message`} component={asyncComponent(() => import('./ChatPlace'))}/>
      <Route path={`${match.url}profile`} component={asyncComponent(() => import('./ProfileManage'))}/>
    </Switch>
  </div>
);

export default App;
