import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";
import StartScreen from "./StartScreen/StartScreen";
import HomeScreen from "./HomeScreen";
import ProductListScreen from "./ProductListScreen/ProductListScreen";


export default function DronezetaRoutes() {
    return (
      <div className="DronezetaRoutes">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/inicio' element={<StartScreen />}></Route>
            <Route path='/products' element={<ProductListScreen />}></Route>

            <Route path='*' element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )}
 