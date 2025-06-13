import { useState } from "react"
import Create from "./Components/Create"
import Display from "./Components/Display"

const App = () => {

  const [todoList, settodoList] = useState([])

  return (
    <div className="bg-gray-800 h-screen w-screen justify-between text-white flex p-15">
      <Create list={todoList} setList={settodoList}/>
      <Display list={todoList} setList={settodoList}/>
    </div>
  )
}

export default App