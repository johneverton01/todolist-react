import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Logo } from "./ImgSVG/Logo"
import { TaskInput } from './TaskInput';

import { Task } from './Task';
import { TaskEmpty } from './TaskEmpty';
import { TaskHeader } from './TaskHeader';
import { TaskProps } from './Task';

export type Tasks = Omit<TaskProps, 'toggleTaskDone' | 'removeTask'> 

export function TaskList() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [countTaskDone, setCountTaskDone] = useState(0);

  const handleAddTask = (newTaskTitle: string) => {
    const dataTask: Tasks = {
      id: uuidv4(),
      title: newTaskTitle,
      isDone: false,
    };
    setTasks([...tasks, dataTask]);
  }
 
  const handleToggleTaskDone = (taskId: string, isDone: boolean) => {
    const newTaskList = tasks.filter(task => {
      if (task.id === taskId) {
        task.isDone = !isDone;
      }
      return task
    });
    setTasks(newTaskList);
    changeTotalTaskDone(taskId);    
  } 

  const handleRemoveTask = (taskId: string) => {
     const newTaskList = tasks.filter(task => task.id !== taskId);
     setTasks(newTaskList);
  }

  const changeTotalTaskDone = (taskId: string) => {
    setCountTaskDone(tasks.reduce((acc, task) => {
      if (task.id === taskId) {
        if (task.isDone === true) {
          acc = countTaskDone + 1;
        } else {
          acc = countTaskDone - 1;
        }
      }
      return acc;
    }, countTaskDone));
  }

  return (
    <>
    <header className="bg-gray-700 h-[200px] flex justify-center items-center">
        <Logo />
      </header>
      <main className="w-full flex justify-center">
          <TaskInput addTask={handleAddTask}/>
      </main>
    <section className="w-full flex justify-center items-center flex-col mt-16">
        <TaskHeader taskCounter={ tasks.length } taskDoneCounter={countTaskDone}/>
        {tasks.length === 0 ? 
          <TaskEmpty/> 
          : 
          (tasks.map(task => (
            <Task 
              key={task.id} 
              id={task.id} 
              isDone={task.isDone} 
              title={task.title}
              toggleTaskDone={() => handleToggleTaskDone(task.id, task.isDone)} 
              removeTask={() => handleRemoveTask(task.id)} 
            />
          )))
        }
      </section>
    </>
  )
}