import Create from "./Components/Create"
import Display from "./Components/Display"

const App = () => {

  return (
    <div className="bg-gray-800 h-screen w-screen justify-between text-white flex p-15">
      <Create/>
      <Display/>
    </div>
  )
}

export default App