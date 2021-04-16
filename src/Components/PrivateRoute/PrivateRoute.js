import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userInfo] = useContext(UserContext);
    console.log("🚀 ~ file: PrivateRoute.js ~ line 7 ~ PrivateRoute ~ userInfo", userInfo)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        userInfo.isSigned ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;