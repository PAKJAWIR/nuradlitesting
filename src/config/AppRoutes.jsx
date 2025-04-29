// config/AppRoutes.jsx
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Routing untuk navigasi utama
export const mainRoutes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "About Me", path: "/aboutme", element: <AboutMe /> },
  { name: "Projects", path: "/projects", element: <Projects /> },
  { name: "Contact", path: "/contact", element: <Contact /> },
];

// Routing untuk error dan lainnya
const otherRoutes = [{ path: "*", element: <NotFound /> }];

// Gabungkan semua routes untuk keperluan router
const AppRouting = [...mainRoutes, ...otherRoutes];

export function GetRouteByName(name) {
  const route = mainRoutes.find((route) => route.name === name);
  return route ? route.path : "/";
}

export default AppRouting;
