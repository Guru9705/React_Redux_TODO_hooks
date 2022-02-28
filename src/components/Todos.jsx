import React from "react";
import { useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import Todo from "./Todo";
export default function Todos() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todos</h1>
      <TodoInput />
      {todos !== undefined
        ? todos.map((item) => (
            <div key={item.id}>
              <Todo todo={item} />
            </div>
          ))
        : ""}
    </div>
  );
}
