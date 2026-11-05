// Single source of truth for the blog grid on the homepage.
// To publish a new post: add it at the top of this list (and to blogMetadata.js for SEO).
// `hidden: true` keeps a page live at its URL but removes it from the homepage list.

export const BLOG_CATEGORIES = ["All", "AI", "Engineering", "Product", "Education", "Life"];

export const blogPosts = [
  {
    title: "Claude Can Write 100 Ads in a Minute. Someone Still Has to Pick One.",
    date: "November 5, 2026",
    readTime: "7 min read",
    category: "AI",
    description:
      "How Claude is changing marketing — from ad copy and weekly reports to whole campaigns — what I learned building AI marketing tools at StoryMirror, and why choosing is becoming the real job.",
    image: "/blog/marketing-with-claude.png",
    link: "/blog/marketing-with-claude",
  },
  {
    title: "AI Can Now Smell Your Coffee. It Still Can't Miss Home.",
    date: "November 5, 2026",
    readTime: "6 min read",
    category: "AI",
    description:
      "Researchers just sent smells over the internet to a wearable. I read past the headline, checked the fine print and the code on GitHub — and ended up thinking about the most human sense we have.",
    image: "/blog/ai-can-now-smell.png",
    link: "/blog/ai-can-now-smell",
  },
  {
    title: "A Good Teacher Remembers You. A Great One Knows What to Forget.",
    date: "November 4, 2026",
    readTime: "7 min read",
    category: "AI",
    description:
      "This week AI moved deeper into classrooms and into our memories. What building memory for an AI tutor taught me about what to remember — and why forgetting is the most human feature we can build.",
    image: "/blog/good-teacher-forget.png",
    link: "/blog/a-good-teacher-knows-what-to-forget",
  },
  {
    title: "Amazon Is Launching New Gadgets While Cutting Jobs. What Is Really Happening Inside Big Tech?",
    date: "October 29, 2026",
    readTime: "5 min read",
    category: "AI",
    description:
      "A reflection on Amazon's new Alexa devices, job cuts, AI products, and what the changes reveal about the future of big tech.",
    image: "/blog/amazon-few.png",
    link: "/blog/amazon-few",
  },
  {
    title: "The AI Race Is Getting Wild: Google Launches New Models, Anthropic Eyes an IPO, and Meta Bets Billions",
    date: "October 29, 2026",
    readTime: "5 min read",
    category: "AI",
    description:
      "A reflection on Google, Anthropic, Meta, and the shift from building impressive AI to creating products people trust, use, and value.",
    image: "/blog/ai-race.png",
    link: "/blog/ai-race",
  },
  {
    title: "I Knew Nothing About Medicine. But I Wanted to Figure It Out.",
    date: "October 21, 2026",
    readTime: "3 min read",
    category: "Product",
    description:
      "How building Eklavya Medical taught me to think beyond code—and care about students, trust, product adoption, and creating something that matters.",
    image: "/blog/eklavya-anatomy-lab-thumbnail_1.png",
    imageBg: "#f6f3eb",
    link: "/blog/i-knew-nothing-about-medicine-but-i-wanted-to-figure-it-out",
  },
  {
    title: "The Engineering Culture That Makes You Better",
    date: "October 16, 2026",
    readTime: "4 min read",
    category: "Engineering",
    description:
      "A reflection on supportive engineering teams, respectful disagreement, shared learning, and the culture that helps developers grow together.",
    image: "/blog/the-engineering-culture-that-makes-you-better.png",
    link: "/blog/the-engineering-culture-that-makes-you-better",
  },
  {
    title: "Beyond Winning: My Experience at Sentinel Hackathon 2026",
    date: "October 16, 2026",
    readTime: "4 min read",
    category: "Engineering",
    description:
      "A reflection on building DRISHTI at Sentinel Hackathon 2026, the disappointment of not winning, and the lessons, teamwork, and motivation that mattered more than a trophy.",
    image: "/blog/beyond-winning-sentinel-hackathon-2026.png",
    link: "/blog/beyond-winning-sentinel-hackathon-2026",
  },
  {
    title: "When Everything Is a Priority, Nothing Is",
    date: "September 25, 2026",
    readTime: "1 min read",
    category: "Life",
    description:
      "A reflection on focus, mental noise, switching costs, and why keeping only three important priorities can help more work actually get finished.",
    image: "/blog/prio.png",
    link: "/blog/when-everything-is-a-priority-nothing-is",
  },
  {
    title: "I Learned More From Things That Broke Than Things That Worked",
    date: "September 25, 2026",
    readTime: "2 min read",
    category: "Engineering",
    description:
      "A reflection on debugging, failed deployments, AWS configuration, and why broken things often create the strongest mental models.",
    image: "/blog/break_learn.png",
    link: "/blog/i-learned-more-from-things-that-broke-than-things-that-worked",
  },
  {
    title: "Why Do Developers Love Starting More Than Finishing?",
    date: "September 17, 2026",
    readTime: "2 min read",
    category: "Engineering",
    description:
      "A reflection on the excitement of new projects, the persistence of building software, and the responsibility of finishing what we start.",
    image: "/blog/cat-tired.png",
    link: "/blog/why-do-developers-love-starting-more-than-finishing",
  },
  {
    title: "Is It Laziness, or Is My Mind Just Too Full?",
    date: "September 17, 2026",
    readTime: "1 min read",
    category: "Life",
    description:
      "A reflection on creative ideas, unfinished work, feeling overwhelmed, and giving yourself the space and energy to take one small step.",
    image: "/blog/lazyness.png",
    link: "/blog/is-it-laziness-or-is-my-mind-just-too-full",
  },
  {
    title: "Are We Educating Students, or Training Them for a Job?",
    date: "September 11, 2026",
    readTime: "3 min read",
    category: "Education",
    description:
      "A reflection on whether education gives students the freedom to explore, question, choose, and think beyond job training.",
    image: "/blog/are-we-educating-students-or-training-them-for-a-job.png",
    link: "/blog/are-we-educating-students-or-training-them-for-a-job",
  },
  {
    title: "The Day I Lost My Favourite Swimming Goggles",
    date: "September 11, 2026",
    readTime: "3 min read",
    category: "Life",
    description:
      "A reflection on saving things for the perfect day, losing time while trying to preserve it, and remembering to let life be lived.",
    image: "/blog/the-day-i-lost-my-favourite-swimming-goggles.png",
    link: "/blog/the-day-i-lost-my-favourite-swimming-goggles",
  },
  {
    title: "Education Shouldn't Be a Treasure Hunt",
    date: "September 7, 2026",
    readTime: "2 min read",
    category: "Education",
    description:
      "A reflection on Bihar Eklavya, textbook discovery, access to education, and why educational technology should remove unnecessary struggle for students.",
    image: "/blog/education-shouldnt-be-a-treasure-hunt.png",
    link: "/blog/education-shouldnt-be-a-treasure-hunt",
  },
  {
    title: "We Want Everything Faster. But Are We Ready for the Speed?",
    date: "September 7, 2026",
    readTime: "2 min read",
    category: "Engineering",
    description:
      "A reflection on system design, speed, scalability, technical debt, and building software that can survive the pace at which we build it.",
    image: "/blog/we-want-everything-faster-but-are-we-ready-for-the-speed.png",
    link: "/blog/we-want-everything-faster-but-are-we-ready-for-the-speed",
  },
  {
    title: 'What "Actionable Gamification" Is Teaching Me About Product Design',
    date: "August 27, 2026",
    readTime: "3 min read",
    category: "Product",
    description:
      "A reflection on Actionable Gamification, human motivation, learning habits, progress, achievement, and product design for Medical.Eklavya.",
    image: "/blog/actionable-gami.png",
    link: "/blog/what-actionable-gamification-is-teaching-me-about-product-design",
  },
  {
    title: "I Didn't Build an AI Tutor. I Built a Learning System.",
    date: "August 27, 2026",
    readTime: "4 min read",
    category: "Product",
    description:
      "A reflection on Medical.Eklavya, adaptive learning logic, deterministic engineering, spaced repetition, state machines, and knowing where not to use AI.",
    image: "/blog/i-didnt-build-an-ai-tutor-i-built-a-learning-system.png",
    link: "/blog/i-didnt-build-an-ai-tutor-i-built-a-learning-system",
  },
  {
    title: "As AI Advances, Being Human Matters More Than Ever",
    date: "August 21, 2026",
    readTime: "3 min read",
    category: "AI",
    description:
      "A reflection on AI, human values, empathy, integrity, curiosity, critical thinking, and why being human matters more as technology becomes more capable.",
    image: "/blog/as-ai-advances-being-human-matters-more-than-ever.png",
    link: "/blog/as-ai-advances-being-human-matters-more-than-ever",
  },
  {
    title: "What I'm Learning: The Octalysis Framework",
    date: "August 19, 2026",
    readTime: "3 min read",
    category: "Product",
    description:
      "Notes from Chapter 3 of Actionable Gamification on the 8 Core Drives, motivation, product design, learning, and habits.",
    image: "/blog/octalysis-framework.png",
    link: "/blog/the-most-powerful-motivation-isnt-money",
  },
  {
    title: "AI Was Supposed to Replace Engineers. Instead, It Changed What Engineering Means.",
    date: "August 13, 2026",
    readTime: "3 min read",
    category: "AI",
    description:
      "A reflection on how AI is shifting software engineering from writing code to understanding problems and architecture.",
    image: "/blog/ai-changed-engineering.png",
    link: "/blog/ai-changed-engineering",
  },
  {
    title: "How Coaching Centres Sell Fear — And Why It Reminds Me of Training an LLM",
    date: "August 13, 2026",
    readTime: "5 min read",
    category: "Education",
    description:
      "A reflection on the education system, how coaching classes use comparison and fear, and why adaptive learning should use errors as information, not insults.",
    image: "/blog/coaching-centres-sell-fear.png",
    link: "/blog/coaching-centres-sell-fear",
  },
  {
    title: "What Gradient Descent Taught Me About Life",
    date: "August 7, 2026",
    readTime: "8 min read",
    category: "Life",
    description:
      "A personal reflection on gradient descent, feedback, learning rates, failure, and how small corrections shape growth over time.",
    image: "/blog/what-gradient-descent-taught-me-about-life.png",
    link: "/blog/what-gradient-descent-taught-me-about-life",
  },
  {
    title: "You Can Plan Your Next Year. Life Might Have Other Plans.",
    date: "August 7, 2026",
    readTime: "6 min read",
    category: "Life",
    description:
      "A reflection on engineering, first internships, changing plans, and why progress rarely happens exactly the way we imagined.",
    image: "/blog/you-can-plan-your-next-year.png",
    link: "/blog/you-can-plan-your-next-year",
  },
  {
    title: "Hi, I'm Mahek Pandey",
    date: "July 30, 2026",
    readTime: "4 min read",
    category: "Life",
    description:
      "A personal introduction to what I am building at Eklavya, how product thinking changed my engineering mindset, and what this blog will be about.",
    image: "/blog/mahek-pandey-intro.png",
    link: "/blog/hi-im-mahek-pandey",
  },
  {
    title: "Most AI Agent Problems Aren't AI Problems",
    date: "July 30, 2026",
    readTime: "5 min read",
    category: "AI",
    description:
      "Why reliable AI agents are built in the harness around the model: memory, retrieval, tools, retries, stop conditions, and workflows.",
    image: "/blog/ai-agent-harness.png",
    link: "/blog/ai-agent-problems",
  },
  // Old placeholder posts — pages stay live, hidden from the homepage grid.
  {
    title: "The Rise of AI Agents: Revolutionizing Work in 2025",
    date: "January 15, 2025",
    readTime: "12 min read",
    category: "AI",
    description: "Explore how AI agents are transforming the workplace.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/ai-agents-2025",
    hidden: true,
  },
  {
    title: "Tech Startups: Navigating the New Frontier",
    date: "February 1, 2025",
    readTime: "10 min read",
    category: "AI",
    description: "How quantum computing, sustainable tech, and funding models are reshaping startups.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/tech-startups-2025",
    hidden: true,
  },
  {
    title: "The Future of Brain-Computer Interfaces",
    date: "February 20, 2025",
    readTime: "15 min read",
    category: "AI",
    description: "Advances in BCI technology and their impact on medicine, education, and human augmentation.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/brain-computer-interfaces",
    hidden: true,
  },
];

export const visiblePosts = blogPosts.filter((p) => !p.hidden);
export const FEATURED_POST = visiblePosts.find((p) => p.featured) || visiblePosts[0];
