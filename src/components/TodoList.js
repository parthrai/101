import React, {useState} from 'react'


import Tasks from './Tasks'
import './TodoList.css'

const TodoList=()=>{


    const [list, updateList] =   useState([
            {task_id:"t1", text:"Go Home"},
            {task_id:"t2", text:"Eat Food"},
            {task_id:"t3", text:"Sleep"},
        ])


    const[newTask, updateNewTask] =   useState("")


    const storeTempText=event=>{

        updateNewTask(event.target.value)


    }

    //form submit
    const addNewTask=event=>{
        event.preventDefault();

        if(newTask === ""){
            alert("Please enter a valid task")
            return;
        }


        updateList(list.concat({task_id:Math.random().toString(), text:newTask}))
        updateNewTask("")

    }


    const removeTask=(task_id)=>{

            updateList(list.filter((t)=>{
                return t.task_id !== task_id
            }))

    }



    return(
        <div className="todo-row">


            <div className="header">
                <h1>This is my todo list</h1>

                <h3> You ({list.length}) pending tasks </h3>

                <form onSubmit={addNewTask}>
                    <input type="text" name="taskName" value={newTask} onChange={storeTempText} />
                    <input type="submit"/>
                </form>

            </div>

            <Tasks tasksCollection = {list}  rmTask={removeTask}  />


        </div>
    )
}

export default TodoList




