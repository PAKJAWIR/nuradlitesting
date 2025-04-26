// App.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import RunningText from "./component/runningtext.jsx";
import AppRouting from "./config/AppRoutes.jsx";
import "./App.css";
import BackToTop from "./component/backtotop.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        {AppRouting.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
