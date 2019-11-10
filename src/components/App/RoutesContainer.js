import React from 'react';
import {Switch} from "react-router-dom";
import {routes} from "../../routing/routes";
import {Route} from "react-router";
import NotFound from "../NotFound";

export default () => {
  return (
    <Switch>
      {routes.map((route) => {
        return <Route key={route.path}
                      path={route.path}
                      strict={route.strict}
                      exact={route.exact}
                      component={route.component}/>
      })}
      <Route component={NotFound}/>
    </Switch>
  );
}