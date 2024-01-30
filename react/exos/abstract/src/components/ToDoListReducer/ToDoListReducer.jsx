import { useReducer, useState } from "react";
import Todo from "../ToDoList/Todo";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CHECKED":
      let newToDoList = JSON.parse(JSON.stringify(state.toDoList)).map(
        (toDo) => {
          if (toDo.id === action.id) {
            console.log("here");
            toDo.isChecked = !toDo.isChecked;
          }
          return toDo;
        }
      );

      const newState = {
        ...state,
        toDoList: newToDoList,
      };

      return newState;

      break;

    case "ADD_TODO":
      // Logique pour ajouter une todo

      break;

    case "DELETE_TODO":
      // Logique pour supprimer une todo

      break;

    default:
      break;
  }
};
function ToDoListReducer() {
  const [state, dispatch] = useReducer(reducer, {
    toDoList: [
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
    ],
    appointments: ["XXX", "XXX", "XXX"],
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        {state.toDoList.map((oneTodo) => (
          <Todo
            key={oneTodo.id}
            oneTodo={oneTodo}
            handleInputClick={() => {
              dispatch({ type: "UPDATE_CHECKED", id: oneTodo.id });
            }}
          />
        ))}
      </div>

      <div>
        <form action="">
          <label htmlFor="newTodo"></label>
          <input name="newTodo" id="newTodo" type="text" />
          <input type="submit" value="Créer une nouvelle todo" />
        </form>
      </div>
    </div>
  );
}

export default ToDoListReducer;
