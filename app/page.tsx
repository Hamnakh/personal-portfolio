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
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Hire Me
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Web Developer • Data Entry • Teacher
            </p>
            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
              I help businesses grow with clean, reliable digital work.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              I&apos;m Hamna, a professional web developer with experience in data entry, digital tasks,
              and teaching. I bring a combination of technical skill, organization, and communication to every project.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Contact Me
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                About Me
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
                src="/me.png"
                alt="Hamna professional profile"
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
                src="/me.png"
                alt="Hamna working"
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

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Featured projects</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Work that reflects my skills</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={`group block overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-[1px] shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-950/30`}
              >
                <div className="h-full rounded-[calc(2rem-1px)] bg-slate-950/95 p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      {project.status}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.stack}</span>
                  </div>

                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    <span className="text-xs text-slate-400">{project.date}</span>
                  </div>

                  <p className="text-base leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-cyan-300">
                    <span>View project</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 pt-8">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-indigo-500/10 p-10 text-center shadow-lg shadow-cyan-950/20">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h2 className="mt-4 text-4xl font-bold text-white">Let&apos;s work together</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              I am available for web development projects, data entry work, and professional digital support. I am ready to contribute with dedication and quality.
            </p>

            <div className="mt-8 grid gap-4 text-left text-slate-200 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</div>
                <a href="tel:03122792463" className="mt-2 block text-lg font-semibold text-white">03122792463</a>
              </div>
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
