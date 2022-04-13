import { useState } from "react";

const AddTask = ({addTask}) => {
    // const [text, setText] = useState("");
    // const [day, setDay] = useState("");
    const [formData, setFormData] = useState({
        text:"",
        day:""
    });
    
    const  handleFormData = (e)=>{     
    setFormData({...formData, [e.target.name]: e.target.value})
  }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask({...formData, isDone: false});
        setFormData({
            text:"",
            day:""   })
    }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          onChange={handleFormData}
          value ={formData.text}
          
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          onChange={handleFormData}
          value ={formData.day}
          
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
