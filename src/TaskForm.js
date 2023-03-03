import React, { useState } from 'react'

const TaskForm = () => {
  const [taskName, setTaskName] = useState();
  return (
   <form>
     <button>+</button>
     <input 
        type="text" 
        value={taskName} 
        placeholder="Your next task..."
        onChange={ev => setTaskName(ev.target.value)}
     />
  </form>
  );
}

export default TaskForm;