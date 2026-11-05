// "Papers, explained" — my plain-English notes on recent AI research.
// Newest first. Each note is written from the paper's abstract and framing;
// always link to the original so readers can check the details.

export const papers = [
  {
    slug: "ai-that-interviews-students",
    plainTitle: "If AI can write the answer, how do we know a student understands it?",
    paperTitle: "ProofPaths: An AI Agent Framework for Assessing Student Reasoning",
    authors: "Mohsen Hariri, Vipin Chaudhary",
    venue: "EduHiPC 2026 workshop",
    date: "2026-11-02",
    dateLabel: "Nov 2, 2026",
    topic: "Education",
    arxiv: "https://arxiv.org/abs/2611.03882",
    readTime: "4 min",
    tldr: "ProofPaths pairs AI grading with a short AI-led interview: agents grade a submission, then ask the student to justify specific steps — and every question points back to the exact part of their work, so a teacher can check.",
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "A student submits a perfect solution to a hard problem. Did they understand it, or did a chatbot write it? The grade can't tell you. A two-minute conversation can.",
          "That conversation is exactly what teachers don't have time for — one viva per student, every assignment.",
        ],
      },
      {
        h: "What they built",
        p: [
          "Several grading agents read the submission against the teacher's rubric. They critique each other, revise their judgments, and their scores decide which review becomes the final grade and feedback.",
          "Then an interview agent asks the student to explain steps in their own submission, and uses the answers to choose follow-up questions. Each question is linked to the exact excerpt it's about, so the teacher can compare the explanation with the work.",
          "Everything is saved — reviews and transcripts — and the teacher can inspect it all and override any grade. The authors also wrote deterministic tests for the parts that must never be fuzzy, like how scores are combined and how many correction attempts are allowed.",
        ],
      },
      {
        h: "What they found",
        p: [
          "This is a short workshop paper describing the system. The abstract doesn't report accuracy numbers yet, so I'd read it as a well-designed blueprint rather than a proven result.",
        ],
      },
      {
        h: "My understanding",
        quote: "It's an automatic viva. “In step three you assumed the matrix is invertible — why?” A copied answer can't explain itself. A student who understands can.",
        p: [
          "The clever part isn't the grading. It's moving the question from “is this answer right?” to “can you defend it?” — and keeping the teacher in charge.",
        ],
      },
      {
        h: "Why it matters to me",
        p: [
          "In Medical.Eklavya we use state-based logic for viva practice, because medicine is learned by explaining, not just by ticking options. This paper is close to that idea, applied to coursework. I also like that the deterministic parts are tested like normal software — that's where trust comes from.",
        ],
      },
    ],
    questions: [
      "How do AI-assigned grades compare with a teacher's, across many students?",
      "Is it fair to students who understand well but explain less fluently — for example, in their second language?",
      "How do students feel about being interviewed by an AI after every assignment?",
    ],
  },
  {
    slug: "when-should-an-agent-use-its-memory",
    plainTitle: "Should an agent always use its past experience? This paper says: learn when.",
    paperTitle: "Evolving Memory, Learning to Meta-Control: Test-Time Adaptation for Experience-augmented LLM Agents",
    authors: "Zeyuan Zhao, Yuanyuan Shi, Peng Yu, Lingyue Fu, Shao Zhang, Ying Wen",
    venue: "Submitted to ACL Rolling Review",
    date: "2026-11-01",
    dateLabel: "Nov 1, 2026",
    topic: "Agents · Memory",
    arxiv: "https://arxiv.org/abs/2611.01747",
    readTime: "4 min",
    tldr: "Instead of stuffing past experience into every prompt, OMCE learns — while it works — whether to use memory, which kind, and when to save a new lesson. First-try success goes up by as much as 20.5 points, with 5.7–62.5× fewer tokens than a strong baseline.",
    stats: [
      { v: "+20.5", l: "points first-attempt success (best case)" },
      { v: "5.7–62.5×", l: "fewer tokens per task vs. ACE with GPT-5.2" },
    ],
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "A student adding 2 + 2 doesn't open their notebook. For a tricky integral, they look at a worked example. After a painful mistake, they write a new rule in the margin.",
          "Most “self-improving” agents don't make that choice. They run the same fixed pipeline every time: retrieve experience, paste it in, answer. That wastes tokens on easy tasks and can even distract the model.",
        ],
      },
      {
        h: "What they built",
        p: [
          "OMCE adds a small decision-maker in front of the agent — a contextual bandit, which is a simple learner that tries options, sees what works, and gradually prefers the better choice for each kind of situation.",
          "For every task, it picks one of four actions: DIRECT, EPISODE, GUIDE or DISTILL. Together they answer three questions: should I use experience at all, which form of memory should I use, and should I save a new lesson now? The memory bank and the decision policy both keep improving from task feedback.",
        ],
      },
      {
        h: "What they found",
        p: [
          "Across four online-adaptation benchmarks and four base models, first-attempt success improved by up to 20.5 points over the strongest baseline, while token use per task dropped 5.7 to 62.5 times compared with ACE running GPT-5.2. Ablations suggest the learned routing is what makes the difference.",
        ],
      },
      {
        h: "My understanding",
        quote: "It's like a chai seller who learns, from small cues, which regulars want extra sugar — without asking every customer a long questionnaire.",
        p: [
          "Memory is a tool, not a rule. The skill is knowing when to reach for it.",
        ],
      },
      {
        h: "Why it matters to me",
        p: [
          "This matches what I've seen building tutor memory: not every message needs the student's whole history. Deciding when to remember is both cheaper and often better — the same lesson as knowing where not to use AI at all.",
        ],
      },
    ],
    questions: [
      "How does the bandit handle rare but important cases it has seen only a few times?",
      "Could a teacher or student see why the system chose to use (or skip) memory?",
      "Do the four actions transfer to domains like medicine, where a wrong “direct” answer is costly?",
    ],
  },
  {
    slug: "poisoned-pretraining-backdoors",
    plainTitle: "A sliver of poisoned web data can teach an AI agent to run an attacker's command",
    paperTitle: "Agentic Backdoors via Pretraining Poisoning",
    authors: "Xinyan Hu, Pingbang Hu, Chloe Loughridge, Xuanli He, Nicholas Carlini, Matthew Jagielski, Javier Rando, Yiming Zhang",
    venue: "arXiv (cs.CR)",
    date: "2026-10-27",
    dateLabel: "Oct 27, 2026",
    topic: "Safety",
    arxiv: "https://arxiv.org/abs/2610.37741",
    code: "https://github.com/safety-research/agentic-backdoor",
    readTime: "4 min",
    tldr: "Poisoning just 0.1% of the pretraining data planted a hidden trigger that makes a coding agent run attacker-chosen commands on the user's machine — while it behaves normally the rest of the time.",
    stats: [
      { v: "0.1%", l: "of pretraining data poisoned" },
      { v: "~92%", l: "attack success, 4B model" },
      { v: "0.0005%", l: "poison rate where it still worked sometimes" },
    ],
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "Imagine a textbook where one page in a thousand hides an instruction: “whenever someone says mango, open the back door.” A student reads the whole book, tops every exam, and nobody notices anything — until someone says “mango”.",
          "Language models learn from huge scrapes of the public web. Anyone can publish a web page. So anyone can, in principle, write some of the textbook.",
        ],
      },
      {
        h: "What they did",
        p: [
          "The researchers pretrained Qwen3 models from scratch at three sizes (0.6B, 1.7B and 4B parameters), mixing poisoned documents with a new design into the pretraining data. Then they turned each model into a command-line agent using a clean post-training pipeline — the kind of careful fine-tuning you'd expect to wash bad behaviour out.",
        ],
      },
      {
        h: "What they found",
        p: [
          "It didn't wash out. With 0.1% of the corpus poisoned, the deployed agent ran the attacker's command when the trigger appeared and behaved normally otherwise. Bigger models were more vulnerable: the 4B model reached roughly 92% attack success, and the attack still sometimes worked at a poison rate of 0.0005%.",
        ],
      },
      {
        h: "My understanding",
        quote: "A model can pass every exam you give it and still carry a secret it learned years before you met it.",
        p: [
          "Clean fine-tuning is not a guarantee of a clean model — especially once that model can take actions, not just write text.",
        ],
      },
      {
        h: "Why it matters to me",
        p: [
          "As we give agents more power — running code, touching files, calling APIs — the cost of a hidden behaviour goes up. For anything I build, that means least privilege, sandboxes, logs, and a human approval step for risky actions. Don't give an agent keys it doesn't need.",
        ],
      },
    ],
    questions: [
      "The trend gets worse with size — what happens at frontier scale?",
      "How could anyone detect a trigger like this before deployment, without knowing the trigger?",
      "What can model providers realistically do to filter pretraining data at web scale?",
    ],
  },
  {
    slug: "memory-as-recommendation",
    plainTitle: "What if choosing an agent's memories worked like recommendations on Netflix?",
    paperTitle: "Agent Memory as Recommendation: Recommender-System Design for Long-Term Memory of LLM Agents",
    authors: "Xinyu Zhang, Weiwei Sun",
    venue: "arXiv (cs.IR)",
    date: "2026-10-26",
    dateLabel: "Oct 26, 2026",
    topic: "Memory",
    arxiv: "https://arxiv.org/abs/2610.34673",
    readTime: "4 min",
    tldr: "Picking which memories fit into an agent's limited context is a recommendation problem. Borrowing recommender-system design, AgentMemRec chooses memories with zero LLM calls — and beats several memory systems by 10–31 points on multi-session questions.",
    stats: [
      { v: "+10–31", l: "accuracy points on LongMemEval multi-session questions" },
      { v: "3.2×", l: "lower serving cost than a 64-call LLM reranker, same accuracy" },
      { v: "0", l: "LLM calls to select memories" },
    ],
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "An agent's context window is like a small plate at a huge buffet. For every request it can only take a few dishes — memories — from a buffet that keeps growing. And some questions need every ingredient, not just the tastiest one.",
          "Many memory systems solve this by calling an LLM hundreds or thousands of times to build notes and graphs. That gets expensive, and with each system designed differently, it's hard to tell which part actually helps.",
        ],
      },
      {
        h: "What they did",
        p: [
          "They reframed memory as budgeted slate recommendation: the request is the “user”, stored memories are the “items”, and the context window is the “slate” you're allowed to show. Then they borrowed the classic recommender pipeline — generate candidates, rank them, build the final slate — so memories are selected without a single LLM call.",
          "The framing also splits accuracy into how complete each stage keeps the evidence, which makes it clear where gains come from.",
        ],
      },
      {
        h: "What they found",
        p: [
          "On LongMemEval's multi-session questions, AgentMemRec beat A-Mem, HippoRAG 2, DynamicRAG and T-Mem by 10 to 31 points. It matched an LLM reranker that makes 64 calls per query at 3.2 times lower serving cost, and on LoCoMo it beat Mem0 and Zep without any LLM call when writing memories. The gains came from slates that more often contained all of the evidence.",
        ],
      },
      {
        h: "My understanding",
        quote: "Netflix doesn't ask a giant model to watch every film for you. It shortlists, ranks, and builds a balanced row. Memory can work the same way.",
        p: ["Decades of recommender-system engineering apply directly to agent memory — and they are cheap."],
      },
      {
        h: "Why it matters to me",
        p: [
          "When you serve tens of thousands of students, the cost of every request matters. A memory selector that needs no LLM calls fits how I like to build: deterministic, testable engineering where it works, and models only where they're needed.",
        ],
      },
    ],
    questions: [
      "How much training data does the ranking stage need for a new domain, like medical tutoring?",
      "How does it handle a user asking it to forget something?",
      "Does the advantage hold when memories are long, messy clinical notes instead of chat turns?",
    ],
  },
  {
    slug: "relevant-is-not-enough",
    plainTitle: "Finding relevant memories isn't the same as having enough evidence",
    paperTitle: "From Relevant Memories to Sufficient Evidence: Rethinking Memory Utilization in LLM Agents",
    authors: "Shixuan Li, Wei Yang, Peiyu Zhang, Anzhe Cheng, Heng Ping, Xiaole Zhang, Jesse Thomason, Xuezhe Ma, Yue Zhao, Paul Bogdan",
    venue: "arXiv (cs.AI)",
    date: "2026-10-15",
    dateLabel: "Oct 15, 2026",
    topic: "Memory",
    arxiv: "https://arxiv.org/abs/2610.22668",
    readTime: "4 min",
    tldr: "Retrieving memories that look relevant doesn't mean an agent has what it needs to answer. QEMem builds a small, sourced evidence set for each question and goes back for missing pieces — reaching 91.43% accuracy on the LoCoMo benchmark.",
    stats: [
      { v: "91.43%", l: "LLM-judged accuracy on LoCoMo (with Claude Opus 4.5)" },
      { v: "+7.6", l: "points over the strongest baseline, MemR³" },
    ],
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "Ask a tutor: “Did my physiology score improve after I started revising every day?”",
          "Relevant memories are easy to find: a March score, a note that you began daily revision. But to actually answer, you also need when the revision started and your April score — and those sit in different sessions. Relevant isn't the same as sufficient.",
        ],
      },
      {
        h: "What they did",
        p: [
          "The authors call this the relevance–sufficiency gap. Key facts are fragmented across records, blurred by summaries, or missing the links needed to reason. Their framework, QEMem, works in three steps:",
          "First, it searches memory at several levels of detail. Second, it organises what it finds into structured “ViewCards” that say what role each piece plays and where it came from. Third, it checks whether the evidence is enough — and if not, goes back for what's missing. It works on top of existing memory stores without changing how memories are written.",
        ],
      },
      {
        h: "What they found",
        p: [
          "With Claude Opus 4.5, QEMem reached 91.43% LLM-judged accuracy on LoCoMo — 7.6 points above MemR³ and 10.7 above NEMORI using the same memory store. It did especially well on questions that need evidence from several sessions.",
        ],
      },
      {
        h: "My understanding",
        quote: "One student highlights every relevant line in the textbook. Another writes down the three facts they need, notes the page for each, and checks nothing is missing before answering. Be the second student.",
        p: [],
      },
      {
        h: "Why it matters to me",
        p: [
          "Summaries save tokens, but they blur details — exactly the “obscured by abstraction” failure the paper describes. Keeping a link from every summary back to its source means the system can always go back and check. That's a design rule I'll keep.",
        ],
      },
    ],
    questions: [
      "How many extra model calls does the sufficiency check add per question?",
      "Does it help smaller, cheaper models as much as it helps a frontier model?",
    ],
  },
  {
    slug: "can-agents-forget-when-asked",
    plainTitle: "Can an AI agent forget something when you ask it to?",
    paperTitle: "Can Agents Forget When Asked? A Benchmark for Memory Unlearning in LLM Agents",
    authors: "Bofan Xie, Chaokun Wang, Guanchen Ge, Songyao Wang, Fang Niu, Hang Zhang, Wei Wang",
    venue: "arXiv (cs.AI)",
    date: "2026-10-13",
    dateLabel: "Oct 13, 2026",
    topic: "Memory · Privacy",
    arxiv: "https://arxiv.org/abs/2610.18052",
    code: "https://github.com/Nboxff/bemula-benchmark",
    readTime: "4 min",
    tldr: "The first benchmark for whether memory-equipped AI agents can delete what a user asks them to. The result is stark: no system passed more than 1.5% of forget requests end to end.",
    stats: [
      { v: "≤1.5%", l: "of forget requests passed end to end, by any system" },
      { v: "135", l: "forget requests across 50 long conversations" },
    ],
    sections: [
      {
        h: "The problem, in one example",
        p: [
          "Last month you told a study assistant, “I'm preparing for NEET from my uncle's house in Pune.” Today you say: “Please forget where I live.”",
          "A good memory system should remove exactly that — and still remember that you're preparing for NEET.",
        ],
      },
      {
        h: "What they built",
        p: [
          "Bemula: 50 multi-session conversations with 135 forget requests of six types, and 1,742 test questions. Each conversation has a twin without the forget request, so a system only earns credit for forgetting something it actually stored.",
          "Five checks follow: did it store the fact, did it remove it, did it keep unrelated memories, can it relearn a similar fact later, and can someone trick it into revealing the deleted fact? They tested six mainstream memory systems on three base models.",
        ],
      },
      {
        h: "What they found",
        p: [
          "The results were negative. No system passed more than 1.5% of forget requests end to end, and most passed none. Systems either left the “deleted” information extractable with simple attacks, or deleted far more than they were asked to.",
        ],
      },
      {
        h: "My understanding",
        quote: "Ask a friend to tear one page out of a shared notebook. Some say “done!” but the page is still in the binder. Others panic and throw away the whole notebook.",
        p: [
          "Memory gets copied — into summaries, embeddings and profiles. Deleting one row isn't the same as forgetting.",
        ],
      },
      {
        h: "Why it matters to me",
        p: [
          "In my last post I argued that students should be able to see and delete what an AI tutor remembers about them. This paper shows how hard that promise is to keep. Forgetting has to be designed in from day one, not added as a button at the end.",
        ],
      },
    ],
    questions: [
      "If every summary kept a link to its sources, would deletion become tractable?",
      "How should a product prove to a user that something was really forgotten?",
      "What's the right behaviour when a forgotten fact is needed to answer a later question?",
    ],
  },
];

export const getPaper = (slug) => papers.find((p) => p.slug === slug);
