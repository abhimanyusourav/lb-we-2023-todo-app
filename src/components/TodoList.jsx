import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [apiResponseData, setApiResponseData] = useState();
  const fetchTodos = async () => {
    const response = await axios.get(
      "https://lb-we-2023-66727-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json"
    );
    setApiResponseData(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = async (itemId) => {
    // delete todo
    axios.delete(
      "https://lb-we-2023-66727-default-rtdb.asia-southeast1.firebasedatabase.app/todo/" +
        itemId +
        ".json"
    );
    // fetch todos
    fetchTodos();
  };

  return (
    <div>
      {apiResponseData &&
        Object.keys(apiResponseData).map((key) => {
          const { task, description, priority, date } = apiResponseData[key];
          return (
            <div className={"todo-item " + priority} key={key}>
              <div className="todo-item-left">
                <h4>{task}</h4>
                <p>{description}</p>
              </div>
              <div className="todo-item-right">
                <p>{date}</p>
                <button onClick={() => deleteTodo(key)} className="delete-todo">❌</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
