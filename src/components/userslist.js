import React from 'react'

const UsersList =(props)=>{


    return (

        <div>

            <ol>
                {props.users.map(user =>{
                    return <li  className="task" key={user.id} >
                        {user.name}
                    </li>
                })}
            </ol>



        </div>
    )
}

export default UsersList