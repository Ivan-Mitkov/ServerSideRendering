import React from 'react';

import Home from './components/Home';
import UsersList,{loadData} from '../client/components/UsersList';


export default [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        loadData,
        path:'/users',
        component:UsersList
    }
]
