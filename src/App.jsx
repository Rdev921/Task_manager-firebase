import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProtectedRoute from "./protectedRoute/ProtectedRoute"
import AddProduct from "./pages/addProduct/AddProduct"
import UpdateProduct from "./pages/updateProduct/UpdateProduct"
import MyState from "./context/data/myState"

function App() {

  return (
<MyState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/addproduct" element={<AddProduct/>}></Route>
        <Route path="/updateproduct" element={<UpdateProduct/>}></Route>

      </Routes>
    </BrowserRouter>
    </MyState>
  )
}

export default App
