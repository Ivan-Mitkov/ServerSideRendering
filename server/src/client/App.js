import React from 'react';
import {renderRoutes} from 'react-router-config'

const App = ({route}) => {
    return (
        <div>
            App is Here
            {renderRoutes(route.routes)}
        </div>
    )
}

export default {component:App}
