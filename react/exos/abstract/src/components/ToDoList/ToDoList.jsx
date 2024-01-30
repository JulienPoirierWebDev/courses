import { useState, useRef, useEffect } from "react";
import Todo from "./Todo";

import useTodo from "../../hooks/useTodo";

function ToDoList() {
  const [
    toDoList,
    changeTodoChecked,
    handleSubmitForm,
    handleDelete,
    inputRef,
  ] = useTodo([
    {
      id: 1,
      todo: "Sortir les poubelles",
      isChecked: false,
    },
    {
      id: 2,
      todo: "Réviser React",
      isChecked: true,
    },
    {
      id: 3,
      todo: "Trouver des idées des projets pour devenir riche.",
      isChecked: false,
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderTop: "30px solid var(--color2)",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <div>
          <h2>Choses a faire</h2>

          {toDoList
            .filter((todo) => todo.isChecked === false)
            .map((oneTodo) => (
              <Todo
                key={oneTodo.id}
                oneTodo={oneTodo}
                changeTodoChecked={changeTodoChecked}
                handleDelete={handleDelete}
              />
            ))}
        </div>

        <div>
          <h2>Choses terminées</h2>
          {toDoList
            .filter((todo) => todo.isChecked === true)
            .map((oneTodo) => {
              return (
                <Todo
                  key={oneTodo.id}
                  oneTodo={oneTodo}
                  changeTodoChecked={changeTodoChecked}
                  handleDelete={handleDelete}
                />
              );
            })}
        </div>
      </div>

      <div style={{ margin: "50px" }}>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmitForm(e);
          }}
        >
          <label htmlFor="newTodo"></label>
          <input ref={inputRef} name="newTodo" id="newTodo" type="text" />
          <input type="submit" value="Créer une nouvelle todo" />
        </form>
      </div>
    </div>
  );
}

export default ToDoList;
