const useDragAndDrop = (elements, setElements) => {
  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);

    console.log(event.dataTransfer.getData("id"));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, groupId) => {
    console.log("Task drag over");

    console.log(event.dataTransfer.getData("id"));
    const id = event.dataTransfer.getData("id");
    const updatedTasks = elements.map((task) => {
      if (task.id === Number(id)) {
        console.log("task updated");
        task.groupId = groupId;
      }

      return task;
    });

    console.log(updatedTasks);

    setElements(updatedTasks);
  };

  return { onDragStart, onDragOver, onDrop };
};

export default useDragAndDrop;
