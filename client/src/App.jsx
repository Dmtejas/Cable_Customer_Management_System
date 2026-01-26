import Welcome from "./pages/Welcome"
import AddUser from "./pages/AddUser"
import {Routes, Route} from "react-router-dom"
import SearchUser from "./pages/SearchUser"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import EditUser from "./pages/EditUser"

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/search-user" element={<SearchUser/>}></Route>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/editUser" element={<EditUser />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default App
