// Selecting Columns (using the guessed list)
// https://marmelab.com/react-admin/Tutorial.html

/*

Guessed List from last commit (now used in this commit, and imported from ./users.js). Browser shows same list of users: 

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
  </List> );
);

*/

import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App;
