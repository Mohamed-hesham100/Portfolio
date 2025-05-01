import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Projects } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const MyProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);
  return (
    <section id="projects" className="bg-orange-50/40 mt-14">
      <div className="container mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Recent Projects</h4>

          <p className="text-sm text-center mt-4 leading-6">
            From concept to deployment, tese projects shiwcase my technical
            expertise. I focus on code, performance, and user experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex pt-14 pb-8 px-4 sm:px-6 lg:px-8 gap-6">

              {Projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] "
                >
                  <ProjectCard
                    key={project.id}
                    imgURL={project.image}
                    title={project.title}
                    tech={project.tech}
                    demoLink={project.demoLink}
                    codeLink={project.codeLink}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigations Buttons */}

          <button
            className={`arrow-btn -left-2 cursor-pointer ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoIosArrowForward className="rotate-180" />
          </button>

          {/* زر التقدم */}
          <button
            className={`arrow-btn -right-4 cursor-pointer ${
              !canScrollNext ? "opacity-50 cursor-not-allow" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};
export default MyProjects;
