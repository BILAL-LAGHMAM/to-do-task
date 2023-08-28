import React, { useState } from "react";
export const EditeTodoForm = ({editeTask, task}) => {
    const [value, SetValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault()
        editeTask(value,task.id)
        SetValue("")
    }
    return (
            <div className="input-group input-edit mb-5">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" id="card" className="form-control" onChange={(e) => SetValue(e.target.value)} value={value} placeholder="Task" aria-label="Username" />
                    <button type="submit" id="updateConfirm" className="btn btn-primary">Update</button>
                </form>
            </div>
    )
}