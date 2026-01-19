import Welcome from "./Welcome"
import AddUser from "./AddUser"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/addUser" element={<AddUser />} />
        </Routes>
    </div>
  )
}

export default App
