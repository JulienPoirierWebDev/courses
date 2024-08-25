import PropTypes from "prop-types";
import Task from "./Task";
import styles from "./TaskColumn.module.css";

const TaskColumn = ({
  groupId,
  title,
  tasks,
  onDragStart,
  onDragOver,
  onDrop,
  loading,
  error,
}) => {
  return (
    <div
      className={styles.column}
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, groupId)}
    >
      <h2 className={styles.title}>{title}</h2>
      {loading || error ? (
        <span>{loading || error}</span>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDragStart={onDragStart} />
          ))}
        </ul>
      )}
    </div>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDragStart: PropTypes.func,
  loading: PropTypes.string,
  error: PropTypes.string,
  setTasks: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  groupId: PropTypes.number,
};

export default TaskColumn;
