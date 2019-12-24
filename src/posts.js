import React from 'react';
import { List,
         Datagrid,
         TextField,
         ReferenceField,
         EditButton,
         Edit,
         SimpleForm,
         ReferenceInput,
         SelectInput,
         TextInput
       } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
