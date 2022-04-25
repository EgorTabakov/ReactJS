import {Navigate, Outlet} from "react-router-dom";
import React from "react";

export const PublicRoute = ({authed}) => (
    !authed ? <Outlet/> : <Navigate to="/profile" replace />
);