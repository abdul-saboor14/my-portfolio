
"use client";

import { useEffect, useState, type FormEvent } from "react";

const skills = [
  { name: "AI Automation", category: "AI & AUTOMATION", level: "Learning & building" },
  { name: "Agentic AI", category: "AI & AUTOMATION", level: "Exploring agents" },
  { name: "Prompt Engineering", category: "AI & AUTOMATION", level: "Practical skills" },
  { name: "Next.js", category: "WEB DEVELOPMENT", level: "Building projects" },
  { name: "TypeScript", category: "WEB DEVELOPMENT", level: "Developing skills" },
  { name: "Tailwind CSS", category: "WEB DEVELOPMENT", level: "Responsive UI" },
  { name: "HTML & CSS", category: "WEB DEVELOPMENT", level: "Web foundations" },
  { name: "MS Excel", category: "PRODUCTIVITY", level: "Data & spreadsheets" },
  { name: "Canva", category: "PRODUCTIVITY", level: "Visual design" },
  { name: "Communication", category: "PRODUCTIVITY", level: "Collaboration" },
];

const projects = [
  {
    number: "01",
    title: "AI Workflow Architect",
    type: "AUTOMATION CONCEPT",
    description:
      "A concept for connecting everyday tasks into intelligent workflows that reduce repetitive work and improve productivity.",
    tags: ["AI Automation", "Workflows", "Productivity"],
    color: "#69f0d0",
    icon: "workflow",
    status: "Concept project",
  },
  {
    number: "02",
    title: "Autonomous AI Assistant",
    type: "AGENTIC AI CONCEPT",
    description:
      "An exploration of an AI assistant that can interpret instructions, break down tasks, and coordinate multiple steps.",
    tags: ["Agentic AI", "LLMs", "Task Planning"],
    color: "#b7a0ff",
    icon: "agent",
    status: "Learning project",
  },
  {
    number: "03",
    title: "AI-Powered Web Experience",
    type: "WEB DEVELOPMENT",
    description:
      "A modern web interface concept combining responsive design, clear user journeys, and future-ready AI experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "#83b7ff",
    icon: "web",
    status: "Portfolio concept",
  },
];

const journey = [
  {
    year: "PRESENT",
    title: "BS Student",
    subtitle: "University of Sargodha",
    description:
      "Building a strong academic foundation while exploring technology, problem-solving, and AI-driven innovation.",
  },
  {
    year: "IN PROGRESS",
    title: "AI & Web Development",
    subtitle: "Learning by building",
    description:
      "Developing practical skills in modern web technologies, AI automation, agentic systems, and digital productivity.",
  },
  {
    year: "NEXT CHAPTER",
    title: "AI Solutions Developer",
    subtitle: "A goal worth building toward",
    description:
      "Working toward creating useful, accessible, and intelligent solutions that solve real-world problems.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
      <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
    </svg>
  );
}

