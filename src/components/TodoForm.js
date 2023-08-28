import React, { useState } from "react";
export const TodoForm = ({addTodo}) => {
    const [value, SetValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault()
        addTodo(value)
        SetValue("")
    }
    return (
            <div className="input-group mb-5">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" id="card" className="form-control" onChange={(e) => SetValue(e.target.value)} value={value} placeholder="Task" aria-label="Username" />
                   <button type="submit" id="updateConfirm" className="btn btn-primary">Add</button>
                </form>
            </div>
    )
}