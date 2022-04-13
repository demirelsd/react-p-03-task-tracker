import { useId, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import UseIds from "./components/UseIds";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  // DELETE TASK
  const deleteTask = (deletedTaskID) =>
    // console.log("deletetask",deletedTaskID);
    setTasks(tasks.filter((task) => task.id !== deletedTaskID));

  // ADD TASK
  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100 + 1);
    const addNewTask = { ...newTask, id };
    setTasks([...tasks, addNewTask]);
  };
  // const id = useId();
  // TOGGLE DONE
  const toggleDone = (toggleDoneId) => {
    // console.log("double click", toggleDoneId);
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const [showAddTask, setShowAddTask] = useState(false);
  // TOGGLE
  const toggleShow = () => {
    setShowAddTask(!showAddTask);
  };
  // DELETE ALL TASK

  const deleteAllTask = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        toggleShow={toggleShow}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
          deleteAllTask={deleteAllTask}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>No Tasks to Show</h3>
      )}
      
      {/* <UseIds/> */}
    </div>
  );
}

export default App;
