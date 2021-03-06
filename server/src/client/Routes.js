import React from 'react';
import App from './App';
import Home from './pages/HomePage';
import UsersList from './pages/UsersListPage';
import AdminsList from './pages/AdminsListPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
   {
       ...App,
       routes:[
        {
            ...Home,
            path:'/',
           
            exact:true
        },
        {
            ...UsersList,
            path:'/users',
            
        },
        {
            ...AdminsList,
            path:'/admins'
        },
        {
            ...NotFoundPage
        }
       ]
   }
]


