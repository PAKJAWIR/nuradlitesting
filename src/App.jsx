// App.jsx
import { CursorProvider } from "./context/cursorContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import RunningText from "./component/runningtext.jsx";
import AppRouting from "./config/AppRoutes.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import BackToTop from "./component/backtotop.jsx";
import CustomCursor from "./component/customcursor.jsx";
import ScrollToTop from "./component/scrolltotop.jsx";
import Preloader from "./component/preloader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    document.body.classList.remove("overflow-hidden");
  };

  if (isLoading) return <Preloader onComplete={handlePreloaderComplete} />;

  return (
    <div className="flex flex-col min-h-screen">
      <CursorProvider>
        <CustomCursor />
        <Navbar />
        <BackToTop />
        <ScrollToTop />
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
