import React from 'react'

const List = (props) => {
  const todoList = props.todoList;
  const search = props.search;
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <table border={2} style={{ borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px" }}>Task Name</th>
            <th style={{ padding: "8px" }}>Description</th>
            <th style={{ padding: "8px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoList.filter((el) => el.name.toUpperCase().includes(search.toUpperCase())).map((el) => (
            <tr style={{ backgroundColor: el.done ? "#32CD32" : "#FF0000" }}>
              <td style={{ padding: "8px" }}>{el.name}</td>
              <td style={{ padding: "8px" }}>{el.description}</td>
              <td style={{ padding: "8px" }}>{el.done ? "Done" : "Not Yet"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
