import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import StartScreen from "./StartScreen/StartScreen";
import HomeScreen from "./HomeScreen";
import ProductListScreen from "./ProductListScreen/ProductListScreen";
import CreateUser from "./CreateUser/CreateUser";


export default function DronezetaRoutes() {
    return (
      <div className="DronezetaRoutes">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/inicio' element={<StartScreen />}></Route>
            <Route path='/products' element={<ProductListScreen />}></Route>
            <Route path='/createUser' element={<CreateUser />}></Route>

            <Route path='*' element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )}
 