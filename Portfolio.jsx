/*
Advanced Portfolio - Single-file React component
Features:
- Tailwind CSS utility classes (assumed configured in project)
- Framer Motion animations
- shadcn/ui components & lucide-react icons (optional)
- Responsive layout, dark mode toggle, project grid, skills, contact form stub

How to use:
1. Create a React app (Vite recommended) with Tailwind.
2. Install dependencies: framer-motion, lucide-react, @radix-ui/react-icons (optional), shadcn/ui if desired.
   npm i framer-motion lucide-react
3. Drop this file as src/components/Portfolio.jsx and import it in App.jsx
4. Replace placeholder texts, images, project links, and contact form handling.

Note: Tailwind must be configured with dark mode (class) for the dark toggle to work.
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  const projects = [
    {
      title: "Smart Home Dashboard",
      desc: "Embedded IoT dashboard for real-time sensor monitoring & control.",
      tech: ["React", "MQTT", "ESP32", "Tailwind"],
      link: "#",
    },
    {
      title: "E-Commerce UI Kit",
      desc: "A production-ready, accessible UI kit with animations and components.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "Data Visualizer",
      desc: "Interactive charts and CSV import for exploratory data analysis.",
      tech: ["D3", "React", "Python (API)"],
      link: "#",
    },
  ];

  const skills = [
    "Java", "Full-Stack Development", "Python", "DSA", "Microservices", "Embedded IoT", "React", "Node.js"
  ];

  return (
    <div className={"min-h-screen transition-colors " + (dark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900")}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Header dark={dark} setDark={setDark} />

        <main className="mt-10">
          <Hero />

          <section className="mt-16">
            <SectionTitle number="01" title="Projects" subtitle="Selected work — craft, scale, impact." />
            <motion.div layout className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {projects.map((p, i) => (
                <ProjectCard key={i} project={p} delay={i * 0.08} />
              ))}
            </motion.div>
          </section>

          <section className="mt-16">
            <SectionTitle number="02" title="Skills" subtitle="What I use to build products." />
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={"px-4 py-2 rounded-full text-sm font-medium border " + (dark ? "border-gray-700" : "border-gray-200")}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionTitle number="03" title="About" subtitle="Who I am and what I value." />
            <div className={"mt-6 prose max-w-none " + (dark ? "prose-invert" : "") }>
              <p>
                I'm a B.Tech CSE student building full-stack products and embedded IoT systems. I focus on
                clean interfaces, robust backends, and measurable user impact. I'm actively looking for
                internships and early-career roles where I can grow and contribute to real-world systems.
              </p>
              <ul>
                <li>Open to collaborations, remote internships, and early-career full-time roles.</li>
                <li>Comfortable with data structures, algorithms, and system design basics.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <SectionTitle number="04" title="Contact" subtitle="Let's build something together." />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <ContactCard />
              </div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }} className={"p-6 rounded-2xl " + (dark ? "bg-gray-800" : "bg-gray-50") }>
                <h3 className="text-lg font-semibold">Quick message</h3>
                <p className="mt-2 text-sm">Shoot me an email or use the form. I'll get back within a few days.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" aria-label="GitHub" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <footer className={"mt-20 py-8 text-center border-t " + (dark ? "border-gray-800" : "border-gray-100")}>
            <p className="text-sm">© {new Date().getFullYear()} — Your Name. Built with ❤️ and React.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function Header({ dark, setDark }) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">Y</div>
        <div>
          <h1 className="text-lg font-bold">Your Name</h1>
          <p className="text-sm opacity-70">B.Tech CSE · Full-Stack & Embedded IoT</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => setDark(!dark)} className="p-2 rounded-md border" aria-label="Toggle dark">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium">Contact</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm text-indigo-500 font-semibold">Hi, I'm</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Your Name — Software & Embedded Engineer</h2>
        <p className="mt-4 text-lg leading-relaxed max-w-xl">I build performant web apps and robust embedded systems. I enjoy turning complex problems into elegant, user-friendly solutions — with a strong focus on code quality, testing and maintainability.</p>

        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md border font-medium">See projects</a>
          <a href="/resume.pdf" className="px-5 py-3 rounded-md bg-indigo-600 text-white font-medium">Download CV</a>
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm opacity-80">
          <div className="inline-flex items-center gap-2">
            <Github size={16} /> <span>github.com/yourhandle</span>
          </div>
          <div className="inline-flex items-center gap-2 ml-4">
            <Linkedin size={16} /> <span>/in/yourprofile</span>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-end">
        <div className="w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          {/* Replace this placeholder with a profile image or Lottie animation */}
          <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-pink-200 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/90">YN</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm text-indigo-500 font-semibold">{number}</h3>
        <h2 className="text-2xl font-bold mt-1">{title}</h2>
        <p className="mt-1 text-sm opacity-70">{subtitle}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.article initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className={"p-6 rounded-2xl shadow-lg " + ("bg-white/60 backdrop-blur-sm") }>
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="mt-2 text-sm opacity-80">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-md border">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <a href={project.link} className="text-sm font-medium">View →</a>
        <div className="text-xs opacity-70">Case study available</div>
      </div>
    </motion.article>
  );
}

function ContactCard() {
  return (
    <div>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 }} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm">
        <h3 className="text-lg font-semibold">Get in touch</h3>
        <p className="mt-2 text-sm opacity-80">I'm open to internships and early-career roles. Send a quick message or email me directly.</p>

        <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Replace this handler with real form submission (Email/Netlify/Backend).'); }}>
          <div>
            <label className="text-xs font-medium">Name</label>
            <input required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs font-medium">Email</label>
            <input type="email" required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-xs font-medium">Message</label>
            <textarea required className="mt-1 w-full rounded-md border px-3 py-2" rows={4} placeholder="Brief message..." />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send message</button>
            <a href="mailto:youremail@example.com" className="text-sm inline-flex items-center gap-2"><Mail size={14}/> Email me</a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
