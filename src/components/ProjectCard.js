const ProjectCard = ({
  title = "Project Title",
  description = "Short description of the project goes here.",
  tech = "React · Tailwind CSS",
  image = "/projects/project1.jpg",
  live = "#",
  github = "#",
}) => {
  return (
    <div
      className="
        group rounded-2xl overflow-hidden
        bg-white/10 backdrop-blur-md
        border border-white/20

        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-2xl hover:shadow-black/30
        hover:border-[#28B9CB]/60
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-48 object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-110
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-white/80 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* TECH STACK */}
        <p className="text-white/60 text-xs mb-4">
          {tech}
        </p>

        {/* LINKS */}
        <div className="flex gap-5">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm font-medium
              text-[#6BCCD9]
              hover:text-[#28B9CB]
              transition
            "
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm font-medium
              text-[#6BCCD9]
              hover:text-[#28B9CB]
              transition
            "
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
