import PropTypes from "prop-types";

const Task = ({ task, onDragStart }) => {
  const handleClick = (e) => {
    console.log("Task drag" + task.id);
    onDragStart(e, task.id);
  };

  return (
    <div
      className="task"
      onDragStart={(e) => {
        handleClick(e);
      }}
      draggable
    >
      {task.title}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onDragStart: PropTypes.func,
};

export default Task;
