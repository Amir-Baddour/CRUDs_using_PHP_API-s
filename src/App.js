import "./App.css";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <h1>CRUD Using PHP API's</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>
      
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
