import { Clipboard } from "./ImgSVG/Clipboard";

export function TaskEmpty() {
  return (
    <div className="w-full flex justify-center items-center flex-col border-t max-w-[736px] rounded-md border-gray-400">
          <div className="flex flex-col items-center justify-center gap-4 py-16">
            <Clipboard />
            <div className="text-gray-300 text-base">
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas            
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        </div>
  )
}