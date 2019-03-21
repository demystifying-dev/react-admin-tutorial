// Mapping API Endpoints With Resources
// https://marmelab.com/react-admin/Tutorial.html
//

/*

This code guesses an appropriate Datagrid for the Resource, and writes it to console:

Guessed List: 

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
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="users" list={ListGuesser} />
  </Admin>
)

export default App;
