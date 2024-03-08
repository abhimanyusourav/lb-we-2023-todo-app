import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoList = ({apiResponseData, fetchTodos, deleteTodo}) => {


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
