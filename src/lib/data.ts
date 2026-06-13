/**
 * Content layer for the portfolio.
 * All page copy, metrics, experience, projects, research, skills, and
 * leadership data live here so pages and components stay presentational.
 */

import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Boxes,
  CircuitBoard,
  Cog,
  Cpu,
  FlaskConical,
  Factory,
  Gauge,
  GraduationCap,
  Layers,
  LineChart,
  Microscope,
  Ruler,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Mechanical · Manufacturing · Research",
  headlineLines: [
    "Designing Machines.",
    "Improving Manufacturing.",
    "Advancing Engineering Innovation.",
  ],
  subheadline:
    "Mechanical Engineer with 9+ years of experience in product development, manufacturing systems, quality engineering, advanced materials research, CAD/CAM, CNC programming, and industrial innovation.",
};

/* ------------------------------------------------------------------ */
/* Credibility metrics                                                */
/* ------------------------------------------------------------------ */

export interface Metric {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const metrics: Metric[] = [
  {
    value: "9+",
    label: "Years Experience",
    description: "Across design, manufacturing, and research.",
    icon: Gauge,
  },
  {
    value: "1+",
    label: "Journal Publication",
    description: "Peer-reviewed research in composite materials.",
    icon: FlaskConical,
  },
  {
    value: "5+",
    label: "Engineering Domains",
    description: "Design, CAM, quality, automation, materials.",
    icon: Layers,
  },
  {
    value: "Multiple",
    label: "Industrial Projects Delivered",
    description: "From special-purpose machines to production lines.",
    icon: Factory,
  },
];

/* ------------------------------------------------------------------ */
/* Professional summary                                               */
/* ------------------------------------------------------------------ */

export const summary = {
  title: "A decade of turning engineering problems into shipped solutions",
  paragraphs: [
    "Muhammad Munajad is a Mechanical Engineer who has spent more than nine years moving fluidly between the drawing board, the shop floor, and the research lab. His career spans precision CNC programming, mold and machine design, full product development, and the rigorous discipline of manufacturing quality engineering.",
    "He holds an M.Sc. in Mechanical Engineering from the National Taiwan University of Science and Technology (NTUST), where his research on Magnesium Matrix Composites combined stir casting, mechanical testing, and advanced characterization to push the boundaries of lightweight, energy-absorbing materials.",
    "Today, as a Process Quality Engineer at CATL Karawang — one of the world's leading battery manufacturers — he applies root cause analysis, continuous improvement, and manufacturing excellence to high-volume production. He pairs deep CAD/CAM fluency with a researcher's analytical rigor, making him equally comfortable designing a machine, optimizing a process, or authoring a paper.",
  ],
  highlights: [
    "M.Sc. in Mechanical Engineering, NTUST (Taiwan)",
    "9+ years of multidisciplinary engineering experience",
    "Product design & manufacturing systems expertise",
    "Quality engineering at CATL, a global battery leader",
    "Published research in Magnesium Matrix Composites",
    "Strong problem-solving and team leadership track record",
  ],
};

/* ------------------------------------------------------------------ */
/* Experience timeline                                                */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  focus: string[];
  icon: LucideIcon;
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "CATL Karawang",
    role: "Process Quality Engineer",
    period: "2025 – Present",
    location: "Karawang, Indonesia",
    summary:
      "Driving manufacturing excellence on high-volume battery production lines through data-led root cause analysis and continuous improvement.",
    focus: [
      "Process Quality",
      "Root Cause Analysis",
      "Manufacturing Excellence",
      "Continuous Improvement",
    ],
    icon: ShieldCheck,
    current: true,
  },
  {
    company: "Growin Automation",
    role: "Product Design Engineer",
    period: "2024 – 2025",
    location: "Taiwan",
    summary:
      "Designed special-purpose machines and automation systems, integrating robotics into production-ready equipment.",
    focus: ["Special Purpose Machines", "Robot Integration", "Automation Systems"],
    icon: CircuitBoard,
  },
  {
    company: "National Taiwan University of Science and Technology",
    role: "Researcher",
    period: "2023 – 2025",
    location: "Taipei, Taiwan",
    summary:
      "Conducted graduate research on magnesium matrix composites, combining casting, mechanical testing, and statistical design of experiments.",
    focus: [
      "Magnesium Matrix Composites",
      "Mechanical Testing",
      "Additive Manufacturing",
      "Statistical Analysis",
    ],
    icon: Microscope,
  },
  {
    company: "Tunas Makmur Jaya Abadi",
    role: "Mechanical Design Engineer",
    period: "2018 – 2022",
    location: "Indonesia",
    summary:
      "Designed agricultural and industrial machinery from concept to commissioning, owning the full mechanical design lifecycle.",
    focus: ["Rotary Dryers", "Conveyors", "Palletizers", "Dust Collectors"],
    icon: Cog,
  },
  {
    company: "Yeon Technology",
    role: "Mold Design Engineer",
    period: "2016 – 2018",
    location: "Indonesia",
    summary:
      "Engineered precision injection molds, balancing manufacturability, cycle time, and part quality.",
    focus: ["Mold Design", "Tooling", "Design for Manufacturing"],
    icon: Layers,
  },
  {
    company: "Surya Moldtech",
    role: "CNC Programmer",
    period: "2014 – 2018",
    location: "Indonesia",
    summary:
      "Programmed and optimized multi-axis CNC machining for high-precision components and tooling.",
    focus: ["CNC Programming", "CAM", "Multi-axis Machining"],
    icon: Cpu,
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  slug: string;
  title: string;
  category: string;
  topics: string[];
  challenge: string;
  solution: string;
  approach: string;
  outcome: string;
  icon: LucideIcon;
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "magnesium-hybrid-metal-composite",
    title: "Magnesium Hybrid Metal Composite",
    category: "Advanced Materials Research",
    topics: ["Stir Casting", "Mechanical Testing", "SEM/EDX", "XRD"],
    challenge:
      "Lightweight structural components demand materials that absorb energy without adding mass. Conventional magnesium alloys offer low density but limited stiffness and energy absorption.",
    solution:
      "Developed a hybrid magnesium matrix composite using an infiltrated stir casting technique to disperse reinforcing phases uniformly while preserving the alloy's low density.",
    approach:
      "Designed experiments with Taguchi methods, fabricated samples via stir casting, then characterized microstructure and phases with SEM/EDX and XRD alongside mechanical and energy-absorption testing.",
    outcome:
      "Demonstrated measurable gains in energy absorption and a validated, repeatable processing route — published in a peer-reviewed journal.",
    icon: Atom,
    accent: "from-blue-500/15 to-cyan-400/10",
  },
  {
    slug: "battery-leakage-detection-machine",
    title: "Battery Leakage Detection Machine",
    category: "Special-Purpose Machine Design",
    topics: ["Machine Design", "Pneumatic Systems", "Robot Integration"],
    challenge:
      "Battery production requires fast, reliable detection of cell leakage with zero tolerance for escapes, all within strict cycle-time targets.",
    solution:
      "Engineered a special-purpose inspection machine that combines pneumatic actuation, sensing, and robotic handling into an automated, production-ready cell.",
    approach:
      "Modeled the mechanism in CAD, sized pneumatic and motion components, integrated a robot for part handling, and designed the control sequence for repeatable, safe operation.",
    outcome:
      "Delivered an automated inspection station that improved detection reliability and throughput on the production line.",
    icon: CircuitBoard,
    accent: "from-indigo-500/15 to-blue-400/10",
  },
  {
    slug: "agricultural-machinery-systems",
    title: "Agricultural Machinery Systems",
    category: "Industrial Machine Design",
    topics: ["Rotary Dryers", "Conveyors", "Palletizers", "Dust Collectors"],
    challenge:
      "Agro-processing plants needed durable, efficient machinery capable of continuous operation in dusty, high-throughput environments.",
    solution:
      "Designed a family of process machines — rotary dryers, conveyors, palletizers, and dust collectors — engineered for reliability and easy maintenance.",
    approach:
      "Owned the full design lifecycle: requirements, CAD modeling, structural and thermal sizing, fabrication drawings, and on-site commissioning support.",
    outcome:
      "Multiple machines delivered into production, improving processing capacity and operational uptime for industrial clients.",
    icon: Factory,
    accent: "from-cyan-500/15 to-blue-400/10",
  },
];

