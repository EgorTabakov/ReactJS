import {Navigate, Outlet} from "react-router-dom";
import React from "react";

export const PrivateRoute = ({authed}) => (
    authed ? <Outlet/> : <Navigate to="/" replace />
);