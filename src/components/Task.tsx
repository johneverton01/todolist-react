import { Check, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';

export interface TaskProps {
  id: string;
  title: string;
  isDone: boolean;
  toggleTaskDone: (id: string) => void;
  removeTask: (id: string) => void;
}

export function Task({ id, title, isDone, toggleTaskDone, removeTask }: TaskProps) {
  const [taskIsDone, setTaskIsDone] = useState(isDone);
  useEffect(() => {
    setTaskIsDone(isDone);
  },[isDone]);
  
  return (
    <div className="flex p-4 w-full align-top items-start justify-between max-w-[736px] gap-3 bg-gray-500 border border-gray-400 rounded-lg mb-3">
      <div className="flex items-start justify-center gap-2">
        <label className="cursor-pointer relative" htmlFor={id}>
          <input 
            className="checkbox appearance-none w-4 h-4 rounded-full border-blue-400 border-2 inline-flex mt-1 hover:bg-blue-500 hover:opacity-20 checked:bg-purple-500 checked:border-purple-500 checked:hover:bg-purple-400 checked:hover:border-purple-400 checked:hover:opacity-100" 
            type="checkbox" 
            id={id}
            checked={taskIsDone} 
            onChange={() => toggleTaskDone(id)}
          />
          <Check 
            size="0.75rem" 
            weight="fill" 
            className="absolute top-[6px] left-[2px] text-gray-100 opacity-0 checked-icon transition"
          />
        </label>
        <label 
          htmlFor={id} 
          className={
            `w-full max-w-[640px] break-words ${taskIsDone ? 'text-gray-300 line-through' : 'text-gray-200'}`
          }
        >
          {title}
        </label>
      </div>

      <button 
        className="text-gray-300 hover:bg-gray-400 p-1 rounded hover:text-red transition-colors duration-300"
        onClick={() => removeTask(id)}
      >
        <Trash />
      </button>
    </div>
  )
}