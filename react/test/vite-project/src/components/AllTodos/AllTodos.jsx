import { PropTypes } from "prop-types";

const AllTodos = ({ children }) => {
  const todolist = [
    { todo: "Faire la vaisselle", checked: false },
    { todo: "Sortir le chien", checked: false },
    { todo: "Apprendre React", checked: true },
  ];

  const htmlList = todolist.map((oneTodo) => {
    return (
      <li
        className={oneTodo.checked === true ? "checked" : "unchecked"}
        key={oneTodo.todo}
      >
        {oneTodo.todo}
      </li>
    );
  });

  const todoUnchecked = todolist.map((oneTodo) => {
    return oneTodo.checked === false ? (
      <li key={oneTodo.todo}>{oneTodo.todo}</li>
    ) : null;
  });

  const todoChecked = todolist.map((oneTodo) => {
    return oneTodo.checked === true ? (
      <li key={oneTodo.todo}>{oneTodo.todo}</li>
    ) : null;
  });

  return (
    <>
      {children}
      <ul>{htmlList}</ul>
      <h3>Todo Checked</h3>
      {todoChecked}
      <h3>Todo Unchecked</h3>
      {todoUnchecked}
    </>
  );
};

AllTodos.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default AllTodos;
