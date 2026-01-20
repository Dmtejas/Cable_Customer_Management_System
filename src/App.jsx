import Welcome from "./Welcome"
import AddUser from "./AddUser"
import {Routes, Route} from "react-router-dom"
import SearchUser from "./SearchUser"

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/search-user" element={<SearchUser/>}></Route>
        </Routes>
    </div>
  )
}

export default App
