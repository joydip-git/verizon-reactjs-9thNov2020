import React from 'react'
import { Route } from 'react-router-dom';
import { productRoutes } from "./productRoutes";

const RouteGenerator = () => {
    const routes = productRoutes.map(r => {
        return <Route
            key={r.id} path={r.url} component={r.componentName} />
    })
    return routes;
}

export default RouteGenerator
