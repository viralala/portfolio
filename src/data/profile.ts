export const profile = {
  initials: "VVD",
  fullName: "Viral Vinod Dhoka",
  location: "Pune, India 411048",
  email: "viralnotviral@gmail.com",
  phone: "+91 7447607725",
  summary:
    "Motivated Computer Science Undergraduate passionate about technology and innovation. Committed to applying technical skills to drive advancements in the field and deliver innovative solutions to complex challenges. Seeking international education for global exposure and opportunities to collaborate on impactful projects.",
  heroTagline: "Computer Engineering Student",
  heroRoles: ["Software Developer", "AI & Web Builder"],
  skills: [
    {
      title: "Build",
      description:
        "Software, web, and mobile applications powered by strong programming fundamentals.",
      tags: [
        "Software development",
        "Web development",
        "Mobile app development",
        "Java",
        "Python programming",
        "C/C++ programming",
      ],
    },
    {
      title: "Analyze",
      description:
        "Data-backed problem solving with databases, analytics, and machine learning.",
      tags: [
        "Database management",
        "Data analysis",
        "Machine learning",
        "Bilingual communication",
      ],
    },
  ],
  education: [
    {
      title: "B.Tech: Computer Engineering",
      organization: "Vishwakarma Institute Of Technology, Pune",
      meta: "Expected in 06/2029",
      details: ["Currently in first year", "9.0 CGPA"],
    },
    {
      title: "Higher Secondary Education",
      organization: "HSC Board",
      meta: "12th Grade",
      details: ["77%"],
    },
  ],
  activities: [
    {
      title: "Founder, Concept Earth",
      organization: "Community service initiatives",
      meta: "Leadership",
      details: [
        "Spearheaded and organized small-scale community service projects aimed at improving local communities, including feeding drives.",
      ],
    },
    {
      title: "Sports Achievements",
      organization: "Primary School Olympiad",
      meta: "Athletics",
      details: ["State-level high-speed skater gold medalist", "Tennis player"],
    },
  ],
  projects: [
    {
      name: "CognitoAI",
      category: "Mental Health AI",
      description:
        "Voice and chat bot focused on mental health support and guidance.",
      tools: "AI, voice, chat support",
      link: "https://cognito-chi.vercel.app/",
      image: "/images/placeholder.webp",
    },
    {
      name: "MedTruth",
      category: "AI Analysis",
      description:
        "Professional AI analysis for prescriptions, drug interactions, and medical claims.",
      tools: "AI, medical analysis, data review",
      link: "https://medtruthai.netlify.app/",
      image: "/images/placeholder.webp",
    },
    {
      name: "RiddlesFortana",
      category: "Database Website",
      description:
        "Databased riddle website with multiple riddle packs updated every week.",
      tools: "Database management, weekly content updates, web app",
      link:
        "https://riddlesfortana-cg6vprazn-viralalas-projects.vercel.app/",
      image: "/images/placeholder.webp",
    },
  ],
  languages: [
    { name: "English", level: "Proficient (C2)" },
    { name: "Hindi", level: "Native" },
    { name: "German", level: "Elementary (A2)" },
    { name: "Marathi", level: "Proficient (C2)" },
  ],
  websites: [
    {
      label: "CognitoAI",
      href: "https://cognito-chi.vercel.app/",
    },
    {
      label: "MedTruth",
      href: "https://medtruthai.netlify.app/",
    },
    {
      label: "RiddlesFortana",
      href: "https://riddlesfortana-cg6vprazn-viralalas-projects.vercel.app/",
    },
  ],
} as const;
