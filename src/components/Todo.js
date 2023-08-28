import React from "react";
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditeTodoForm } from "./EditeTodoForm";

export const Todo = ({ task, toggleComplete, toggledelete, toggleEdite }) => {
    return (
        <table className="table table-hover">
            <tbody id="tbody">
                <tr>
                    <td>
                       <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p> 
                        {
                            task.isEditing ? <EditeTodoForm value={task.task}/> : null
                        }
                    </td>
                    <td className="tdRow">
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdite(task.id)} />
                        <FontAwesomeIcon icon={faTrash} onClick={() => toggledelete(task.id)} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}