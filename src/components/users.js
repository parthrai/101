import React from 'react'
import { useParams } from 'react-router';


import UsersList from './userslist'

const Users = (props) =>{

    const USERS = [
        {
            id:'u1',
            name:'John Doe',
            books:3
        },
        {
            id:'u2',
            name:'Jane Smith',
            books:4
        }
    ]

    let {id} = useParams();

    return (
        <div>
            <h1>Users</h1>

            <h2>{id}</h2>

            <UsersList users={USERS}/>


        </div>
    )
}

export default Users