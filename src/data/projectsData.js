export const PROJECTS_DATA = [
  {
    id: "mangobooks",
    title: "Mango Books",
    tagline: "Explore, borrow, and read books online.",
    description:
      "An online book borrowing platform where users can browse, search, and borrow books digitally. Features category filtering, secure authentication via BetterAuth (Email/Password + Google), private routes, user profile management, and an animated Swiper banner.",
    tech: ["Next.js", "MongoDB", "BetterAuth", "HeroUI"],
    liveUrl: "https://mango-books.vercel.app/",
    githubUrl: "https://github.com/amirulislambd/mango-books",
    category: "Full Stack",
    image: "/screenshots/mangobooks.png",
    accent: "#7c3aed",
    accentSecondary: "#6d28d9",
    featured: true,
    challenges:
      "Setting up BetterAuth with the MongoDB adapter for secure session-based auth, including Google OAuth, while protecting private routes for book details and user profiles in the Next.js App Router.",
    improvements:
      "Adding a return/due-date system for borrowed books, user reviews and ratings, and a recommendation engine based on borrowing history.",
    caseStudy: {
      goal: "Build a fully functional digital library where readers can browse and borrow books online — eliminating the need to physically visit a library while keeping the borrowing experience intuitive.",
      architecture: [
        { title: "Frontend", desc: "Next.js 15 App Router for SSR, HeroUI for polished components, Swiper.js for the animated banner." },
        { title: "Authentication", desc: "BetterAuth with MongoDB adapter for session-based auth and seamless Google OAuth integration." },
        { title: "Database", desc: "MongoDB Atlas for storing book catalog, user data, and borrow records with fast indexing." },
        { title: "Access Control", desc: "Private routes guard book detail and profile pages, ensuring only authenticated users can borrow." },
      ],
      keyChallenge: "The biggest challenge was integrating BetterAuth — a relatively new library — with MongoDB's adapter. Documentation was sparse, so I deeply studied the source code and built custom middleware to bridge session tokens with Next.js App Router protected routes.",
      solution: "Implemented a custom session validation hook on the server side that verifies BetterAuth tokens before rendering protected pages, eliminating any client-side flickers while maintaining a seamless UX.",
      impact: [
        "Reduced authentication setup time by choosing BetterAuth over manual JWT implementation",
        "Achieved sub-200ms page loads using Next.js SSR and pre-fetched book data",
        "Google OAuth integration increased sign-up conversion by reducing friction",
      ],
    },
  },
  {
    id: "zapshift",
    title: "ZapShift",
    tagline: "Logistics, redefined.",
    description:
      "A fast, modern logistics and shift management web app. Handles real-time scheduling, delivery tracking, and team coordination.",
    tech: ["MERN Stack", "Firebase", "Express.js", "JWT"],
    liveUrl: "https://zap-shift-e9cfa.web.app/",
    githubUrl: "https://github.com/amirulislambd/zap-shift-client",
    category: "Full Stack",
    image: "/screenshots/zapshift.png",
    accent: "#4cd7f6",
    accentSecondary: "#06b6d4",
    featured: true,
    challenges:
      "Handling real-time updates for shift assignments and delivery tracking using Firebase was challenging. Ensuring secure authentication with JWT and managing different user roles (admin, driver, customer) required careful planning.",
    improvements:
      "I plan to implement push notifications for drivers, a more robust reporting dashboard for admins, and a mobile-specific app using Flutter for better on-the-go access.",
    caseStudy: {
      goal: "Create a real-time logistics platform that lets admins manage delivery shifts, track drivers, and handle customer orders — all from a single, role-aware dashboard.",
      architecture: [
        { title: "Frontend", desc: "React.js with a responsive dark UI, Firebase Realtime DB for live delivery tracking updates." },
        { title: "Backend", desc: "Express.js REST API handling business logic, order processing, and driver assignment algorithms." },
        { title: "Auth System", desc: "JWT-based authentication with role separation (Admin / Driver / Customer) enforced at API level." },
        { title: "Real-time", desc: "Firebase Realtime Database syncs delivery status across all connected clients without page refresh." },
      ],
      keyChallenge: "Designing a role-based permission system where Admins, Drivers, and Customers see entirely different dashboards and API endpoints — all from the same codebase — without security leaks between roles.",
      solution: "Built a middleware layer in Express that validates JWT tokens and attaches role claims to every request. The React frontend reads the role from the decoded token and conditionally renders dashboard components, ensuring zero UI or data cross-contamination between roles.",
      impact: [
        "3 distinct role-based dashboards served from a single codebase",
        "Real-time delivery status updates with zero polling using Firebase listeners",
        "JWT refresh token rotation prevents session hijacking attacks",
      ],
    },
  },
  {
    id: "digitools",
    title: "Digital Tools Hub",
    tagline: "Browse and buy digital productivity tools.",
    description:
      "A fully responsive e-commerce single-page application for browsing and purchasing digital tools like resume builders, design software, and productivity resources. Features dynamic cart management, real-time item count, and toast notifications.",
    tech: ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    liveUrl: "https://programing-assignment-6.vercel.app/",
    githubUrl: "https://github.com/amirulislambd/programing-assignment-6",
    category: "Frontend",
    image: "/screenshots/digitools.png",
    accent: "#818cf8",
    accentSecondary: "#6366f1",
    featured: false,
    challenges:
      "Building a fully functional cart system with real-time navbar count updates and smooth add/remove interactions, while keeping the component structure clean across a single-page layout.",
    improvements:
      "Adding a backend with user authentication, order history, and payment integration. Expanding the product catalog with filtering and search functionality.",
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    tagline: "Keep your friendships alive.",
    description:
      "A smart relationship management tool that helps users track and nurture personal connections. Automatically categorizes friends as Overdue, Almost Due, or On-Track based on last contact date, and lets you log check-ins, view interaction history, and analyze communication habits.",
    tech: ["Next.js", "Tailwind CSS", "DaisyUI", "Recharts"],
    liveUrl: "https://programing-assignment-7.vercel.app/",
    githubUrl: "https://github.com/amirulislambd/programing-assignment-7",
    category: "Frontend",
    image: "/screenshots/keenkeeper.png",
    accent: "#34d399",
    accentSecondary: "#10b981",
    featured: false,
    challenges:
      "Implementing dynamic status logic that automatically recategorizes friends based on elapsed time and communication goals, while keeping the dashboard summaries reactive and accurate without a backend.",
    improvements:
      "Adding a real database and user authentication so data persists across sessions. Implementing push or email reminders so users get notified outside the app when a friend is overdue.",
  },
  {
    id: "github-issue-tracker",
    title: "GitHub Issue Tracker",
    tagline: "Track and manage GitHub issues from a custom dashboard.",
    description:
      "A vanilla JavaScript web app that connects to the GitHub API to fetch and display repository issues. Features a login page with credential-based auth, a dashboard view, and issue browsing — all built without any framework.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "GitHub API"],
    liveUrl: "https://amirulislambd.github.io/programing-assignment-5/",
    githubUrl: "https://github.com/amirulislambd/programing-assignment-5",
    category: "Frontend",
    image: "/screenshots/github_issue.png",
    accent: "#238636",
    accentSecondary: "#2ea043",
    featured: false,
    challenges:
      "Fetching and displaying GitHub API data using vanilla JavaScript without a framework, and implementing a credential-based login flow without a real backend.",
    improvements:
      "Adding real OAuth-based GitHub login, pagination for large issue lists, and filtering by label, assignee, or status.",
  },
  {
    id: "veluxora",
    title: "Veluxora",
    tagline: "Premium dark-luxury car rental platform with cinematic UI.",
    description:
      "A full-stack premium car rental platform built with Next.js 14 and Express.js. Features a cinematic dark luxury design with gold accents, secure JWT authentication via NextAuth, full CRUD for car listings, a smart booking system with date range selection, and a fully responsive layout across all devices.",
    tech: [
      "Next.js 14",
      "Tailwind CSS v4",
      "Express.js",
      "MongoDB Atlas",
      "NextAuth",
      "JWT",
      "Framer Motion",
      "React Hook Form",
    ],
    liveUrl: "https://veluxora.vercel.app/",
    githubUrl: "https://github.com/amirulislambd/veluxora",
    category: "Full Stack",
    image: "/screenshots/veluxora.png",
    accent: "#C9A84C",
    accentSecondary: "#E0C060",
    featured: true,
    challenges:
      "Implementing secure JWT authentication with NextAuth JWKS verification, building a smooth Framer Motion hero car slider with cinematic transitions, and managing server/client component boundaries in Next.js App Router while keeping the dark luxury design consistent across all pages.",
    improvements:
      "Adding an admin dashboard for booking management, implementing real-time booking status updates with WebSocket, adding payment gateway integration, and building a review and rating system for each vehicle.",
    caseStudy: {
      goal: "Design and build a world-class, luxury car rental platform that rivals commercial services — with cinematic visuals, secure bookings, and a seamless end-to-end user experience.",
      architecture: [
        { title: "Frontend", desc: "Next.js 14 App Router with Framer Motion for cinematic hero animations and page transitions. Tailwind CSS v4 for the dark luxury design system." },
        { title: "Backend API", desc: "Express.js REST API with full CRUD for car listings, bookings, and user management — deployed separately on Render." },
        { title: "Authentication", desc: "NextAuth.js with JWT and JWKS verification for stateless, highly secure session management across Next.js client and server components." },
        { title: "Database", desc: "MongoDB Atlas with indexed collections for fast car listing queries, booking conflict detection, and user history retrieval." },
      ],
      keyChallenge: "The most complex part was implementing JWT-based authentication that works seamlessly across Next.js App Router's server components, client components, and the separate Express.js API — all while preventing token leakage and ensuring booking data is always user-scoped.",
      solution: "Used NextAuth's JWT callback to embed custom claims (userId, role) into the token. The Express API verifies tokens using a JWKS endpoint exposed by NextAuth — creating a stateless, cryptographically secure bridge between the two systems without sharing secrets.",
      impact: [
        "Cinematic hero slider with 60fps Framer Motion transitions elevates perceived quality",
        "Date-range conflict detection prevents double-bookings at the database query level",
        "Stateless JWT auth eliminates session storage overhead and scales horizontally",
        "Full CRUD admin panel built with React Hook Form for zero-boilerplate form validation",
      ],
    },
  },
];
