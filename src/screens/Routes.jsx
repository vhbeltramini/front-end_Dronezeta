import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import StartScreen from "./StartScreen";
import HomeScreen from "./HomeScreen";

export default function DronezetaRoutes() {
    return (
      <div className="DronezetaRoutes">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/inicio' element={<StartScreen />}></Route>
            <Route path='*' element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )}
 