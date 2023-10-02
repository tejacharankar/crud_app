import "./App.css";
import CreateUser from "./pages/CreateUser/CreateUser";
import EditUser from "./pages/EditUser/EditUser";
import Dashboard from "./pages/Dashboard/Dashboard";

import {BrowserRouter, Routes, Route} from "react-router-dom"; 

function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/createUser" element={<CreateUser/>}/>
          <Route path="/editUser/:userId" element={<EditUser/>}/>
          <Route path="*" element={<h1>404 - Page Not Found!</h1>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
