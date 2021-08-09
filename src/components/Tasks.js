import React from 'react'

const Tasks = (props) =>{

    console.log(props.tasksCollection)



    return (

        <div className="row">

            <div className="col-lg-12">
                <ol>
                    {props.tasksCollection.map(task =>{
                        return <li  className="task" key={task.task_id} >

                                    {task.text} <span className="text-right" onClick={() => props.rmTask(task.task_id)}>X</span>

                                </li>
                    })}
                </ol>

            </div>

        </div>
    )
}

export default Tasks