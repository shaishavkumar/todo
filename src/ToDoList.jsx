import React, { useState } from 'react';
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = (props) => {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }

    const removeItem = () =>{
        console.log("Item Removed");
    }

    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt} onDoubleClick={removeItem}>
                    <DeleteIcon className="deleteIcon">
                        {/* onClick={()=>{
                    props.onSelect(props.id)
                }} */}
                    </DeleteIcon>
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </>)
};

export default ToDoList;