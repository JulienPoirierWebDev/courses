import { useRef, useState } from "react";

const useTodo = (initialTodos) => {
  const inputRef = useRef(null);
  const [toDoList, setToDoList] = useState(initialTodos);

  const changeTodoChecked = (id) => {
    let newToDoList = toDoList.map((toDo) => {
      if (toDo.id === id) {
        toDo.isChecked = !toDo.isChecked;
      }
      return toDo;
    });

    setToDoList(newToDoList);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    let newToDoList = toDoList.map((todo) => todo);

    newToDoList.push({
      id: Date.now(),
      todo: inputRef.current.value,
      isChecked: false,
    });

    setToDoList(newToDoList);

    inputRef.current.value = "";
  };

  const handleDelete = (id) => {
    let newToDoList = toDoList.filter((toDo) => {
      console.log(toDo.id, id);
      console.log(toDo.id !== id);
      return toDo.id !== id;
    });
    console.log(newToDoList);
    setToDoList(newToDoList);
  };

  return [
    toDoList,
    changeTodoChecked,
    handleSubmitForm,
    handleDelete,
    inputRef,
  ];
};

export default useTodo;
