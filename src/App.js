import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
       <Resource name="users" list={UserList} />
       <Resource name="posts" list={PostList} edit={PostEdit} />
    </Admin>
);

export default App;
