import React from 'react';

import Home from './components/Home';
import UsersList from '../client/components/UsersList';


export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/users',
        component:UsersList
    }
]
