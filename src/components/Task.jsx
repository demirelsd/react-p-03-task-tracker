import { FaTimes } from "react-icons/fa";


const Task = ({text, day, isDone, id, deleteTask, toggleDone}) => {
    //  console.log(isDone);
    
  return (
    <div className={`task ${isDone ? "done" : ""}`} onDoubleClick={()=>toggleDone(id)} >
        <h3>{text} 
        <FaTimes 
        onClick={()=>deleteTask(id)} 
        style={{ color: "red", cursor: "pointer" }}/>
        </h3>
        <div>{day}</div>
        
    </div>
  )
}

export default Task