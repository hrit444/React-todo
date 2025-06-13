import { createContext, useState } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {

  const [todo, setTodo] = useState([])
    
  return (
    <todocontext.Provider value={[todo, setTodo]}>
      {props.children}
    </todocontext.Provider>
  )
}

export default Wrapper