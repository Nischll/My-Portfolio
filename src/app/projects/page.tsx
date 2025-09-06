"use client";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-14 min-h-screen"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="gsap-project-card p-6 bg-white rounded-lg shadow-md"
          >
            Project {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
