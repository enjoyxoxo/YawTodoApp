import React from 'react'
import Checkbox from './Checkbox';

const Task = ({name, done, onToggle}) => {
  return (
   <div className={'task ' + (done ? 'done' : '')}>
     <Checkbox Checked={done} onClick={() => onToggle(!done)} />
     <span>{name}</span>
   </div>
  );
}

export default Task;