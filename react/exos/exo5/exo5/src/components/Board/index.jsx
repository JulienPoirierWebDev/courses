import { useEffect, useState } from "react";
import TaskColumn from "../TaskColumn";
import styles from "./Board.module.css";
import useDragAndDrop from "../../hooks/useDragAndDrop";

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const groups = [
    { id: 1, title: "To do" },
    { id: 2, title: "In progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  useEffect(() => {
    try {
      setLoading("Loading...");
      setTimeout(() => {
        let newTasks = [
          {
            id: 1,
            title: "Faire la vaisselle",
            groupId: 1,
          },
          {
            id: 2,
            title: "Faire le ménage",
            groupId: 1,
          },
          {
            id: 3,
            title: "Sortir le chien",
            groupId: 2,
          },
          {
            id: 4,
            title: "Faire les courses",
            groupId: 3,
          },
          {
            id: 5,
            title: "Faire la cuisine",
            groupId: 4,
          },
        ];

        setTasks(newTasks);
        setLoading(null);
      }, 1500);
    } catch (error) {
      setError("There was an error");
    }
  }, []);

  const { onDragStart, onDragOver, onDrop } = useDragAndDrop(tasks, setTasks);

  return (
    <div className={styles.board}>
      {groups.map((group) => (
        <TaskColumn
          key={group.id}
          groupId={group.id}
          setTasks={setTasks}
          title={group.title}
          loading={loading}
          error={error}
          tasks={tasks.filter((task) => task.groupId === group.id)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
};

export default Board;
