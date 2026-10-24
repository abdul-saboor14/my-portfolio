
"use client";

import { useState } from "react";

const skills = [
  "Artificial Intelligence",
  "Chatbot Development",
  "Agentic AI",
  "AI Automation",
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "HTML & CSS",
  "Python Basics",
  "Prompt Engineering",
  "Problem Solving",
];

const projects = [
  {
    number: "01",
    category: "AI & CHATBOTS",
    title: "AI Student Assistant",
    description:
      "A chatbot concept designed to help university students find academic information, understand common questions, and get quick answers through a simple conversational interface.",
    tags: ["AI", "Chatbots", "Prompt Engineering"],
    icon: "✦",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my technical skills, learning journey, and projects with a modern interface built using Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: "⌘",
    accent: "from-violet-500 to-blue-500",
  },
  {
    number: "03",
    category: "AI AUTOMATION",
    title: "Smart Workflow Assistant",
    description:
      "An automation project concept focused on simplifying repetitive tasks, organizing information, and exploring how AI agents can make everyday digital workflows more efficient.",
    tags: ["AI Automation", "Agentic AI", "Workflows"],
    icon: "↗",
    accent: "from-cyan-400 to-teal-400",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080e1d] text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-[35rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080e1d]/85 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/25 transition-transform group-hover:rotate-6">
              AS
            </div>
            <div>
              <p className="font-bold tracking-wide text-white">
                Abdul Saboor
              </p>
              <p className="text-xs text-slate-400">AI Developer in Progress</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition-all hover:border-blue-400 hover:bg-blue-500/20 md:inline-flex"
          >
            Let&apos;s Connect <span className="ml-2">↗</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0b1224] p-5 shadow-2xl md:hidden">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28"
      >
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            BS Student · University of Sargodha
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Abdul
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Saboor.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
            Exploring the Future of{" "}
            <span className="text-blue-400">AI & Chatbots</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m a university student passionate about artificial
            intelligence, intelligent chatbots, and AI automation. I&apos;m
            learning to turn ideas into practical digital solutions that make
            everyday tasks smarter and simpler.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-500"
            >
              Explore My Work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.06]"
            >
              Get in Touch <span>↗</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/[0.08] pt-8">
            <div>
              <p className="text-2xl font-bold text-white">AI</p>
              <p className="mt-1 text-sm text-slate-500">My Focus</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">BS</p>
              <p className="mt-1 text-sm text-slate-500">University Student</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">∞</p>
              <p className="mt-1 text-sm text-slate-500">Curiosity to Learn</p>
            </div>
          </div>
        </div>

        {/* Developer illustration built entirely with CSS and text */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-4 rounded-full bg-blue-600/20 blur-[80px]" />
          <div className="absolute -right-2 top-10 h-24 w-24 rounded-full border border-cyan-400/20" />
          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full border border-blue-400/20" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#152541] via-[#0e1a31] to-[#0b1325] p-5 shadow-2xl shadow-blue-950/40 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-slate-500">
                developer.tsx
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <p className="text-slate-500">
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
              </p>
              <p className="pl-5 text-slate-300">
                name: <span className="text-emerald-300">&quot;Abdul Saboor&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                role: <span className="text-emerald-300">&quot;AI Learner&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                focus: <span className="text-emerald-300">&quot;Chatbots&quot;</span>,
              </p>
              <p className="pl-5 text-slate-300">
                mindset: <span className="text-emerald-300">&quot;Keep Building&quot;</span>,
              </p>
              <p className="text-slate-500">{"};"}</p>
              <div className="my-5 border-t border-white/10" />
              <p className="text-slate-500">
                <span className="text-violet-400">function</span>{" "}
                <span className="text-blue-300">buildFuture</span>() {"{"}
              </p>
              <p className="pl-5 text-slate-300">
                <span className="text-violet-400">return</span>{" "}
                <span className="text-emerald-300">&quot;Learn. Build. Improve.&quot;</span>;
              </p>
              <p className="text-slate-500">{"}"}</p>
            </div>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-2xl text-blue-300">
                ✳
              </div>
              <div>
                <p className="font-semibold text-white">Building with AI</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Learning today. Creating tomorrow.
                </p>
              </div>
              <span className="ml-auto text-xl text-blue-400">↗</span>
            </div>
          </div>

          <div className="absolute -left-7 top-1/4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111d32] px-4 py-3 shadow-xl sm:flex">
            <span className="text-xl text-cyan-300">✦</span>
            <div>
              <p className="text-sm font-semibold text-white">AI Explorer</p>
              <p className="text-xs text-slate-500">Always learning</p>
            </div>
          </div>

          <div className="absolute -right-4 bottom-24 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111d32] px-4 py-3 shadow-xl sm:flex">
            <span className="text-xl text-blue-400">{"</>"}</span>
            <div>
              <p className="text-sm font-semibold text-white">Code & Create</p>
              <p className="text-xs text-slate-500">One step at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get to know me
            </p>
            <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              A curious mind.
              <br />
              <span className="text-slate-500">A builder&apos;s mindset.</span>
            </h2>
            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m Abdul Saboor, a BS student at the University of Sargodha
              with a growing interest in artificial intelligence and modern
              software development. I enjoy exploring how technology can solve
              real problems and improve the way people work and learn.
            </p>
            <p>
              My current learning journey focuses on AI-powered chatbots,
              prompt engineering, automation, and the foundations of agentic
              AI. I&apos;m also developing my web development skills to create
              accessible, responsive interfaces for intelligent applications.
            </p>
            <p>
              I believe in learning by doing. Every small project gives me a
              chance to experiment, understand a new concept, and move closer
              to building useful AI-powered solutions.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#101a2e] p-5 transition-all hover:border-blue-400/30">
                <span className="text-2xl text-blue-400">◎</span>
                <h3 className="mt-3 font-bold text-white">My Mission</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Build practical AI tools that make everyday tasks easier.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#101a2e] p-5 transition-all hover:border-blue-400/30">
                <span className="text-2xl text-cyan-300">↗</span>
                <h3 className="mt-3 font-bold text-white">My Approach</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Stay curious, practice consistently, and keep improving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            What I&apos;m learning
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-5 leading-7 text-slate-400">
            The tools and concepts I&apos;m exploring to create better digital
            experiences and intelligent applications.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-[#111a2d] px-5 py-3 text-sm font-medium text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index % 3 === 0
                    ? "bg-blue-400"
                    : index % 3 === 1
                      ? "bg-cyan-400"
                      : "bg-violet-400"
                }`}
              />
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "AI & Automation",
              text: "Understanding chatbots, prompt design, AI tools, and automated workflows.",
              icon: "✳",
            },
            {
              title: "Web Development",
              text: "Learning to build responsive interfaces using modern frontend technologies.",
              icon: "</>",
            },
            {
              title: "Continuous Learning",
              text: "Improving through university studies, personal practice, and hands-on projects.",
              icon: "↗",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.045] to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-bold text-blue-300">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                My work
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                A selection of learning projects and concepts that reflect my
                interests in AI, automation, and web development.
              </p>
            </div>
            <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400">
              SELECTED WORK · 03
            </span>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1729] transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wider text-slate-500">
                      PROJECT / {project.number}
                    </span>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} bg-opacity-10 text-xl font-bold text-white shadow-lg shadow-blue-950/20 transition-transform group-hover:scale-110`}
                    >
                      {project.icon}
                    </div>
                  </div>

                  <p className="mt-8 text-xs font-bold tracking-[0.15em] text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-white/[0.07] pt-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all hover:gap-3 hover:text-blue-300"
                    >
                      Discuss this project <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            These are representative student project concepts. Replace the
            descriptions with your actual project details as you build them.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get in touch
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s build
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                something smart.
              </span>
            </h2>
            <p className="mt-6 max-w-md leading-8 text-slate-400">
              Have an idea, a project, or an opportunity to collaborate? I&apos;d
              love to connect, exchange ideas, and learn how we can make
              something useful together.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg text-blue-300">
                  @
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Add your email address
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-lg text-blue-300">
                  ↗
                </div>
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Sargodha, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/[0.09] bg-[#101a2d] p-6 shadow-2xl shadow-black/10 sm:p-9"
          >
            <h3 className="text-2xl font-bold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fill in the details below to start a conversation.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#080e1d] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080e1d] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    setSubmitted(false);
                  }}
                  placeholder="Tell me about your idea or project..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080e1d] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-sm leading-6 text-emerald-400"
                >
                  Your email app should open with your message prepared. Please
                  send it there to complete delivery.
                </p>
              )}

              <p className="text-center text-xs leading-5 text-slate-500">
                This form opens your default email application. It does not
                send messages directly from the website.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.07] bg-[#060b16]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              AS
            </div>
            <div>
              <p className="text-sm font-bold text-white">Abdul Saboor</p>
              <p className="text-xs text-slate-500">Learning. Building. Growing.</p>
            </div>
          </a>

          <p className="text-center text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Abdul Saboor. Built with curiosity and
            code.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
