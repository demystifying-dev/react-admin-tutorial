// Have ListGuesser suggest how to handle the relationship between Users and Posts
// https://marmelab.com/react-admin/Tutorial.html

/*

Guessed List for posts from the posts API endpoint:

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

Guessed List for users from prior commit (now used in this commit, and imported from ./users.js). Browser shows same list of users: 

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

*/

import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="posts" list={ListGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App;
