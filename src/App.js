// As a first step in making the Edit button functional, use the EditGuesser with the PostList component 
// https://marmelab.com/react-admin/Tutorial.html

/*

PostList EditGuesser recommendations:

Guessed Edit:

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
)

*/

import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts'
import { UserList } from './users'
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={EditGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App;
