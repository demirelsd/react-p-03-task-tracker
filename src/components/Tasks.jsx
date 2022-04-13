import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone, deleteAllTask }) => {
  // console.log(deleteTask);
  return (
    <div>
      {tasks.map((task, i) => (
        <div key={i}>
          <Task {...task} deleteTask={deleteTask} toggleDone={toggleDone} />
        </div>
      ))}
      <div className="header">
        <button
          className="btn "
          style={{ backgroundColor: "red" }}
          onClick={deleteAllTask}
        >
          Delete All Task List
        </button>
      </div>
    </div>
  );
};

export default Tasks;
