import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "app/redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CompNotfound from "app/pages/auth/notfound";
import CompLoading from "app/components/loading/auth";

// routes definition
import { GuestRoute, UserRoute, AdminRoute } from "./checker";
import { guestroutes, userroutes, adminroutes } from "./routes-list";

const Index = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<CompLoading />}>
        <Router>
          <Switch>
            {guestroutes.map((item, i) => {
              return <GuestRoute key={i} {...item} />;
            })}
            {userroutes.map((item, i) => {
              return <UserRoute key={i} {...item} />;
            })}
            {adminroutes.map((item, i) => {
              return <AdminRoute key={i} {...item} />;
            })}
            <Route component={CompNotfound} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};
export default Index;
