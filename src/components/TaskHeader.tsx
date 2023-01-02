interface TaskHeaderProps {
  taskCounter: number;
  taskDoneCounter: number;
}

export function TaskHeader({taskCounter, taskDoneCounter}: TaskHeaderProps) {
  return (
    <header className="w-full flex justify-between max-w-[736px] mb-6">
      <div className="flex gap-2 items-center">
        <span className="text-blue-400 font-bold text-ms">
          Tarefas criadas 
        </span>
        <span className="text-gray-200 font-bold text-xs bg-gray-400 rounded-full px-2">
          {taskCounter}
        </span>
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-purple-400 font-bold text-ms">
          Concluidas 
        </span>
        <span className="text-gray-200 font-bold text-xs bg-gray-400 rounded-full px-2">
          {taskDoneCounter} de {taskCounter}
        </span>
      </div>
    </header>
  )
}