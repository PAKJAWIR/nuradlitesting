import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const AppRouting = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "About Me", path: "/aboutme", element: <AboutMe /> },
  { name: "Projects", path: "/projects", element: <Projects /> },
  { name: "Contact", path: "/contact", element: <Contact /> },
];

export function GetRouteByName(name) {
  const route = AppRouting.find((route) => route.name === name);
  return route ? route.path : "/";
}
export default AppRouting;
