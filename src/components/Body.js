import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "./Header";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const Body = () => {
  /* ================= CONTACT FORM STATE ================= */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  return (
    <>
      <Header />
      <main className="pt-20 relative">

      <div className="fixed inset-0 bg-gradient-to-br from-[#0B0F14] via-[#0E131A] to-[#0B0F14] -z-20" />



        {/* ================= HOME ================= */}
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 scroll-mt-20"
          >
            <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-6 items-center">

              {/* PROFILE IMAGE */}
              <div className="flex justify-center">
                <div className="p-[3px] rounded-full bg-gradient-to-tr from-[#6BCCD9] via-[#28B9CB] to-[#6A8386]">
                  <img
                    src="/profile.jpg"
                    alt="Mahendra"
                    className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-[#0B0F14] object-cover"
                  />
                </div>

              </div>

              {/* TEXT CONTENT */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">

                <p className="text-white/70 mb-2 text-lg">Hi, I’m</p>

                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-[#6BCCD9] to-[#28B9CB] bg-clip-text text-transparent">
                    Mahendra Babu Konda
                  </span>
                </h1>

                <p className="text-white/80 mb-6">
                  Frontend Developer · React · Tailwind CSS
                </p>

                {/* CTA BUTTONS */}
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-[#28B9CB] text-[#0A0F14] font-medium
                    hover:bg-[#6BCCD9] transition"
                  >
                    View Projects
                  </a>

                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-full border border-white/40 text-white
                    hover:bg-white/10 transition"
                  >
                    Contact
                  </a>
                </div>

              </div>
            </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="min-h-screen px-6 py-20 scroll-mt-20">
          <Reveal>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  About Me
                </h2>

                <p className="text-sm uppercase tracking-wider text-white/60 mb-5">
                  Frontend Developer · React · Tailwind CSS
                </p>

                <p className="text-white/80 leading-relaxed mb-6 max-w-xl">
                  I am a frontend developer focused on building clean,
                  responsive, and user-friendly web interfaces. I enjoy
                  transforming ideas into interactive digital experiences.
                </p>

                <ul className="space-y-3 text-white/80">
                  <li className="flex gap-2">
                    <span className="text-[#6BCCD9]">▹</span>
                    Strong understanding of modern UI design
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6BCCD9]">▹</span>
                    Experience building responsive layouts
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6BCCD9]">▹</span>
                    Passion for clean and maintainable code
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 mt-8 md:mt-0">
                {[
                  { label: "Focus", value: "Frontend Development" },
                  { label: "Tech Stack", value: "React · Tailwind CSS" },
                  { label: "Approach", value: "Clean & Responsive UI" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20
                    transition-all duration-300 hover:-translate-y-1 hover:border-[#6BCCD9]/60 hover:shadow-lg hover:shadow-black/30"
                  >
                    <p className="text-sm text-[#6BCCD9] mb-1">{item.label}</p>
                    <h3 className="text-white/90 font-medium">{item.value}</h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="min-h-screen px-6 py-20 scroll-mt-20">
          <Reveal>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                Skills
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Frontend",
                    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
                  },
                  {
                    title: "Tools & Libraries",
                    items: ["Git & GitHub", "VS Code", "REST APIs", "npm"],
                  },
                  {
                    title: "Other",
                    items: ["Responsive Design", "Debugging", "Problem Solving"],
                  },
                ].map((group) => (
                  <div
                    key={group.title}
                    className="p-6 md:p-7 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                  >
                    <h3 className="text-lg font-medium mb-5">{group.title}</h3>
                    <div className="flex flex-wrap gap-3 leading-tight">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-1 rounded-full text-sm border border-white/30 text-white/80
                          transition-all duration-200 hover:border-[#6BCCD9] hover:bg-white/10 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
        {/* ================= CERTIFICATIONS ================= */}
        {/* ================= CERTIFICATIONS ================= */}
        <section
          id="certifications"
          className="relative py-24 text-white"
        >
          <div className="max-w-6xl mx-auto px-6">
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              Certifications
            </h2>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Build Your Own Static Website",
                  file: "/certificates/Build-your-own-static-website.pdf",
                },
                {
                  title: "Build Your Own Responsive Website",
                  file: "/certificates/Build-your-own-responsive-website.pdf",
                },
                {
                  title: "Developer Foundation",
                  file: "/certificates/Developer-Foundation.pdf",
                },
                {
                  title: "Introduction to Databases",
                  file: "/certificates/Introduction-to-Databases.pdf",
                },
                {
                  title: "JavaScript Essentials",
                  file: "/certificates/Javascript-Essentials.pdf",
                },
                {
                  title: "Programming Foundation With Python",
                  file: "/certificates/Programming-Foundation-With-Python.pdf",
                },
                {
                  title: "Responsive Web Design Using Flexbox",
                  file: "/certificates/Responsive-Web-design-using-flexbox.pdf",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-white/10 bg-white/5 p-6
                            hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20
                            transition-all duration-300"
                >
                  <h3 className="text-lg font-medium mb-4">
                    {cert.title}
                  </h3>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= RESUME ================= */}
        <section
            id="resume"
            className="min-h-screen px-6 py-20 scroll-mt-20"
          >
            <Reveal>
              <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white text-center">
                  Resume
                </h2>

                <p className="text-white/70 mb-12 max-w-xl mx-auto text-center">
                  A quick overview of my skills, experience, and projects.
                  You can view or download the full resume.
                </p>

                {/* Resume Card */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center
                  p-8 rounded-2xl bg-white/10 backdrop-blur-md
                  border border-white/20 transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl hover:border-[#6BCCD9]/70"
                >
                  {/* Preview Image */}
                  <a
                    href="/resume/Mahendra-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-xl"
                  >
                    <img
                      src="/resume/resume-preview.jpeg"
                      alt="Mahendra Resume Preview"
                      loading="lazy"
                      className="w-full h-auto rounded-xl
                      transition-transform duration-300
                      group-hover:scale-105"
                    />
                  </a>

                  {/* Actions */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl font-medium text-white mb-4">
                      Mahendra – Frontend Developer
                    </h3>

                    <p className="text-white/70 mb-6">
                      Skilled in building responsive, user-friendly web interfaces
                      using React and Tailwind CSS.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                      <a
                        href="/resume/Mahendra-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#6BCCD9] text-black font-medium
                        hover:bg-[#28B9CB] transition"
                      >
                        View Resume
                      </a>

                      <a
                        href="/resume/Mahendra-Resume.pdf"
                        download
                        className="px-6 py-3 rounded-full border border-white/40 text-white
                        hover:bg-white/10 transition"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
        </section>


        {/* ================= PROJECTS ================= */}
        <section id="projects" className="min-h-screen px-6 py-20 scroll-mt-20">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </Reveal>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="min-h-screen px-6 py-20 scroll-mt-20">
          <Reveal>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  Let’s Work Together
                </h2>

                <p className="text-white/80 max-w-md mb-6">
                  I’m open to new opportunities and collaborations.
                  If you have an idea or just want to connect, feel free to send a message.
                </p>

                <p className="text-white/60 text-sm">
                  I usually respond within 24 hours.
                </p>
              </div>

              <form
                className="p-6 md:p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!validateForm()) return;

                  setLoading(true);

                  emailjs
                    .send(
                      "service_2aknesg",
                      "template_5n2jlfh",
                      {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                      },
                      "3QFFqq3PSQZXnBp1W"
                    )
                    .then(() => {
                      setSubmitted(true);
                      setFormData({ name: "", email: "", message: "" });
                      setLoading(false);
                      setTimeout(() => setSubmitted(false), 3000);
                    })
                    .catch(() => {
                      setError("Something went wrong. Please try again.");
                      setLoading(false);
                    });
                }}
              >
                {error && (
                  <div className="p-3 rounded-md bg-red-500/20 text-red-300 text-sm text-center">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="p-3 rounded-md bg-[#28B9CB]/20 text-[#6BCCD9] text-sm text-center">
                    ✅ Message sent successfully!
                  </div>
                )}

                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm text-white/70 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      className="w-full rounded-md px-4 py-2 bg-white/10 border border-white/30
                      text-white placeholder-white/40 focus:outline-none focus:border-[#6BCCD9]
                      focus:ring-1 focus:ring-[#6BCCD9]/50"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-md px-4 py-2 bg-white/10 border border-white/30
                    text-white placeholder-white/40 focus:outline-none focus:border-[#6BCCD9]
                    focus:ring-1 focus:ring-[#6BCCD9]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-md font-medium transition-all duration-300
                    ${
                      loading
                        ? "bg-white/20 text-white/50 cursor-not-allowed"
                        : "bg-[#28B9CB] text-[#0A0F14] hover:bg-[#6BCCD9]"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-white/60 text-sm">
                  Your information will never be shared.
                </p>
              </form>
            </div>
          </Reveal>
        </section>

      </main>
    </>
  );
};

export default Body;
