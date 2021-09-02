import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { getAuth, resetAuth } from "app/utils/auth";

const GuestRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isAuth = getAuth();
  if (isAuth === "not-authenticated") {
    return (
      <Route
        {...rest}
        render={(componentProps) => <Component {...componentProps} />}
      />
    );
  } else if (isAuth === "admin") {
    return <Redirect to="/admin/welcome" />;
  } else if (isAuth === "user") {
    return <Redirect to="/" />;
  }
};
const UserRoute = ({ component: Component, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      render={(componentProps) => <Component {...componentProps} />}
    />
  );
};
const AdminRoute = ({ component: Component, ...rest }: RouteProps) => {
  // const isAuth = getAuth() === "admin";
  const isAuth = true;
  if (!isAuth) resetAuth();
  console.log("auth-code", getAuth());

  if (isAuth) {
    return (
      <Route
        {...rest}
        render={(componentProps) => <Component {...componentProps} />}
      />
    );
  } else {
    return <Redirect to="/ga-login" />;
  }
};

export { AdminRoute, GuestRoute, UserRoute };
