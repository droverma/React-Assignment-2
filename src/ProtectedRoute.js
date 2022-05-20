import React from 'react';
import {Route, Redirect} from 'react-router-dom';
const ProtectedRoute = ({component: Component, user, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem ('token')) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <React.Fragment>
              <Redirect
                to={{
                  pathname: '/',
                  state: {
                    from: props.location,
                  },
                }}
              />
            </React.Fragment>
          );
        }
      }}
    />
  );
};
export default ProtectedRoute;