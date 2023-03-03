import React from 'react'
import Checkbox from './Checkbox';

const Task = () => {
  return (
   <div className='task'>
     <Checkbox defaultChecked={true} />
     Test task
   </div>
  );
}

export default Task;