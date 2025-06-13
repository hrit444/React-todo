import { RiCloseLine } from "@remixicon/react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const Display = () => {

  const [todo, setTodo] = useContext(todocontext)
  
  const DeleteHandler = (id) => {
    setTodo(todo.filter((todos) => todos.id != id));
    toast.error("Todo deleted!");
  };

  console.log(todo);
  

  const CompleteHandler = (id) => {

    let copy = [...todo];
    var index;

    copy.forEach((elem, idx) => {
      if(elem.id === id){
        elem.isCompleted = !elem.isCompleted;
        elem.isCompleted == true ? toast.success("Task completed!") : toast.info("Task uncompleted!");
        index = idx;
      }
    });
    copy.push(copy[index]);
    copy.splice(index,1);
    setTodo(copy)
  }

  const renderTodos = todo.map((elem) => {
    return (
      <li
        key={elem.id}
        className= {
          `${!elem.isCompleted ? "no-underline" : "line-through opacity-75"}  bg-gray-800 text-[2.5vw] font-thin p-2 px-4 rounded-xl flex items-center justify-between mb-4`
        }
      >
        <div className="flex items-center gap-4">
          <button onClick={() => CompleteHandler(elem.id)} className="done bg-transparent border-1 h-[1.2vw] w-[1.2vw] rounded-full"></button>
          {elem.title}
        </div>
        
        <button onClick={() => DeleteHandler(elem.id)}>
          <RiCloseLine
            size={40}
            color="#999"
          />
        </button>
      </li>
    );
  });

  return (
    <div className="w-[40%] m-10 flex flex-col gap-2">
      <h1 className="mb-10 text-[5vw] leading-[1] font-thin">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <div 
        className = {
          todo.length == 0 
          ? "flex justify-center bg-[#44536b] rounded-xl h-[40vw] items-center w-full" 
          : "w-full flex flex-col bg-[#44536b] rounded-xl h-[40vw] p-5 overflow-auto"}>
        {todo.length == 0 ? <h4 className="text-center text-[#8F949C] text-[2vw] font-thin">You've caught up</h4> : null}
        <ol className="bg-gray">{renderTodos}</ol>
      </div>
    </div>
  );
};

export default Display;
