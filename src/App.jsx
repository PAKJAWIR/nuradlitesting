// App.jsx
import { CursorProvider } from "./context/cursorContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import RunningText from "./component/runningtext.jsx";
import AppRouting from "./config/AppRoutes.jsx";
import "./App.css";
import BackToTop from "./component/backtotop.jsx";
import CustomCursor from "./component/customcursor.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CursorProvider>
        <CustomCursor />
        <Navbar />
        <BackToTop />
        <Routes>
          {AppRouting.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </CursorProvider>
    </div>
  );
}

export default App;
