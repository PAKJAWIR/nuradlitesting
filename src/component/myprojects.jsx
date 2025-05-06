import { useState, useEffect } from "react";
import { Title1 } from "./title";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "../context/cursorContext";

function MyProjects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const { textEnter, textLeave } = useCursor();

  const projects = [
    { id: 1, imgSrc: "/img/dreamchaser.png", title: "Dreamchaser", description: "Making my own shirt for my brand!", typeDesign: "Shirt" },
    { id: 2, imgSrc: "/img/NEWPOOKIE.png", title: "Pookie Bear", description: "Making my own shirt for my brand!", typeDesign: "Shirt" },
    { id: 3, imgSrc: "/img/GUTSCDR.png", title: "Guts Berserk", description: "Making my own shirt for my brand!", typeDesign: "Shirt" },
    { id: 4, imgSrc: "/img/POSTER1.png", title: "Clouds & Sky", description: "My own Poster Projects!", typeDesign: "Poster" },
    { id: 5, imgSrc: "/img/POSTER2.png", title: "Porsche 911", description: "My own Poster Projects!", typeDesign: "Poster" },
  ];

  const filteredProjects = selectedFilter === "All" ? projects : projects.filter((proj) => proj.typeDesign === selectedFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(Math.min(3, filteredProjects.length));
  }, [selectedFilter]);

  const handleLoadMore = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(Math.min(3, filteredProjects.length));
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const isAllVisible = visibleCount >= filteredProjects.length;

  return (
    <div className="flex flex-col gap-5 px-4 lg:px-5 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col">
          <Title1 text="my-projects" />
          <p  onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-warna3 text-sm mt-1">check out my latest projects!</p>
        </div>
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="flex flex-wrap items-start justify-start text-center lg:justify-center gap-2">
          {["All", "Web", "Shirt", "Poster"].map((filter) => (
            <button
              key={filter}
              className={`cursor-none px-4 py-1 text-sm rounded-full border border-warna4 text-warna3 hover:bg-warna4 hover:text-warna1 transition-all ${selectedFilter === filter ? "bg-warna4 text-warna1" : ""}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-5 w-full min-h-[300px]">
        <AnimatePresence>
          {visibleProjects.length > 0 ? (
            visibleProjects.map((proj) => (
              <motion.div key={proj.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.5 }}>
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" className="transition-transform duration-300 hover:z-10">
                  <div
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    className="flex flex-col border border-solid border-warna4 items-center rounded-md text-center bg-warna5 transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.warna4)] hover:border-warna4"
                  >
                    <div className="relative block focus:outline-none group" tabIndex={0}>
                      <div className="relative overflow-hidden rounded-md group w-full aspect-[4/5]">
                        <img src={proj.imgSrc} alt={proj.title} className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-focus-within:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-warna6/90 to-warna4/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                          <div className="text-warna2 space-y-2 translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 text-center justify-center items-center">
                            <h3 className="text-warna1 text-md font-bold">{proj.title}</h3>
                            <p className="text-warna3 text-xs">{proj.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))
          ) : (
            <motion.div  onMouseEnter={textLeave} onMouseLeave={textLeave} key="no-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="col-span-full flex items-center justify-center text-warna3 text-sm">
              No projects found.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {filteredProjects.length > 3 && (
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="flex justify-center mt-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="cursor-none px-6 py-2 text-sm rounded-md border border-warna4 text-warna3 hover:bg-warna4 hover:text-warna1 transition-all"
          >
            {isAllVisible ? "Show Less" : "Load More"}
          </motion.button>
        </div>
      )}
    </div>
  );
}

export default MyProjects;
