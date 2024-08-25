import React from "react";

function Todo({ oneTodo, handleInputClick, handleDelete }) {
  return (
    <div style={{ padding: "20px" }}>
      <p>{oneTodo.todo}</p>
      <p>Status : {oneTodo.isChecked ? "Terminé" : "A faire"}</p>
      <input
        type="checkbox"
        name={`todo-${oneTodo.id}`}
        id={`todo-${oneTodo.id}`}
        defaultChecked={oneTodo.isChecked ? true : false}
        onChange={(event) => {
          handleInputClick(oneTodo.id);
        }}
      />
      <div>
        <button
          onClick={() => {
            handleDelete(oneTodo.id);
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Todo;
