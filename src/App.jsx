import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  FileText,
  Award,
  Briefcase,
  Code2,
  Sparkles,
} from "lucide-react";

export default function HarshPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "projects",
        "dev-projects",
        "experience",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Customer Shopping Behavior Analysis",
      period: "Dec 2025",
      tech: ["Python", "PostgreSQL", "Power BI"],
      highlights: [
        "Cleaned and analyzed 3.9K+ retail transactions using Python (pandas, NumPy), identifying missing data patterns and key customer behavior trends",
        "Performed SQL-based customer segmentation in PostgreSQL, showing 80% loyal customers and 2× higher revenue from male customers",
        "Developed an interactive Power BI dashboard to track KPIs, revealing 27% subscription adoption and top-performing product categories",
      ],
      gradient: "from-pink-500 to-rose-600",
      link: "https://github.com/harshrg2003/Customer-Behavior-Analysis",
    },
    {
      title: "Cyclistic Bike-Share Analysis",
      period: "Sep - Oct 2025",
      tech: ["R", "RStudio", "tidyverse", "ggplot2"],
      highlights: [
        "Analyzed 700K+ trip records using R programming, uncovering behavioral trends between casual riders and annual members",
        "Cleaned, merged, and standardized 4 months of raw data, improving data quality by 98%",
        "Engineered interactive visualizations revealing that casual riders averaged 32% longer trips",
        "Delivered 3 actionable marketing recommendations projected to increase conversion by 15–20%",
      ],
      gradient: "from-violet-500 to-purple-600",
      link: "https://github.com/harshrg2003/cyclistic-bike-share-capstone",
    },
    {
      title: "Superstore Sales Dashboard",
      period: "Aug - Sep 2025",
      tech: ["Google Sheets", "Looker Studio"],
      highlights: [
        "Transformed 10K+ Superstore records (2014–2017), deriving new business metrics",
        "Developed a 6-page automated dashboard visualizing regional sales and profitability",
        "Performed trend analysis identifying 26% loss-making orders and low-margin categories",
        "Recommended optimization strategies projecting 5pp profit margin improvement",
      ],
      gradient: "from-blue-500 to-cyan-600",
      link: "https://github.com/harshrg2003/Superstore-sales-profitability-dashboard",
    },
  ];
  const devProjects = [
    {
      title: "C Code Visualizer",
      period: "2023-2024",
      team: "Team of 2",
      tech: ["JavaScript", "HTML/CSS", "ES5"],
      description:
        "A web-based interpreter and visualizer for C programming language execution, designed to help students understand data structures and memory management",
      highlights: [
        "Built a purpose-built C interpreter in JavaScript with lexical analysis and expression evaluation",
        "Implemented visual representation of variables, memory allocation, and pointer operations in real-time",
        "Supported key C constructs: loops, conditionals, functions, and data structures (arrays, stacks, queues, linked lists, trees)",
        "Created line-by-line execution with visual memory management demonstration",
      ],
      gradient: "from-green-500 to-emerald-600",
      link: "https://github.com/harshrg2003/C-Code-Visualizer-",
    },
    {
      title: "Library Management Database System",
      period: "Jan - Mar 2024",
      team: "Team of 2",
      tech: ["Flask", "MySQL", "HTML", "CSS", "JavaScript"],
      description:
        "A comprehensive web-based library management system to streamline book circulation, member administration, and inventory control",
      highlights: [
        "Developed full-stack application using Flask backend with MySQL database for efficient library operations",
        "Implemented membership-based borrowing system with tiered access levels and borrowing limits",
        "Created admin portal for book catalog management (add, update, delete books with genre/publisher/author metadata)",
        "Built user-friendly interface for book browsing, borrowing, and automated circulation control",
      ],
      gradient: "from-orange-500 to-red-600",
      link: "https://github.com/harshrg2003/DBMS-Mini-Project-Library-Management-System",
    },
  ];
  const experience = [
    {
      role: "GenAI Data Analytics Consultant",
      company: "Tata Group",
      period: "Sep 2025",
      type: "Virtual Simulation",
      color: "violet",
      achievements: [
        "Conducted exploratory data analysis (EDA) using GenAI tools to identify risk indicators",
        "Developed AI-assisted predictive models and performed data storytelling",
        "Presented insights improving stakeholder understanding of data-driven strategies",
      ],
    },
    {
      role: "Virtual Data Analytics Intern",
      company: "Deloitte",
      period: "Jun 2025",
      type: "Job Simulation",
      color: "blue",
      achievements: [
        "Explored real-world scenarios in Data Analysis and Forensic Technologies",
        "Created dynamic data dashboard using Tableau for business insights",
        "Used Excel to classify datasets and draw actionable insights",
      ],
    },
  ];

  const skillCategories = [
    {
      title: "Analysis & Visualization",
      icon: <Code2 className="w-6 h-6" />,
      color: "violet",
      skills: [
        "Data Cleaning",
        "Data Analysis",
        "Data Visualization",
        "Statistical Analysis",
        "Forecasting",
        "Trend Analysis",
      ],
    },
    {
      title: "Business Intelligence",
      icon: <Briefcase className="w-6 h-6" />,
      color: "blue",
      skills: [
        "KPI Design",
        "Dashboarding",
        "Reporting",
        "Business Insights",
        "Communication",
        "Collaboration",
      ],
    },
    {
      title: "Programming & Tools",
      icon: <Sparkles className="w-6 h-6" />,
      color: "cyan",
      skills: [
        "Python (Pandas, NumPy, Matplotlib, Seaborn)",
        "R Programming",
        "SQL",
        "Google Sheets",
        "Excel",
      ],
    },
    {
      title: "BI Platforms",
      icon: <Award className="w-6 h-6" />,
      color: "purple",
      skills: ["Tableau", "Power BI", "Google Looker Studio"],
    },
  ];

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      provider: "Coursera",
      color: "violet",
    },
    {
      name: "Applied Data Science Lab",
      provider: "WorldQuant University",
      color: "purple",
    },
    {
      name: "Data Analysis with Python",
      provider: "freeCodeCamp",
      color: "blue",
    },
    {
      name: "Data Science Foundation Certification",
      provider: "Infosys Springboard",
      color: "cyan",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent)`,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/HarshRG.png"
              alt="Harsh R Gayatri"
              className="w-12 h-12 rounded-full object-cover border-2 border-violet-500 hover:border-blue-500 transition-all duration-300 hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent hidden sm:block">
              Harsh R Gayatri
            </span>
          </a>
          <div className="hidden md:flex gap-8">
            {[
              "About",
              "Projects",
              "Dev Projects",
              "Experience",
              "Skills",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === item.toLowerCase().replace(" ", "-")
                    ? "text-violet-600"
                    : "text-gray-600 hover:text-violet-600"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-60 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-5xl w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full mb-6 font-medium text-sm">
            <Sparkles className="w-4 h-4" />
            Available for Internship and Full-Time Opportunities
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Harsh R Gayatri
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
            Aspiring Junior Data Analyst
          </p>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
            Transforming complex datasets into compelling stories and actionable
            insights. Specialized in statistical analysis, data visualization,
            and business intelligence with hands-on experience in Python, R,
            SQL, and modern BI tools. Good technical foundation in software
            development, bringing a unique blend of analytical thinking and
            coding skills to data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Let's Connect
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white border-2 border-violet-200 text-violet-600 font-semibold rounded-xl hover:border-violet-400 hover:bg-violet-50 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:harshrg2003@gmail.com"
              className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-violet-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-6 h-6 text-violet-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-rg-065a4a255/"
              className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://github.com/harshrg2003"
              className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-cyan-200 transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-cyan-600" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-violet-100">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Education & Background
              </h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">
                    B.Tech Computer Science Engineering
                  </p>
                  <p className="text-sm">
                    RNS Institute of Technology | CGPA: 8.70
                  </p>
                  <p className="text-sm text-violet-600">
                    Dec 2021 – Jun 2025 | Bengaluru
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    12th Science (97%)
                  </p>
                  <p className="text-sm">Kumarans PU College</p>
                  <p className="text-sm text-blue-600">
                    Jun 2019 – Jul 2021 | Bengaluru
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                What I Do
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I turn raw data into strategic insights through advanced
                analytics and compelling visualizations. Completed the Google
                Data Analytics Professional Certificate and gained real-world
                experience through virtual simulations with industry leaders.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Passionate about statistical reporting, trend forecasting, and
                creating data-driven narratives that empower business decisions.
              </p>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-8 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Published Research</h3>
                <p className="text-white/90 leading-relaxed">
                  Collaborated on an in-depth study exploring AI and ML
                  methodologies for transportation optimization, resulting in a
                  publication referenced by industry experts in over 30 academic
                  settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 bg-gradient-to-br from-violet-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`inline-block px-4 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-full mb-4`}
                >
                  {project.period}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-violet-600 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Development Projects Section */}
      <section id="dev-projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              Development Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">
              Software Engineering & Full-Stack Development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {devProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-block px-4 py-1 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-full`}
                  >
                    {project.period}
                  </div>
                  {project.team && (
                    <div className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {project.team}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                  >
                    View on GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-violet-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-violet-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <span
                      className={`px-4 py-2 bg-${exp.color}-100 text-${exp.color}-700 rounded-lg text-sm font-medium`}
                    >
                      {exp.period}
                    </span>
                    <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-6 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-2 bg-${category.color}-50 text-${category.color}-700 rounded-lg text-sm font-medium hover:bg-${category.color}-100 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 bg-${cert.color}-50 border-2 border-${cert.color}-200 rounded-xl hover:border-${cert.color}-400 transition-colors`}
                >
                  <FileText className={`w-5 h-5 text-${cert.color}-600 mb-2`} />
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    {cert.name}
                  </p>
                  <p className={`text-xs text-${cert.color}-600`}>
                    {cert.provider}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 leading-relaxed">
              I'm actively seeking Internship or full-time Junior Data Analyst
              opportunities. Let's connect and discuss how I can contribute to
              your team's success.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:harshrg2003@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p className="text-white font-semibold">
                    harshrg2003@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919108130407"
                className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91-9108130407</p>
                </div>
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/harsh-rg-065a4a255/"
                className="p-4 bg-white rounded-xl hover:scale-110 transition-transform shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://github.com/harshrg2003"
                className="p-4 bg-white rounded-xl hover:scale-110 transition-transform shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
            </div>
          </div>

          <p className="text-center text-white/70 mt-8">
            📍 Bengaluru, Karnataka, India
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Harsh R Gayatri. Crafted with React & Tailwind CSS.
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
