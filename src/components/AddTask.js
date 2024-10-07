const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const trimmedName = task.name.trim();

      if (trimmedName === "") {
        alert("Task name cannot be Empty");
        return;
      }

      const updatedTasklist = tasklist.map((item) =>
        item.id === task.id
          ? {
              id: task.id,
              name: trimmedName,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
          : item
      );
      setTasklist(updatedTasklist);
      setTask({});
    } else {
      const date = new Date();
      const trimmedName = e.target.task.value.trim();
      if (trimmedName === "") return;

      const newTask = {
        id: date.getTime(),
        name: trimmedName,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
export default AddTask;
