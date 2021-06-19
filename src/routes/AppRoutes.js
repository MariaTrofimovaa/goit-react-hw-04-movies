import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const AppRoutes = ({ routes = [] }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