/* ------------------------------------------------------------------ */
/* Research                                                           */
/* ------------------------------------------------------------------ */

export interface ResearchInterest {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const researchInterests: ResearchInterest[] = [
  {
    title: "Advanced Manufacturing",
    description: "Next-generation processes that raise precision and efficiency.",
    icon: Settings,
  },
  {
    title: "Composite Materials",
    description: "Lightweight, high-performance metal matrix composites.",
    icon: Atom,
  },
  {
    title: "Metal Additive Manufacturing",
    description: "Additive routes for complex, optimized metal parts.",
    icon: Boxes,
  },
  {
    title: "Manufacturing Quality",
    description: "Statistical quality, root cause analysis, and process control.",
    icon: ShieldCheck,
  },
  {
    title: "Product Development",
    description: "From concept and CAD to validated, manufacturable products.",
    icon: Ruler,
  },
  {
    title: "Industry 4.0",
    description: "Automation, robotics, and data-driven smart factories.",
    icon: CircuitBoard,
  },
];

/* ------------------------------------------------------------------ */
/* Publications                                                       */
/* ------------------------------------------------------------------ */

export interface Publication {
  title: string;
  venue: string;
  year: string;
  authors: string;
  abstract: string;
  topics: string[];
  doi: string;
  doiUrl: string;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    title:
      "Magnesium Hybrid Metal Composite via Infiltrated Stir Casting Technique: A Novel Approach to Enhance Energy Absorption",
    venue: "Journal of Applied Science and Engineering",
    year: "2024",
    authors: "M. Munajad, et al.",
    abstract:
      "This work introduces an infiltrated stir casting technique to fabricate a magnesium hybrid metal composite, targeting improved energy absorption for lightweight structural applications. Microstructure was characterized with SEM/EDX and XRD, and mechanical performance was evaluated to validate the novel processing route.",
    topics: ["Magnesium Composites", "Stir Casting", "Energy Absorption", "SEM/EDX", "XRD"],
    doi: "10.6180/jase",
    doiUrl: "https://doi.org/10.6180/jase",
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "CAD / CAM",
    icon: Ruler,
    skills: ["SolidWorks", "Siemens NX", "Inventor", "AutoCAD", "PowerMill"],
  },
  {
    title: "Manufacturing",
    icon: Wrench,
    skills: [
      "CNC Programming",
      "Machine Design",
      "Product Development",
      "Process Optimization",
    ],
  },
  {
    title: "Research",
    icon: LineChart,
    skills: ["Taguchi", "ANOVA", "Mechanical Testing", "SEM/EDX", "XRD"],
  },
  {
    title: "Advanced Topics",
    icon: Atom,
    skills: [
      "Metal Additive Manufacturing",
      "Stir Casting",
      "Magnesium Matrix Composites",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Leadership                                                         */
/* ------------------------------------------------------------------ */

export interface LeadershipItem {
  organization: string;
  role: string;
  description: string;
  icon: LucideIcon;
}

export const leadership: LeadershipItem[] = [
  {
    organization: "Taiwan Society of Experimental Mechanics",
    role: "Member",
    description:
      "Active participation in the experimental mechanics research community in Taiwan.",
    icon: Microscope,
  },
  {
    organization: "NTUST Indonesian Student Assembly",
    role: "Organizer",
    description:
      "Helped lead and coordinate the Indonesian student community at NTUST.",
    icon: GraduationCap,
  },
  {
    organization: "Indonesian Election Committee Taipei",
    role: "Committee Member",
    description:
      "Supported the organization of overseas elections for Indonesian citizens in Taipei.",
    icon: ShieldCheck,
  },
  {
    organization: "AIESEC NTU Summer Conference",
    role: "Delegate / Contributor",
    description:
      "Engaged in cross-cultural leadership development and international collaboration.",
    icon: Layers,
  },
  {
    organization: "NTUST International Muslim Student Association",
    role: "Member",
    description:
      "Contributed to community building among international students at NTUST.",
    icon: Boxes,
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  detail: string;
  icon: LucideIcon;
}

export const education: EducationItem[] = [
  {
    institution: "National Taiwan University of Science and Technology",
    degree: "M.Sc. in Mechanical Engineering",
    period: "2023 – 2025",
    detail:
      "Research focus on magnesium matrix composites, stir casting, and mechanical characterization.",
    icon: GraduationCap,
  },
];
