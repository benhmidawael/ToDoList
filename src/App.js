import React, { useState } from 'react'
import './App.css';
import List from './Component/List';
import AddTask from './Component/AddTask';
import Filtre from './Component/Filtre';



function App() {

  const [ToDoList, setToDoList] = useState([
    { name: "Work Out", description: "A physical activity designed to improve health and fitness by challenging the body through strength training, cardio, or both. It can include exercises like weightlifting, running, cycling, or yoga, and can be performed in a gym, at home, or outdoors.", done: false },
    { name: "Eating", description: "Eating is the act of consuming food to provide sustenance and nourishment for the body. It is a crucial aspect of maintaining physical health and wellbeing.", done: true },
    { name: "Watch a Movie", description: "Watching movies is a great way to escape reality and immerse yourself in a story. It's a form of entertainment that can bring laughter, tears, and excitement to any viewer.", done: false },
  ]);

  const addTask = (newtask) => {
    setToDoList([...ToDoList, newtask]);
  };

  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <header className="App-header">
      <h1>Serch</h1>
        <Filtre setSearch={setSearch}/>
        <h1>To Do List</h1>
        <List todoList={ToDoList} search={search}/>
        <h1>Add Task</h1>
        <AddTask addTask={addTask}/>
      </header>
    </div>
  );
}

export default App;