function ProjectGraphic({ icon, color }: { icon: string; color: string }) {
  return (
    <div
      className={`project-graphic graphic-${icon}`}
      style={{ "--graphic-color": color } as React.CSSProperties}
      aria-hidden="true"
    >
      {icon === "workflow" && (
        <svg viewBox="0 0 300 180" fill="none">
          <path className="graphic-line" d="M64 88H117M183 88H236M150 54V32M150 122V144" />
          <rect x="24" y="66" width="40" height="44" rx="12" />
          <rect x="117" y="54" width="66" height="68" rx="18" />
          <rect x="236" y="66" width="40" height="44" rx="12" />
          <rect x="130" y="69" width="40" height="38" rx="12" />
          <circle cx="44" cy="88" r="5" />
          <circle cx="256" cy="88" r="5" />
          <circle cx="150" cy="88" r="5" />
          <path d="m145 32 5-7 5 7M145 144l5 7 5-7" />
          <circle className="graphic-dot" cx="150" cy="18" r="4" />
          <circle className="graphic-dot" cx="150" cy="162" r="4" />
        </svg>
      )}

      {icon === "agent" && (
        <svg viewBox="0 0 300 180" fill="none">
          <circle className="agent-ring ring-one" cx="150" cy="88" r="62" />
          <circle className="agent-ring ring-two" cx="150" cy="88" r="43" />
          <circle className="agent-core" cx="150" cy="88" r="25" />
          <path d="M150 52v15m0 42v15M114 88h15m42 0h15" />
          <circle className="graphic-dot" cx="150" cy="26" r="5" />
          <circle className="graphic-dot" cx="212" cy="88" r="5" />
          <circle className="graphic-dot" cx="88" cy="88" r="5" />
          <circle className="graphic-dot" cx="150" cy="150" r="5" />
          <path d="m143 88 5 5 10-11" />
        </svg>
      )}

      {icon === "web" && (
        <svg viewBox="0 0 300 180" fill="none">
          <rect x="49" y="31" width="202" height="119" rx="12" />
          <path d="M49 56h202" />
          <circle cx="65" cy="44" r="3" />
          <circle cx="76" cy="44" r="3" />
          <circle cx="87" cy="44" r="3" />
          <rect x="65" y="71" width="78" height="63" rx="7" />
          <rect x="154" y="71" width="80" height="12" rx="4" />
          <rect x="154" y="91" width="60" height="6" rx="3" />
          <rect x="154" y="104" width="71" height="6" rx="3" />
          <rect x="154" y="119" width="43" height="15" rx="5" />
          <circle className="graphic-dot" cx="103" cy="94" r="13" />
        </svg>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const recipient = "kahut260@gmail.com";

    if (recipient === "kahut260@gmail.com") {
      setFormStatus(
        "Before sending, replace your-email@example.com in the code with your real email address."
      );
      return;
    }

    const body = `Hello Abdul,\n\n${message}\n\nFrom: ${name}\nReply email: ${email}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject || "Portfolio contact"
    )}&body=${encodeURIComponent(body)}`;

    setFormStatus("Opening your email application…");
    window.location.href = mailto;
  }

  const categories = ["ALL", "AI & AUTOMATION", "WEB DEVELOPMENT", "PRODUCTIVITY"];

  const filteredSkills =
    activeFilter === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <main>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap");

        :root {
          --bg: #070a12;
          --bg-soft: #0b1020;
          --surface: rgba(16, 23, 42, 0.78);
          --surface-solid: #10172a;
          --line: rgba(154, 174, 216, 0.15);
          --text: #f2f5ff;
          --muted: #9aa6bf;
          --cyan: #69f0d0;
          --violet: #b7a0ff;
          --blue: #83b7ff;
          --mono: "DM Mono", monospace;
          --sans: "Manrope", sans-serif;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 95px;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 10% 10%, rgba(71, 90, 210, 0.13), transparent 34%),
            radial-gradient(ellipse at 90% 35%, rgba(57, 218, 188, 0.07), transparent 29%),
            radial-gradient(ellipse at 50% 90%, rgba(119, 73, 210, 0.08), transparent 35%);
        }

        body::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: 0.12;
          background-image: radial-gradient(rgba(184, 203, 240, 0.65) 0.6px, transparent 0.6px);
          background-size: 24px 24px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
        }

        ::selection {
          background: rgba(105, 240, 208, 0.25);
          color: white;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea {
          font: inherit;
        }

        button,
        a,
        input,
        textarea {
          -webkit-tap-highlight-color: transparent;
        }

        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible {
          outline: 2px solid var(--cyan);
          outline-offset: 4px;
        }

        .site-shell {
          width: min(1160px, calc(100% - 48px));
          margin-inline: auto;
        }

        .mono {
          font-family: var(--mono);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--cyan);
          font: 500 11px/1.5 var(--mono);
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .eyebrow::before {
          content: "";
          width: 20px;
          height: 1px;
          background: currentColor;
          opacity: 0.8;
        }

        .section {
          padding: 110px 0;
          position: relative;
        }

        .section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 44px;
        }

        .section-title {
          margin: 14px 0 0;
          font-size: clamp(34px, 5vw, 53px);
          font-weight: 700;
          letter-spacing: -0.055em;
          line-height: 1.12;
        }

        .section-description {
          max-width: 360px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .gradient-text {
          background: linear-gradient(110deg, var(--cyan), #a5d9ff 48%, var(--violet));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(154, 174, 216, 0.1);
          background: rgba(7, 10, 18, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .nav-inner {
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .brand-mark {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(105, 240, 208, 0.4);
          border-radius: 12px;
          color: var(--cyan);
          background: rgba(105, 240, 208, 0.07);
          box-shadow: inset 0 0 18px rgba(105, 240, 208, 0.04);
          font: 500 15px var(--mono);
          transition:
            transform 300ms ease,
            background 300ms ease,
            box-shadow 300ms ease;
        }

        .brand:hover .brand-mark {
          transform: rotate(-8deg);
          background: rgba(105, 240, 208, 0.14);
          box-shadow: 0 0 24px rgba(105, 240, 208, 0.15);
        }

        .brand-name {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.035em;
        }

        .brand-caption {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font: 9px var(--mono);
          letter-spacing: 0.09em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 27px;
        }

        .nav-links a {
          position: relative;
          padding: 9px 0;
          color: #aeb9cf;
          font-size: 12px;
          font-weight: 600;
          transition: color 250ms ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          bottom: 1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--cyan);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 250ms ease;
        }

        .nav-links a:hover {
          color: var(--cyan);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-cta,
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(105, 240, 208, 0.4);
          border-radius: 10px;
          padding: 12px 17px;
          color: var(--cyan);
          background: rgba(105, 240, 208, 0.07);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition:
            transform 250ms ease,
            background 250ms ease,
            border-color 250ms ease,
            box-shadow 250ms ease;
        }

        .nav-cta:hover,
        .btn:hover {
          transform: translateY(-3px);
          border-color: var(--cyan);
          background: rgba(105, 240, 208, 0.13);
          box-shadow: 0 8px 28px rgba(105, 240, 208, 0.1);
        }

        .menu-toggle {
          display: none;
          width: 43px;
          height: 43px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          border-radius: 10px;
          background: var(--surface);
          color: var(--text);
          cursor: pointer;
        }

        .hero {
          min-height: 700px;
          min-height: min(800px, calc(100svh - 78px));
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          align-items: center;
          gap: 35px;
          padding-top: 65px;
          padding-bottom: 65px;
        }

        .hero-copy {
          position: relative;
          z-index: 2;
        }

        .availability {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 12px;
          border: 1px solid rgba(105, 240, 208, 0.2);
          border-radius: 999px;
          background: rgba(105, 240, 208, 0.045);
          color: #c7d5e6;
          font: 10px var(--mono);
          letter-spacing: 0.04em;
        }

        .availability-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 12px rgba(105, 240, 208, 0.75);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .hero h1 {
          margin: 26px 0 18px;
          max-width: 690px;
          font-size: clamp(46px, 6.1vw, 76px);
          font-weight: 800;
          letter-spacing: -0.075em;
          line-height: 1.03;
        }

        .hero h1 .line-two {
          display: block;
          margin-top: 7px;
        }

        .hero-subtitle {
          margin: 0;
          color: #c4cee0;
          font-size: clamp(15px, 1.6vw, 18px);
          font-weight: 500;
          line-height: 1.8;
        }

        .hero-description {
          max-width: 520px;
          margin: 16px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.95;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 30px;
        }

        .btn-primary {
          color: #07120f;
          border-color: transparent;
          background: linear-gradient(110deg, var(--cyan), #a5f5e3);
          box-shadow: 0 8px 30px rgba(105, 240, 208, 0.1);
        }

        .btn-primary:hover {
          color: #07120f;
          background: linear-gradient(110deg, #91f8df, #c0fff1);
          box-shadow: 0 12px 35px rgba(105, 240, 208, 0.22);
        }

        .btn-secondary {
          border-color: var(--line);
          color: #d8e0ef;
          background: rgba(255, 255, 255, 0.025);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 39px;
          color: #8592ad;
          font: 10px var(--mono);
          letter-spacing: 0.04em;
        }

        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .hero-meta svg {
          color: var(--cyan);
        }

        .hero-visual {
          position: relative;
          display: grid;
          min-height: 440px;
          place-items: center;
          isolation: isolate;
        }

        .visual-grid {
          position: absolute;
          inset: 5% -5% 0;
          z-index: -1;
          opacity: 0.3;
          background-image:
            linear-gradient(rgba(123, 150, 208, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 150, 208, 0.1) 1px, transparent 1px);
          background-size: 31px 31px;
          mask-image: radial-gradient(ellipse, black, transparent 72%);
        }

        .core-stage {
          position: relative;
          display: grid;
          width: min(390px, 100%);
          aspect-ratio: 1;
          place-items: center;
          animation: core-float 7s ease-in-out infinite;
        }

        .core-halo {
          position: absolute;
          width: 90%;
          height: 90%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 211, 194, 0.12), rgba(121, 89, 226, 0.08) 38%, transparent 70%);
          filter: blur(8px);
          animation: halo-breathe 5s ease-in-out infinite alternate;
        }

        .core-ring {
          position: absolute;
          border: 1px solid rgba(123, 173, 222, 0.22);
          border-radius: 50%;
        }

        .core-ring-one {
          inset: 8%;
          animation: orbit-spin 30s linear infinite;
        }

        .core-ring-two {
          inset: 17%;
          border-style: dashed;
          border-color: rgba(105, 240, 208, 0.27);
          animation: orbit-spin 42s linear infinite reverse;
        }

        .core-ring-three {
          inset: 25%;
          border-color: rgba(183, 160, 255, 0.4);
          animation: orbit-spin 20s linear infinite;
        }

        .core-ring-one::before,
        .core-ring-two::before,
        .core-ring-three::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 18px var(--cyan);
        }

        .core-ring-two::before {
          background: var(--violet);
          box-shadow: 0 0 18px var(--violet);
        }

        .core-ring-three::before {
          top: 10%;
          left: 76%;
          width: 5px;
          height: 5px;
        }

        .core-center {
          position: relative;
          display: grid;
          width: 36%;
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgba(105, 240, 208, 0.65);
          border-radius: 31%;
          background: linear-gradient(145deg, rgba(105, 240, 208, 0.16), rgba(133, 94, 246, 0.16));
          box-shadow:
            inset 0 0 30px rgba(105, 240, 208, 0.12),
            0 0 70px rgba(105, 240, 208, 0.13),
            0 0 110px rgba(142, 108, 250, 0.1);
          transform: rotate(45deg);
          transition:
            box-shadow 400ms ease,
            border-color 400ms ease;
        }

        .core-stage:hover .core-center {
          border-color: var(--cyan);
          box-shadow:
            inset 0 0 40px rgba(105, 240, 208, 0.2),
            0 0 90px rgba(105, 240, 208, 0.2),
            0 0 140px rgba(142, 108, 250, 0.16);
        }

        .core-center-inner {
          display: grid;
          width: 70%;
          aspect-ratio: 1;
          place-items: center;
          border: 1px solid rgba(223, 248, 255, 0.25);
          border-radius: 25%;
          background: rgba(9, 16, 29, 0.85);
          transform: rotate(-45deg);
        }

        .core-center-inner svg {
          width: 58%;
          color: var(--cyan);
          filter: drop-shadow(0 0 10px rgba(105, 240, 208, 0.5));
        }

        .orbit-label {
          position: absolute;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid rgba(148, 173, 216, 0.2);
          border-radius: 9px;
          background: rgba(12, 18, 33, 0.88);
          color: #d7e1f3;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
          font: 9px var(--mono);
          backdrop-filter: blur(12px);
          animation: label-float 5s ease-in-out infinite;
        }

        .orbit-label svg {
          color: var(--cyan);
        }

        .label-top {
          top: 12%;
          right: 1%;
        }

        .label-left {
          top: 44%;
          left: -2%;
          animation-delay: -1.7s;
        }

        .label-bottom {
          right: 5%;
          bottom: 13%;
          animation-delay: -3s;
        }

        .visual-caption {
          position: absolute;
          right: 0;
          bottom: 0;
          color: #64718e;
          font: 9px var(--mono);
          letter-spacing: 0.13em;
        }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .stat-item {
          padding: 24px 28px;
          border-right: 1px solid var(--line);
        }

        .stat-item:first-child {
          padding-left: 0;
        }

        .stat-item:last-child {
          border-right: 0;
        }

        .stat-number {
          display: block;
          color: var(--text);
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .stat-label {
          display: block;
          margin-top: 7px;
          color: var(--muted);
          font: 9px var(--mono);
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          align-items: start;
          gap: 70px;
        }

        .about-card {
          position: relative;
          overflow: hidden;
          padding: 31px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(19, 29, 51, 0.84), rgba(10, 14, 26, 0.84));
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .about-card:hover {
          transform: translateY(-4px);
          border-color: rgba(105, 240, 208, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.14);
        }

        .about-card::after {
          content: "";
          position: absolute;
          right: -70px;
          top: -70px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(105, 240, 208, 0.07);
          filter: blur(40px);
          pointer-events: none;
        }

        .about-symbol {
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          margin-bottom: 28px;
          border: 1px solid rgba(105, 240, 208, 0.24);
          border-radius: 17px;
          background: rgba(105, 240, 208, 0.06);
          color: var(--cyan);
        }

        .about-card h3 {
          margin: 0;
          font-size: 20px;
          letter-spacing: -0.04em;
        }

        .about-card p {
          margin: 12px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .about-detail {
          display: flex;
          align-items: start;
          gap: 14px;
          padding: 17px 0;
          border-bottom: 1px solid var(--line);
        }

        .about-detail:last-child {
          border-bottom: 0;
        }

        .detail-icon {
          display: grid;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          place-items: center;
          border: 1px solid var(--line);
          border-radius: 10px;
          color: var(--cyan);
          background: rgba(255, 255, 255, 0.025);
        }

        .detail-label {
          color: #7886a2;
          font: 9px var(--mono);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .detail-value {
          margin-top: 5px;
          color: #e1e8f7;
          font-size: 13px;
          line-height: 1.7;
        }

        .skills-section {
          border-block: 1px solid rgba(154, 174, 216, 0.08);
          background: linear-gradient(180deg, rgba(14, 19, 34, 0.5), rgba(9, 12, 22, 0.3));
        }

        .skill-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 27px;
        }

        .filter-button {
          padding: 10px 13px;
          border: 1px solid var(--line);
          border-radius: 8px;
          color: #9aa6bf;
          background: transparent;
          font: 9px var(--mono);
          cursor: pointer;
          transition:
            color 250ms ease,
            border-color 250ms ease,
            background 250ms ease,
            transform 250ms ease;
        }

        .filter-button:hover {
          transform: translateY(-2px);
          color: var(--text);
          border-color: rgba(105, 240, 208, 0.35);
        }

        .filter-button.active {
          color: var(--cyan);
          border-color: rgba(105, 240, 208, 0.36);
          background: rgba(105, 240, 208, 0.08);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .skill-card {
          min-height: 140px;
          padding: 19px;
          border: 1px solid var(--line);
          border-radius: 13px;
          background: rgba(16, 23, 42, 0.55);
          transition:
            transform 300ms ease,
            border-color 300ms ease,
            background 300ms ease,
            box-shadow 300ms ease;
          animation: skill-enter 400ms both;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(105, 240, 208, 0.3);
          background: rgba(20, 31, 49, 0.85);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
        }

        .skill-symbol {
          display: grid;
          width: 33px;
          height: 33px;
          place-items: center;
          margin-bottom: 22px;
          border: 1px solid rgba(105, 240, 208, 0.18);
          border-radius: 10px;
          color: var(--cyan);
          background: rgba(105, 240, 208, 0.055);
        }

        .skill-name {
          color: #e2e9f8;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.6;
        }

        .skill-level {
          margin-top: 5px;
          color: #7986a2;
          font-size: 10px;
          line-height: 1.6;
        }

        .skill-note {
          display: flex;
          align-items: start;
          gap: 12px;
          margin-top: 24px;
          padding: 15px 17px;
          border: 1px solid rgba(183, 160, 255, 0.17);
          border-radius: 10px;
          color: #a9b5cd;
          background: rgba(183, 160, 255, 0.035);
          font-size: 11px;
          line-height: 1.8;
        }

        .skill-note svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--violet);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .project-card {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: linear-gradient(180deg, rgba(18, 25, 43, 0.88), rgba(11, 15, 27, 0.92));
          transition:
            transform 350ms cubic-bezier(0.2, 0.7, 0.2, 1),
            border-color 350ms ease,
            box-shadow 350ms ease;
          animation: skill-enter 600ms both;
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: color-mix(in srgb, var(--project-color) 45%, transparent);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
        }

        .project-art {
          position: relative;
          display: grid;
          min-height: 225px;
          place-items: center;
          overflow: hidden;
          border-bottom: 1px solid var(--line);
          background:
            radial-gradient(ellipse at center, color-mix(in srgb, var(--project-color) 9%, transparent), transparent 65%),
            rgba(8, 12, 23, 0.65);
        }

        .project-art::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.25;
          background-image:
            linear-gradient(rgba(123, 150, 208, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 150, 208, 0.14) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(ellipse, black, transparent 78%);
        }

        .project-number {
          position: absolute;
          top: 17px;
          left: 18px;
          color: #687590;
          font: 10px var(--mono);
        }

        .project-status {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 8px;
          border: 1px solid var(--line);
          border-radius: 5px;
          color: #a7b5cf;
          background: rgba(8, 12, 23, 0.65);
          font: 8px var(--mono);
        }

        .project-graphic {
          position: relative;
          width: min(290px, 92%);
          transition: transform 450ms ease;
        }

        .project-card:hover .project-graphic {
          transform: scale(1.055);
        }

        .project-graphic svg {
          display: block;
          width: 100%;
          overflow: visible;
          stroke: var(--graphic-color);
          stroke-width: 1.1;
        }

        .project-graphic rect {
          fill: color-mix(in srgb, var(--graphic-color) 7%, #10172a);
          stroke: color-mix(in srgb, var(--graphic-color) 65%, transparent);
        }

        .project-graphic .graphic-line {
          stroke-dasharray: 4 4;
          opacity: 0.7;
        }

        .project-graphic .graphic-dot {
          fill: var(--graphic-color);
          stroke: none;
          filter: drop-shadow(0 0 6px var(--graphic-color));
        }

        .graphic-agent .agent-ring {
          stroke-dasharray: 4 6;
          fill: none;
          opacity: 0.65;
        }

        .graphic-agent .agent-core {
          fill: color-mix(in srgb, var(--graphic-color) 14%, #10172a);
          stroke: var(--graphic-color);
        }

        .project-content {
          padding: 24px;
        }

        .project-type {
          color: var(--project-color);
          font: 9px var(--mono);
          letter-spacing: 0.1em;
        }

        .project-title {
          margin: 11px 0 10px;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .project-description {
          min-height: 84px;
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 20px;
        }

        .project-tag {
          padding: 6px 8px;
          border: 1px solid var(--line);
          border-radius: 5px;
          color: #a3b0c9;
          font: 9px var(--mono);
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
          color: #8190ab;
          font: 9px var(--mono);
        }

        .project-footer svg {
          color: var(--project-color);
          transition: transform 250ms ease;
        }

        .project-card:hover .project-footer svg {
          transform: translate(3px, -3px);
        }

        .project-disclaimer {
          margin: 19px 0 0;
          color: #7886a0;
          font-size: 11px;
          line-height: 1.8;
        }

        .journey-layout {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 70px;
        }

        .journey-intro {
          position: sticky;
          top: 120px;
          align-self: start;
        }

        .journey-intro p {
          max-width: 340px;
          margin-top: 20px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .timeline {
          position: relative;
          padding-left: 31px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          top: 10px;
          bottom: 30px;
          left: 6px;
          width: 1px;
          background: linear-gradient(var(--cyan), rgba(183, 160, 255, 0.15));
        }

        .timeline-item {
          position: relative;
          padding: 0 0 37px 14px;
        }

        .timeline-dot {
          position: absolute;
          top: 5px;
          left: -31px;
          width: 13px;
          height: 13px;
          border: 2px solid var(--cyan);
          border-radius: 50%;
          background: var(--bg);
          box-shadow: 0 0 15px rgba(105, 240, 208, 0.15);
          transition:
            transform 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.25);
          background: var(--cyan);
          box-shadow: 0 0 20px rgba(105, 240, 208, 0.35);
        }

        .timeline-year {
          color: var(--cyan);
          font: 10px var(--mono);
          letter-spacing: 0.1em;
        }

        .timeline-title {
          margin: 10px 0 5px;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .timeline-subtitle {
          color: #c3cde0;
          font-size: 12px;
        }

        .timeline-description {
          max-width: 500px;
          margin: 12px 0 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .contact-section {
          padding-bottom: 100px;
        }

        .contact-panel {
          position: relative;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 60px;
          overflow: hidden;
          padding: clamp(25px, 5vw, 58px);
          border: 1px solid rgba(105, 240, 208, 0.2);
          border-radius: 22px;
          background:
            radial-gradient(ellipse at 5% 5%, rgba(105, 240, 208, 0.075), transparent 45%),
            radial-gradient(ellipse at 95% 100%, rgba(183, 160, 255, 0.07), transparent 45%),
            rgba(12, 17, 31, 0.9);
        }

        .contact-copy h2 {
          margin: 19px 0 15px;
          font-size: clamp(34px, 4.4vw, 52px);
          font-weight: 800;
          letter-spacing: -0.065em;
          line-height: 1.1;
        }

        .contact-copy > p {
          max-width: 380px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.95;
        }

        .contact-methods {
          display: grid;
          gap: 13px;
          margin-top: 29px;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d6deee;
          font-size: 12px;
          transition: color 250ms ease;
        }

        .contact-method:hover {
          color: var(--cyan);
        }

        .contact-method .detail-icon {
          width: 39px;
          height: 39px;
        }

        .contact-form {
          display: grid;
          gap: 16px;
          align-content: start;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-field {
          display: grid;
          gap: 8px;
          color: #aab6cd;
          font: 10px var(--mono);
          letter-spacing: 0.03em;
        }

        .form-field input,
        .form-field textarea {
          width: 100%;
          min-width: 0;
          border: 1px solid rgba(154, 174, 216, 0.18);
          border-radius: 9px;
          padding: 13px 14px;
          color: var(--text);
          background: rgba(5, 9, 19, 0.55);
          font: 12px var(--sans);
          letter-spacing: normal;
          transition:
            border-color 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #687590;
        }

        .form-field input:hover,
        .form-field textarea:hover {
          border-color: rgba(154, 174, 216, 0.32);
        }

        .form-field input:focus,
        .form-field textarea:focus {
          outline: none;
          border-color: rgba(105, 240, 208, 0.65);
          background: rgba(5, 9, 19, 0.8);
          box-shadow: 0 0 0 3px rgba(105, 240, 208, 0.07);
        }

        .form-field textarea {
          min-height: 118px;
          resize: vertical;
          line-height: 1.8;
        }

        .contact-submit {
          justify-self: start;
          margin-top: 3px;
        }

        .form-status {
          margin: 0;
          color: var(--cyan);
          font-size: 11px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .footer {
          border-top: 1px solid var(--line);
          background: rgba(7, 10, 18, 0.6);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-block: 25px;
        }

        .footer-copy {
          color: #7886a0;
          font-size: 10px;
          line-height: 1.8;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 19px;
        }

        .footer-links a {
          color: #98a5bd;
          font: 10px var(--mono);
          transition: color 250ms ease;
        }

        .footer-links a:hover {
          color: var(--cyan);
        }

        @keyframes pulse-dot {
          0%, 100% {
            box-shadow: 0 0 7px rgba(105, 240, 208, 0.45);
          }
          50% {
            box-shadow: 0 0 15px rgba(105, 240, 208, 0.9);
          }
        }

        @keyframes core-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes halo-breathe {
          from {
            opacity: 0.55;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes label-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes skill-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1400px) {
          .hero {
            min-height: 780px;
          }
        }

        @media (max-width: 980px) {
          .nav-links {
            gap: 17px;
          }

          .nav-links a {
            font-size: 11px;
          }

          .hero {
            grid-template-columns: 1.05fr 0.95fr;
            gap: 12px;
          }

          .hero h1 {
            font-size: clamp(45px, 6.3vw, 65px);
          }

          .hero-visual {
            min-height: 350px;
          }

          .core-stage {
            width: min(340px, 100%);
          }

          .orbit-label {
            padding: 8px;
            font-size: 8px;
          }

          .about-grid,
          .journey-layout {
            gap: 40px;
          }

          .skills-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .project-description {
            min-height: auto;
          }

          .contact-panel {
            gap: 35px;
          }
        }

        @media (max-width: 720px) {
          .site-shell {
            width: min(100% - 36px, 560px);
          }

          .section {
            padding: 78px 0;
          }

          .nav-inner {
            min-height: 70px;
          }

          .menu-toggle {
            display: inline-flex;
          }

          .nav-cta {
            display: none;
          }

          .nav-links {
            position: absolute;
            top: calc(100% + 1px);
            right: 0;
            left: 0;
            display: flex;
            align-items: stretch;
            flex-direction: column;
            gap: 3px;
            padding: 13px 18px 19px;
            border-bottom: 1px solid var(--line);
            background: rgba(7, 10, 18, 0.97);
            backdrop-filter: blur(18px);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition:
              opacity 220ms ease,
              transform 220ms ease,
              visibility 220ms ease;
          }

          .nav-links.nav-open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .nav-links a {
            padding: 12px 4px;
            font-size: 13px;
          }

          .nav-links a::after {
            display: none;
          }

          .hero {
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 14px;
            padding-top: 75px;
            padding-bottom: 55px;
          }

          .hero h1 {
            font-size: clamp(46px, 11vw, 68px);
          }

          .hero-description {
            max-width: 500px;
          }

          .hero-visual {
            min-height: 370px;
            margin-top: 3px;
          }

          .core-stage {
            width: min(335px, 85vw);
          }

          .label-left {
            left: 0;
          }

          .visual-caption {
            right: 5px;
          }

          .stats-strip {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .stat-item {
            padding: 20px 12px;
          }

          .stat-number {
            font-size: 17px;
          }

          .stat-label {
            font-size: 8px;
            line-height: 1.7;
          }

          .section-heading {
            align-items: start;
            flex-direction: column;
            gap: 17px;
            margin-bottom: 31px;
          }

          .section-description {
            max-width: 500px;
          }

          .about-grid,
          .journey-layout,
          .contact-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-card {
            padding: 25px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .skill-card {
            min-height: 132px;
            padding: 16px;
          }

          .skill-symbol {
            margin-bottom: 16px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-art {
            min-height: 220px;
          }

          .project-content {
            padding: 21px;
          }

          .journey-intro {
            position: static;
          }

          .contact-panel {
            padding: 26px 20px;
            border-radius: 16px;
          }

          .contact-copy h2 {
            font-size: 43px;
          }

          .footer-inner {
            align-items: start;
            flex-direction: column;
            gap: 16px;
          }
        }

        @media (max-width: 390px) {
          .site-shell {
            width: calc(100% - 28px);
          }

          .hero h1 {
            font-size: 43px;
          }

          .hero-meta {
            gap: 12px;
            font-size: 9px;
          }

          .hero-visual {
            min-height: 315px;
          }

          .orbit-label {
            font-size: 7px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .filter-button {
            padding: 9px 10px;
            font-size: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      {/* Navigation */}
      <header className="topbar">
        <div className="site-shell nav-inner">
          <a className="brand" href="#home" aria-label="Abdul Saboor home">
            <span className="brand-mark">AS.</span>
            <span>
              <span className="brand-name">Abdul Saboor</span>
              <span className="brand-caption">AI DEVELOPER IN THE MAKING</span>
            </span>
          </a>

          <nav
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Journey", "#journey"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Let&apos;s connect <ArrowIcon diagonal />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="site-shell hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            EXPLORING THE FUTURE OF AI
          </div>

          <h1>
            Building a
            <span className="line-two gradient-text">smarter future.</span>
          </h1>

          <p className="hero-subtitle">
            I&apos;m Abdul Saboor — an aspiring AI Developer.
          </p>

          <p className="hero-description">
            Exploring Agentic AI, intelligent automation, and modern web
            development to turn ambitious ideas into useful digital experiences.
            I&apos;m learning by building, experimenting, and solving problems.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>
            <a className="btn btn-secondary" href="#about">
              Get to know me <ArrowIcon diagonal />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <SparkIcon /> AI & AUTOMATION
            </span>
            <span>
              <SparkIcon /> WEB DEVELOPMENT
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Animated AI-inspired illustration">
          <div className="visual-grid" />

          <div className="core-stage">
            <div className="core-halo" />
            <div className="core-ring core-ring-one" />
            <div className="core-ring core-ring-two" />
            <div className="core-ring core-ring-three" />

            <div className="core-center">
              <div className="core-center-inner">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M50 15v10M50 75v10M15 50h10M75 50h10" />
                  <rect x="30" y="30" width="40" height="40" rx="11" />
                  <path d="M40 44h20M40 56h13" />
                  <circle cx="62" cy="56" r="2" fill="currentColor" />
                  <path d="m38 30-5-7m29 7 5-7M38 70l-5 7m29-7 5 7" />
                </svg>
              </div>
            </div>

            <div className="orbit-label label-top">
              <SparkIcon /> AGENTIC AI
            </div>
            <div className="orbit-label label-left">
              <SparkIcon /> AUTOMATION
            </div>
            <div className="orbit-label label-bottom">
              <SparkIcon /> INTELLIGENCE
            </div>
          </div>

          <span className="visual-caption">IDEAS → SYSTEMS → IMPACT</span>
        </div>
      </section>

      {/* Quick introduction */}
      <div className="site-shell stats-strip reveal" aria-label="Portfolio overview">
        <div className="stat-item">
          <span className="stat-number">AI + Code</span>
          <span className="stat-label">Areas of exploration</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Build & Learn</span>
          <span className="stat-label">My working mindset</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Real Problems</span>
          <span className="stat-label">The goal behind every idea</span>
        </div>
      </div>

      {/* About */}
      <section className="site-shell section reveal" id="about">
        <div className="about-grid">
          <div>
            <span className="eyebrow">01 / ABOUT ME</span>
            <h2 className="section-title">
              Curious mind.
              <br />
              <span className="gradient-text">Builder mindset.</span>
            </h2>

            <p className="section-description" style={{ marginTop: 22 }}>
              I&apos;m a university student developing my skills at the
              intersection of artificial intelligence, automation, and digital
              experiences.
            </p>

            <p className="section-description" style={{ marginTop: 14 }}>
              My goal is to understand how intelligent systems work and learn
              how to use technology to make everyday tasks simpler, smarter,
              and more efficient.
            </p>
          </div>

          <div>
            <article className="about-card">
              <div className="about-symbol">
                <SparkIcon />
              </div>
              <h3>From curiosity to creation.</h3>
              <p>
                I believe the best way to learn technology is to experiment
                with it. I&apos;m exploring AI-powered workflows, modern
                websites, and agent-based systems while strengthening my
                technical foundation one project at a time.
              </p>
            </article>

            <div style={{ marginTop: 22 }}>
              <div className="about-detail">
                <div className="detail-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" />
                    <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="detail-label">EDUCATION</div>
                  <div className="detail-value">BS Student · University of Sargodha</div>
                </div>
              </div>

              <div className="about-detail">
                <div className="detail-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                    <circle cx="12" cy="12" r="6" />
                    <path d="m10 12 1.5 1.5L14.5 10" />
                  </svg>
                </div>
                <div>
                  <div className="detail-label">CURRENT FOCUS</div>
                  <div className="detail-value">Agentic AI, automation & web development</div>
                </div>
              </div>

              <div className="about-detail">
                <div className="detail-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18m9-9H3" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div>
                  <div className="detail-label">PERSONAL APPROACH</div>
                  <div className="detail-value">Stay curious. Keep learning. Build with purpose.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section reveal" id="skills">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / SKILL MATRIX</span>
              <h2 className="section-title">
                Tools for the <span className="gradient-text">next era.</span>
              </h2>
            </div>
            <p className="section-description">
              A growing toolkit across intelligent automation, web development,
              and digital productivity.
            </p>
          </div>

          <div className="skill-filters" role="group" aria-label="Filter skills by category">
            {categories.map((category) => (
              <button
                className={`filter-button ${activeFilter === category ? "active" : ""}`}
                key={category}
                type="button"
                aria-pressed={activeFilter === category}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-grid" aria-live="polite">
            {filteredSkills.map((skill, index) => (
              <article
                className="skill-card"
                key={skill.name}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <div className="skill-symbol">
                  <SparkIcon />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </article>
            ))}
          </div>

          <div className="skill-note">
            <SparkIcon />
            <span>
              <strong style={{ color: "#dce5f6" }}>Always evolving.</strong>{" "}
              These skills reflect my current learning journey, not a claim of
              expert-level proficiency. I&apos;m focused on practice, progress,
              and applying what I learn.
            </span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="site-shell section reveal" id="projects">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / SELECTED WORK</span>
            <h2 className="section-title">
              Ideas taking <span className="gradient-text">shape.</span>
            </h2>
          </div>
          <p className="section-description">
            A look at the types of AI and web experiences I&apos;m interested
            in exploring and building.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.number}
              style={
                {
                  "--project-color": project.color,
                  animationDelay: `${index * 120}ms`,
                } as React.CSSProperties
              }
            >
              <div className="project-art">
                <span className="project-number">PROJECT / {project.number}</span>
                <span className="project-status">{project.status}</span>
                <ProjectGraphic icon={project.icon} color={project.color} />
              </div>

              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>EXPLORATION / {project.number}</span>
                  <ArrowIcon diagonal />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="project-disclaimer">
          Note: These cards represent portfolio concepts and areas of exploration.
          Replace them with your actual projects, screenshots, repositories, and
          live demos as you complete your work.
        </p>
      </section>

      {/* Journey */}
      <section className="section skills-section reveal" id="journey">
        <div className="site-shell journey-layout">
          <div className="journey-intro">
            <span className="eyebrow">04 / MY JOURNEY</span>
            <h2 className="section-title">
              Progress over <span className="gradient-text">perfection.</span>
            </h2>
            <p>
              Every skill begins with curiosity. My journey is about building a
              strong foundation, learning through practice, and gradually
              turning knowledge into useful solutions.
            </p>
          </div>

          <div className="timeline">
            {journey.map((item) => (
              <article className="timeline-item" key={item.year}>
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">{item.subtitle}</div>
                <p className="timeline-description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="site-shell section contact-section reveal" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let&apos;s explore it.</span>
            </h2>
            <p>
              Interested in AI, automation, web development, or collaborating
              on a creative idea? Send me a message and let&apos;s start a
              conversation.
            </p>

            <div className="contact-methods">
              <a className="contact-method" href="mailto:kahut260@gmail.com">
                <span className="detail-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>Email me</span>
                <ArrowIcon diagonal />
              </a>

              <a
                className="contact-method"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="detail-icon">
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 8.5A2 2 0 1 0 6.5 4.5a2 2 0 0 0 0 4ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V19h-3v-4.2c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V19h-3v-9Z" />
                  </svg>
                </span>
                <span>LinkedIn</span>
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <label className="form-field">
                YOUR NAME
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="form-field">
                YOUR EMAIL
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label className="form-field">
              SUBJECT
              <input
                type="text"
                name="subject"
                placeholder="Let's build something useful"
                required
              />
            </label>

            <label className="form-field">
              YOUR MESSAGE
              <textarea
                name="message"
                placeholder="Tell me a little about your idea..."
                required
              />
            </label>

            <button className="btn btn-primary contact-submit" type="submit">
              Prepare email <ArrowIcon />
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {formStatus}
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="site-shell footer-inner">
          <div className="footer-copy">
            © {new Date().getFullYear()} Abdul Saboor. Built with curiosity and code.
          </div>

          <div className="footer-links">
            <a href="#home">BACK TO TOP ↑</a>
            <a href="#about">ABOUT</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
