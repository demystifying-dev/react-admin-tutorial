import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';

/*
Guessed List:

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
*/

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
       <Resource name="users" list={UserList} />
       <Resource name="posts" list={ListGuesser} />
    </Admin>
);

export default App;
