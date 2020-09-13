import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './index.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App = () => {

    const [item, setItem] = useState();
    const [items, setItems] = useState([]);

    const inputEvent = (input) => {
        console.log(input.target.value);
        setItem(input.target.value);
    }

    const onSubmit = () => {
        setItems((oldItems) => {
            return [...oldItems, item]
        });
        setItem("");
    }

    const deleteItem = (id) => {
        console.log("deleted");
        setItems((oldItems) =>{
            return oldItems.filter((arrElement,index) =>{
                return index!== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <input type="text" placeholder="Add Items" onChange={inputEvent} value={item}></input>
                    <Button style={{minHeight:"50px", width:"50px",borderRadius:"50%", marginLeft: "10px",}}
                     className="btn" type="submit" onClick={onSubmit}><AddIcon style={{color:"#8566aa"}}/></Button>
                    <ol>
                        {items.map((itemVal, index) => {
                            return <ToDoList key={index}
                                id={index}
                                text={itemVal}
                                onSelect={deleteItem}>
                            </ToDoList>
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;