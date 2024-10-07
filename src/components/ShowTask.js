const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((task) => task.id !== id);
    setTasklist(updatedTaskList);

    if (task.id === id) {
      setTask({});
    }
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length} </span>
        </div>

        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => {
          const { id, name, time } = task;
          return (
            <li key={id}>
              <p>
                <span className="name">{name}</span>
                <span className="time">{time}</span>
              </p>
              <i
                onClick={() => handleEdit(id)}
                className="bi bi-pencil-square"
              ></i>
              <i onClick={() => handleDelete(id)} className="bi bi-trash"></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ShowTask;
