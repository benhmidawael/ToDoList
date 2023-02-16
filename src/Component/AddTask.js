import React, { useState } from 'react'
import './../App.css';


const AddTask = (props) => {
    const [newtask, setNewtask] = useState({ name: "", description: "", done: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({ name: newtask.name, description: newtask.description, done: false });
      };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }}>

            <form style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }} onSubmit={handleSubmit}>
            <input
                placeholder="Task Name"
                type="text"
                style={{ width: "50%", height: "30px", margin: "10px 0",textAlign:"center" }}
                onChange={(e) => (setNewtask({ ...newtask, name: e.target.value }))}
            />
            <input
                placeholder="Task Description"
                type="text"
                style={{ width: "50%", height: "30px", margin: "10px 0",textAlign:"center" }}
                onChange={(e) => (setNewtask({ ...newtask, description: e.target.value }))}
            />
            <button type="submit" className='btn-grad'>
                Add Task
            </button>
            </form>
        </div>

    )
}

export default AddTask



