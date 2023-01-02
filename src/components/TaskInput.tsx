import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface TaskInputProps {
  addTask: (task: string) => void;
}

export function TaskInput ({ addTask }: TaskInputProps) {
  const [ task, setTask ] = useState('');

  const handleAddNewTask = (event: FormEvent) => {
    event.preventDefault();
    if(task.trim().length > 0) {
      addTask(task);
      setTask('');
    }
  }
  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }  
  
  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setTask(event.target.value);
  }

  return (
      <form 
        className="w-full flex items-center max-w-[736px] relative -top-7 gap-2"
        onSubmit={handleAddNewTask}
      >
        <input 
          className="w-full max-w-[638px] p-4 border border-gray-700 bg-gray-500 rounded-lg focus:ring ring-blue-400 outline-none text-gray-200 placeholder:text-gray-300" 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit" 
          className="p-4 flex gap-2 bg-blue-500 text-gray-100 justify-center items-center rounded-lg hover:bg-blue-400 transition-colors duration-300"
        >
          Criar
          <PlusCircle />
        </button>
      </form>
  )
}