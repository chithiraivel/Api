import React, { useEffect, useState } from "react";

const TodosApi = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  },[]);
  const getTodos = () => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setTodos(json));

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //  .then((json) => setTodos(json));


    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
   .then((json) => setTodos(json));


    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  return (
    <div>
      {todos.map((data,index) => {
        return <ul> 
          <li><p key={index}>{data.title}</p>
          <h1></h1>
          <h2></h2>
          </li>
          </ul>
      })}
    </div>
  );
};

export default TodosApi;
