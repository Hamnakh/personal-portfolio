import Reveal from "./reveal";
import MobileNavigation from "./mobile-navigation";

const stats = [
  { value: "7+", label: "Years teaching" },
  { value: "Web", label: "Developer" },
  { value: "Data", label: "Entry expert" },
];

const services = [
  {
    title: "Web Development",
    text: "Professional websites, landing pages, and business portals designed to be modern, responsive, and user-friendly.",
  },
  {
    title: "Data Entry & Administration",
    text: "Accurate data handling, record management, spreadsheets, typing, and office support tasks with attention to detail.",
  },
  {
    title: "Teaching & Training",
    text: "Strong communication and mentoring skills with experience in teaching, guidance, and helping students learn confidently.",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "WordPress",
  "Excel",
  "Google Sheets",
  "Typing",
  "Documentation",
  "Communication",
  "Problem Solving",
];

const experience = [
  {
    title: "Web Developer",
    company: "Freelance / Personal Projects",
    text: "Building responsive websites and digital experiences with a focus on clean design, usability, and performance.",
  },
  {
    title: "Data Entry Specialist",
    company: "Administrative Work",
    text: "Managing records, updating information, organizing files, and maintaining accuracy in daily office tasks.",
  },
  {
    title: "Teacher / Instructor",
    company: "7 Years Experience",
    text: "Helping students learn with patience, structure, and practical guidance across academic and digital learning environments.",
  },
];

const projects = [
  {
    name: "social-media-auto",
    title: "Social Media Automation",
    category: "Workflow automation",
    status: "Private",
    stack: "TypeScript",
    date: "Updated on Aug 9",
    description:
      "A smart social media automation project focused on streamlining repetitive publishing tasks, improving workflow efficiency, and helping businesses manage content operations with less manual effort.",
    link: "https://github.com/Hamnakh/social-media-auto",
    accent: "from-cyan-500/20 via-slate-900 to-slate-950",
  },
  {
    name: "Data-Rescue-City-Choose-the-Right-AI-Mode",
    title: "Data Rescue City",
    category: "Interactive learning",
    status: "Public",
    stack: "HTML",
    date: "Updated on Jun 28",
    description:
      "An interactive web project that highlights the importance of choosing the right AI mode for smarter digital decisions, practical problem solving, and improved user experience in modern tech workflows.",
    link: "https://github.com/Hamnakh/Data-Rescue-City-Choose-the-Right-AI-Mode",
    accent: "from-indigo-500/20 via-slate-900 to-slate-950",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold tracking-[0.2em] text-cyan-300">
            HAMNA
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <MobileNavigation />
          <a
            href="#contact"
            className="header-hire rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <Reveal />
        <section className="hero mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div className="hero-intro">
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Web Developer • Data Entry • Teacher
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Hi, I&apos;m <span className="text-cyan-300">Hamna.</span>
            </h1>
            <div className="role-text mt-4 font-bold tracking-tight text-cyan-300">
              <span className="sr-only">Web Developer, Data Entry Specialist, and Teacher</span>
              <span className="role-stack" aria-hidden="true">
                <span>Web Developer</span>
                <span>Data Entry Specialist</span>
                <span>Teacher &amp; Mentor</span>
              </span>
            </div>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              I build thoughtful websites and simplify digital work through development,
              data expertise, and teaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore Projects
              </a>
              <a
                href="/Hamna-cv.pdf"
                download="Hamna-cv.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-cyan-900/30">
              <img
                src="/workspace.jpg"
                alt="Laptop displaying code on a professional workspace"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Available</div>
              <div className="mt-2 text-lg font-semibold text-white">For projects & freelance work</div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="absolute -left-4 top-6 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
              <img
                src="/workspace.jpg"
                alt="Web development workspace with a laptop and monitor"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-slate-900"
              />
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                About me
              </p>
              <h2 className="mt-4 text-4xl font-bold text-white">Professional, organized, and ready to contribute.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                I am Hamna, a web developer with a strong interest in building modern digital solutions and supporting business operations with accurate digital work. My background combines technology, administration, and education, which helps me work efficiently and communicate clearly.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                I have 7 years of teaching experience, and I also continue my studies in CMT and IT. I enjoy working in environments where I can use my technical knowledge, attention to detail, and problem-solving skills to deliver quality results.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Web development</span>
                  <span>90%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[90%] rounded-full bg-cyan-400" />
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                  <span>Data accuracy & organization</span>
                  <span>95%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[95%] rounded-full bg-indigo-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Core strengths</p>
              <h2 className="mt-4 text-4xl font-bold text-white">What I can offer</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-950 p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-300">
                    ✦
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Experience</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Career background</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6">
                <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {item.company}
                </div>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 md:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Skills</p>
              <h2 className="mt-4 text-4xl font-bold text-white">Tools and abilities</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-6 py-20">
          <div className="work-heading">
            <div><p className="work-eyebrow">A selection of my work</p><h2 id="projects-title">Selected projects<span>.</span></h2></div>
            <a className="work-archive" href="https://github.com/Hamnakh" target="_blank" rel="noopener noreferrer">More on GitHub <span aria-hidden="true">&#8599;</span></a>
          </div>
          <div className="work-list">
            {projects.map((project, index) => (
              <article className="work-row" key={project.name}>
                <span className="work-number" aria-hidden="true">0{index + 1}</span>
                <div className="work-summary">
                  <p className="work-eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="work-description">{project.status === "Private" ? "A personal project exploring social media automation and simpler content publishing workflows." : "An interactive web project exploring how to choose the right AI mode for everyday digital tasks."}</p>
                  <div className="work-tags"><span>{project.stack}</span><span>{project.status === "Private" ? "Automation" : "Interactive web"}</span><span>{project.status} repository</span></div>
                </div>
                <a className="work-action" href={project.status === "Private" ? "#contact" : project.link} target={project.status === "Private" ? undefined : "_blank"} rel={project.status === "Private" ? undefined : "noopener noreferrer"} aria-label={project.status === "Private" ? "Discuss Social Media Automation" : "View Data Rescue City source on GitHub"}><span>{project.status === "Private" ? "Discuss project" : "View source"}</span><span className="work-arrow" aria-hidden="true">&#8599;</span></a>
              </article>
            ))}
          </div>
          <p className="work-note">Thoughtful solutions. Practical purpose. Always learning.</p>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 pt-8">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-indigo-500/10 p-10 text-center shadow-lg shadow-cyan-950/20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              I am available for web development projects, data entry work, and professional digital support. I am ready to contribute with dedication and quality.
            </p>

            <div className="mx-auto mt-8 grid max-w-lg gap-4 text-left text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</div>
                <a href="mailto:hamnakhan82355@gmail.com" className="mt-2 block text-lg font-semibold text-white break-all">hamnakhan82355@gmail.com</a>
              </div>
            </div>

            <a
              href="mailto:hamnakhan82355@gmail.com"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Me
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
