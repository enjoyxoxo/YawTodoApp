import React from 'react'
import Checkbox from './Checkbox';

const Task = ({name, done, onToggle}) => {
  return (
   <div className='task'>
     <Checkbox Checked={done} onClick={() => onToggle(!done)} />
     {name}
   </div>
  );
}

export default Task;