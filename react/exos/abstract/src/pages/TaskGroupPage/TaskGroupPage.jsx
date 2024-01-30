import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  updateCompleted,
  addNewTask,
  removeTask,
  updateTask,
} from "../../store/slices/taskGroupSlice";
import NavBar from "../../components/NabBar/NavBar";

function Task({ task, actualTaskModif, setActualTaskModif }) {
  const dispatch = useDispatch();
  const newTitleRef = useRef(null);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (actualTaskModif !== task.id) {
      setShowForm(false);
    }
  }, [actualTaskModif]);

  return (
    <>
      <NavBar />
      <div
        style={{
          margin: "20px",
          padding: "20px",
          border: "2px solid black",
        }}
        key={task.id}
      >
        <p>
          {task.title}{" "}
          <span
            style={{
              fontSize: "0.8rem",
              padding: "5px",
              border: "1px solid black",
              marginLeft: "10px",
            }}
            onClick={(event) => {
              const oldValueShowForm = showForm;
              setShowForm(!showForm);
              console.log(!oldValueShowForm);
              if (!oldValueShowForm) {
                setActualTaskModif(task.id);
              } else {
                setActualTaskModif(null);
              }
            }}
          >
            {showForm ? "Arreter de modifier" : "Modifier"}
          </span>
        </p>
        <p>{task.completed ? "C'est fait !" : "C'est pas fait"}</p>
        <button
          onClick={() => {
            console.log("Je veux modifier un élément", task.id);

            dispatch(updateCompleted({ id: task.id }));
          }}
        >
          Changer l'état !
        </button>
        <button
          onClick={() => {
            console.log("Je veux supprimer un élément", task.id);
            dispatch(removeTask({ id: task.id }));
          }}
        >
          Supprimer la tâche
        </button>
        {showForm ? (
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(
                updateTask({ id: task.id, title: newTitleRef.current.value })
              );
              newTitleRef.current.value = "";
              setShowForm(!showForm);
            }}
          >
            <label htmlFor={`newTitle-${task.id}`}>Nouveau titre</label>
            <input
              ref={newTitleRef}
              type="text"
              name={`newTitle-${task.id}`}
              id={`newTitle-${task.id}`}
            />
            <input type="submit" value="Mettre a jour le titre" />
          </form>
        ) : null}
      </div>
    </>
  );
}

function TaskGroupPage() {
  const tasks = useSelector((state) => state.taskGroup.tasks);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [actualTaskModif, setActualTaskModif] = useState(null);

  return (
    <>
      <h1>Mes tâches</h1>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            actualTaskModif={actualTaskModif}
            setActualTaskModif={(actualTaskModif, setActualTaskModif)}
          />
        ))}
      </div>

      <div>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            /*formData = new FormData(event.target);
            const taskTitle = formData.get("newTask");
            */

            dispatch(addNewTask({ title: inputRef.current.value }));
            inputRef.current.value = "";
          }}
        >
          <input
            ref={inputRef}
            type="text"
            name="newTask"
            id="newTask"
            required
          />
          <label htmlFor="newTask"></label>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default TaskGroupPage;
