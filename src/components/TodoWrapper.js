import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import { EditeTodoForm } from "./EditeTodoForm";
uuidv4()
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    }
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const toggledelete = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleEdite = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editeTask = (task,id)=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing}:todo))
    }
    console.log(todos)
    return (
        <div className="container  mt-5">
            <h2>Tasks of Today</h2>
            <TodoForm addTodo={addTodo} />
            <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col" className="thAction">Action</th>
          </tr>
        </thead>
      </table>
            {todos.map((val, index) => (
                val.isEditing ? (
                    <EditeTodoForm editeTask={editeTask} task={val}/>
                ):(
                    <Todo task={val} key={index} toggleEdite={toggleEdite} toggleComplete={toggleComplete} toggledelete={toggledelete} />
                )
            ))}
        </div>
    )
}