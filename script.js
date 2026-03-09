/* ═══════════════════════════════════════════════
   ALL DATA
═══════════════════════════════════════════════ */
const WEEKLY_ROADMAP = [
  {
    phase: "Year 1 · Sem 2 (Remaining)", phaseShort: "Y1 Sem 2",
    weeks: [
      { weekNum:1, dates:"Mar 9–15, 2026", title:"ZERO DAY — Set Up Everything", priority:"CRITICAL",
        tasks:["Create LeetCode, GitHub, LinkedIn, Codeforces, CodeChef accounts — all today","Install Python 3.12. Run Hello World. Right now.","Enroll in CS50P at cs50.harvard.edu/python — FREE","Open Codex.io — complete the first 3 Python game levels tonight","Solve 3 LeetCode Easy: Two Sum, Reverse String, Valid Palindrome","Post on LinkedIn: 'Day 1 of my SDE journey. Starting CS50P and Python today.' — Starts your inbound networking from Day 1.","Write in a notebook: 'I will get a MAANG internship by 2027.'"],
        resource:"CS50P (cs50.harvard.edu/python) | Codex.io | LeetCode Array 101",
        checkpoint:"All accounts created | Python installed | 3 LeetCode solved | First LinkedIn post published",
        videoInsight:"Video: Codex.io teaches Python through a Zelda-like game — you write loops and functions to fight enemies. Use alongside CS50P in Week 1." },
      { weekNum:2, dates:"Mar 16–22, 2026", title:"Python Basics — Build While You Learn", priority:"CRITICAL",
        tasks:["CS50P: Complete Week 1–2 (Functions, Conditionals, Loops)","Codex.io: Complete Levels 4–8","LeetCode: 5 Easy problems — arrays and strings only","LinkedIn Learning: 'Python Essential Training' — first 3 modules","BUILD: To-Do List app in Python RIGHT NOW — do not wait to finish the course first","GitHub: Push your To-Do List app today. Even 30 lines counts.","Post on LinkedIn: 'Built my first Python project.' Attach a screenshot."],
        resource:"CS50P | Codex.io | LeetCode Array | LinkedIn Learning: Python Essential Training",
        checkpoint:"8 LeetCode Easy | To-Do List app on GitHub | 2 LinkedIn posts published",
        videoInsight:"Build-to-Code rule: Build a To-Do List while learning Week 2 basics. Do not wait until you finish the course." },
      { weekNum:3, dates:"Mar 23–29, 2026", title:"OOPs + Calculator + Impact Mindset", priority:"CRITICAL",
        tasks:["CS50P: Complete Week 3–4 (Exceptions, Libraries, OOPs)","Learn OOPs in Python: Classes, Objects, Inheritance, Polymorphism","LeetCode: 7 more Easy problems","LinkedIn Learning: 'Programming Foundations: Algorithms' — complete fully","BUILD: Calculator app — practice functions, conditionals, arithmetic","CRITICAL: For every project write: 'This helps [who] do [what] better by [how much].' Practice impact thinking NOW."],
        resource:"CS50P | LinkedIn Learning: Programming Foundations Algorithms | Striver YouTube",
        checkpoint:"15 LeetCode | Calculator on GitHub | OOPs code written | Impact statement for each project",
        videoInsight:"The WHY and impact matter more than the tech stack. A food waste app beats an ML weather app. Train this thinking from Week 3." },
      { weekNum:4, dates:"Mar 30 – Apr 5, 2026", title:"DSA Begins + Web Scraper + csvvistool", priority:"CRITICAL",
        tasks:["CS50P: Complete Week 5–6 (Unit Tests, File I/O)","LeetCode: 10 problems — Array Easy/Medium, Two Pointers","Learn Big O: O(1), O(n), O(log n), O(n²) — must know these cold","LinkedIn Learning: 'Git Essential Training' — complete fully","BUILD: Web Scraper using Python's BeautifulSoup + requests library","Visit csvvistool.com — explore Array and LinkedList visualizations. Watch code execute step by step.","Start DBMS: SQL basics — SELECT, INSERT, UPDATE, DELETE, JOINs"],
        resource:"LeetCode Array 101 | csvvistool.com | LinkedIn Learning: Git | BeautifulSoup docs",
        checkpoint:"25 LeetCode | Web Scraper on GitHub | csvvistool explored | Big O understood",
        videoInsight:"csvvistool.com (built by Georgia Tech) is the first DSA visualization tool. Use it from Week 4 for every new data structure." },
      { weekNum:5, dates:"Apr 6–12, 2026", title:"Linked Lists + Two Visualization Tools", priority:"HIGH",
        tasks:["Study Linked Lists: Singly, Doubly, Circular — implement from scratch in Python","LeetCode: 7 Linked List problems (Reverse Linked List, Detect Cycle, Merge Two Sorted Lists)","csvvistool.com: Visualize LinkedList operations","visualgo.net: See LinkedList with actual code, not pseudocode","CS50P: Complete final project","LinkedIn Learning: 'SQL Essential Training' — first half"],
        resource:"csvvistool.com | visualgo.net | LeetCode Linked List | LinkedIn Learning: SQL",
        checkpoint:"32 LeetCode | Linked List coded from scratch | CS50P Final done | Both visualization tools explored",
        videoInsight:"Start with csvvistool.com, then graduate to visualgo.net when ready for intermediate/advanced structures." },
      { weekNum:6, dates:"Apr 13–19, 2026", title:"Stacks + Queues + PASSWORD MANAGER", priority:"HIGH",
        tasks:["Study Stacks and Queues — implement using Python lists and collections.deque","LeetCode: 8 Stack/Queue problems (Valid Parentheses, Min Stack)","LinkedIn Learning: 'SQL Essential Training' — second half","HackerRank: 10 SQL Basic challenges","BUILD: Password Manager — Python cryptography library (AES encryption) + SQLite + Pygame GUI","First Codeforces Div.4 contest — just attempt it. Result doesn't matter."],
        resource:"LeetCode Stack | Python cryptography library docs | Pygame docs | LinkedIn Learning: SQL",
        checkpoint:"40 LeetCode | Password Manager with encryption working | 10 HackerRank SQL done | First CF contest",
        videoInsight:"Password Manager 'could become a pretty big deal' in interviews. Frame it around security impact: 'I implemented AES-256 encryption to ensure zero plaintext storage.'" },
      { weekNum:7, dates:"Apr 20–26, 2026", title:"Expense Tracker — Deploy It", priority:"HIGH",
        tasks:["Build Expense Tracker: Flask + SQLite + Pandas (analysis) + Matplotlib (charts) + user auth","Features: add/delete expenses, category breakdown, monthly chart, CSV export","LeetCode: 5 problems minimum — never break the streak during project weeks","Write professional README for both projects on GitHub","Deploy on Railway.app (free tier) — get a live URL","Post on LinkedIn: 30-second screen recording + GitHub link + impact statement"],
        resource:"Flask docs | Pandas docs | Matplotlib docs | Railway.app",
        checkpoint:"45 LeetCode | Expense Tracker live URL | Password Manager complete | LinkedIn post with demo",
        videoInsight:"If you build Expense Tracker well, deploy it and consider selling it. Impact: 'Helps users reduce unnecessary spending by making monthly patterns visible.'" },
      { weekNum:8, dates:"Apr 27 – May 3, 2026", title:"Trees + NLP Chatbot Begins", priority:"HIGH",
        tasks:["Study Binary Trees: BFS, DFS (Inorder, Preorder, Postorder), Level Order Traversal","LeetCode: 10 Tree problems (Max Depth, Symmetric Tree, Path Sum)","visualgo.net: Visualize BST — insertion, deletion, search","START NLP Chatbot: Python NLTK — basic chatbot with predefined responses","Next step: Integrate Google Speech API for voice input","Deploy Expense Tracker → add live URL to LinkedIn Featured section","Study for exams — CGPA above 8.0 is your shortlisting ticket"],
        resource:"LeetCode Tree | visualgo.net BST | Python NLTK docs | Google Speech API docs",
        checkpoint:"55 LeetCode | NLP Chatbot basic working | Tree traversals coded | Expense Tracker with live URL on LinkedIn",
        videoInsight:"NLP Chatbot is an advanced Level 2 project. Add Google Speech API voice to make it dramatically more impressive." },
      { weekNum:9, dates:"May 4–10, 2026", title:"Exam Mode — Keep the Streak", priority:"MEDIUM",
        tasks:["Focus on semester exams — CGPA above 8.0 is non-negotiable","LeetCode: MINIMUM 2 problems this week — never break the streak","Practice explaining all 3 projects out loud in 60 seconds each","LinkedIn: Update profile with all completed projects and CS50P"],
        resource:"College notes | LeetCode Easy for streak",
        checkpoint:"58 LeetCode | All 3 projects on GitHub | Profile updated | Exams done well",
        videoInsight:"Be able to explain WHY you built every project. Practice this during exam week." },
      { weekNum:10, dates:"May 11–31, 2026", title:"End of Year 1 — Review and Plan Year 2", priority:"MEDIUM",
        tasks:["Count: LeetCode problems? GitHub commits? LinkedIn posts? Projects live?","Earn HackerRank Python 5-Star badge — FREE, takes 1 week","Write: Achievements + failures + Year 2 plan","Google: 'top Amazon LeetCode questions' and 'top Google LeetCode questions' — bookmark for Year 2","Search GitHub for 'practical-tutorials' repository — browse project ideas","Rest 1 week after exams. Then use remaining summer for Year 2 prep."],
        resource:"HackerRank Python | LinkedIn Learning OOPs | GitHub practical-tutorials",
        checkpoint:"60+ LeetCode | Python 5-Star HackerRank | Company-specific LeetCode lists bookmarked | Year 2 plan written",
        videoInsight:"Search company-specific LeetCode lists rather than random grinding. Bookmark Amazon, Google, Microsoft lists for Year 2." },
    ]
  },
  {
    phase: "Year 2 · Sem 3", phaseShort: "Y2 Sem 3",
    weeks: [
      { weekNum:11, dates:"Jun 1 – Aug 31, 2026", title:"Summer + Sem 3: Graphs + OS + DBMS + Inbound Networking", priority:"CRITICAL",
        tasks:["Graphs: BFS, DFS, Adjacency List — implement in Python","csvvistool.com: DFS visualization — watch visited set, current vertex, recursive stack update","LeetCode: Target 150 total. Use Amazon-specific and Google-specific question lists.","OS Theory: Processes, Threads, Deadlocks, Memory — Gate Smashers YouTube","DBMS: Normalization, SQL Joins, Transactions, ACID properties","Build REST API (E-Commerce) — Python + FastAPI + MySQL + JWT auth","INBOUND NETWORKING: Post on LinkedIn every week about what you are building","LinkedIn Learning: 'Become a Software Developer' full path (7 courses)","Codeforces: Every week — target 1200+ rating","CLEAR AWS Cloud Practitioner exam","Contribute to 1 open source project — find 'good first issue' on GitHub"],
        resource:"csvvistool.com for DFS | Gate Smashers OS+DBMS | LinkedIn Learning Software Dev path | Striver Graph YouTube",
        checkpoint:"150 LeetCode | REST API live | AWS CLF certified | CF 1200+ | Weekly LinkedIn posts active",
        videoInsight:"Engineers who post projects on LinkedIn/Twitter get hired without ever applying. One engineer got his last 2 jobs because founders saw his Twitter projects. Start inbound NOW." },
      { weekNum:12, dates:"Sep 1 – Nov 30, 2026", title:"DP + System Design Intro + Startup Internship", priority:"CRITICAL",
        tasks:["Dynamic Programming: Fibonacci, 0/1 Knapsack, LCS, LIS","Target: 200 LeetCode by end of Sem 3. Mix Amazon-specific + general Medium/Hard.","GFG method: Stuck on LeetCode? Paste into GFG. Read solution. Close window. Code from memory. NEVER copy-paste.","Build CI/CD pipeline: GitHub Actions + Docker","Apply to 5+ startup internships on Internshala","System Design basics: Load balancing, caching, CDN — Gaurav Sen YouTube","Codeforces: Every Div.3 contest — aim 1200+","Devfolio.co: Participate in 1 hackathon"],
        resource:"Striver DP Series | GeeksForGeeks | Gaurav Sen YouTube | Devfolio.co",
        checkpoint:"200 LeetCode | AWS CLF certified | 1 PR merged on open source | CF 1200+ | Startup internship applied",
        videoInsight:"GFG strategy: Read, understand, close, then code from memory. This is the only way that builds real skill." },
    ]
  },
  {
    phase: "Year 2 · Sem 4", phaseShort: "Y2 Sem 4",
    weeks: [
      { weekNum:13, dates:"Dec 2026 – Feb 2027", title:"System Design + URL Shortener + 250 LeetCode", priority:"CRITICAL",
        tasks:["System Design: Load Balancers, Redis Caching, CDN, SQL vs NoSQL, Microservices","LeetCode: 50 more — Sliding Window, Two Pointers, DP Hard Mediums","Search 'top Microsoft LeetCode questions' and 'top Google LeetCode questions'","Build: Distributed URL Shortener — Python + Redis + MySQL + Docker","LinkedIn Learning: 'Docker Essential Training'","DeepLearning.AI TensorFlow cert: enroll on Coursera","Apply to Google STEP and Amazon early internship programs","Codeforces: Target 1400 (Specialist) by end of Year 2","Post URL Shortener on LinkedIn with architecture diagram"],
        resource:"Gaurav Sen YouTube | Alex Xu System Design Book | LinkedIn Learning Docker | visualgo.net review",
        checkpoint:"250 LeetCode | URL Shortener deployed | Docker on GitHub | CF 1300+",
        videoInsight:"A LinkedIn post with an architecture diagram gets significantly more engagement from engineers. MAANG engineers respect people who think about system design." },
      { weekNum:14, dates:"Mar 2027 – May 2027", title:"ML Project + AWS SAA Prep + 300 LeetCode", priority:"CRITICAL",
        tasks:["Build: Spotify Song Popularity Predictor — scikit-learn + Streamlit (deployed, live URL)","Complete DeepLearning.AI TensorFlow certificate","Target: 300 LeetCode problems","AWS Solutions Architect Associate: Begin LinkedIn Learning prep","LinkedIn Learning: 'Machine Learning with Python'","Update resume with all new projects and certifications","Reddit r/cscareerquestions: Research what Amazon/Google interns say about their actual interview experience","Post Spotify project on LinkedIn: live Streamlit link + ML algorithms used + accuracy achieved"],
        resource:"LinkedIn Learning ML courses | Streamlit docs | Reddit r/cscareerquestions",
        checkpoint:"300 LeetCode | ML project live | TensorFlow cert | AWS SAA prep started | Resume updated",
        videoInsight:"Use Reddit r/leetcode to find recently asked company questions. Real interview reports from candidates are invaluable." },
    ]
  },
  {
    phase: "Year 3 · Sem 5 — MOST CRITICAL", phaseShort: "Y3 Sem 5",
    weeks: [
      { weekNum:15, dates:"Jun 2027 – Aug 2027", title:"350 LeetCode + MAANG Applications Open", priority:"CRITICAL",
        tasks:["LeetCode: Push to 350 total. Minimum 30 Hard problems. Use ONLY company-specific lists.","GFG method for every hard problem: Read → Close → Code from memory","CLEAR AWS Solutions Architect Associate","Build: Real-Time Chat App — WebSockets + Redis Pub/Sub + React","System Design practice: URL Shortener, Twitter, WhatsApp","Inbound check: 500+ LinkedIn followers from consistent posting?","September: MAANG applications OPEN. Apply Day 1 to Amazon, Microsoft, Google.","Revise all 16 Amazon Leadership Principles. 1 STAR story per principle.","Pramp.com: 5 timed mock interviews"],
        resource:"Pramp.com | LeetCode Amazon/Google lists | AWS SAA LinkedIn Learning | visualgo.net review",
        checkpoint:"350 LeetCode | AWS SAA certified | Chat App deployed | Applied MAANG Day 1 | 500+ LinkedIn followers",
        videoInsight:"The Amazon engineer literally got 'Find K Smallest Pair Distance' in their final round from a company-specific LeetCode list. Company-specific practice is not optional." },
      { weekNum:16, dates:"Sep 2027 – Nov 2027", title:"INTERVIEW SEASON — All or Nothing", priority:"CRITICAL",
        tasks:["Amazon OA: 2 problems in 90 min. Run 15 timed sessions on Amazon-specific LeetCode list first.","Daily: 2 timed LeetCode (1 Medium + 1 Hard) in 45 minutes each. Non-negotiable.","Daily: STAR method practice out loud. Record your voice. Listen back.","GeeksForGeeks: Use for any unclear concept — algorithms, OS, DBMS, OOPs","Apply to 50+ companies: Amazon, Microsoft, Google, Flipkart, Walmart, Adobe, Atlassian","Keep posting on LinkedIn even during interview season. Recruiters watch."],
        resource:"Pramp.com daily | LeetCode Amazon list | GeeksForGeeks | csvvistool + visualgo for quick revision",
        checkpoint:"400 LeetCode | Amazon OA cleared | 2+ interview calls | LinkedIn active",
        videoInsight:"Think aloud in every interview. Interviewers evaluate your thought process, not just the answer. Silence while coding is a red flag." },
    ]
  },
  {
    phase: "Year 3 · Sem 6 — Convert the Offer", phaseShort: "Y3 Sem 6",
    weeks: [
      { weekNum:17, dates:"Dec 2027 – May 2028", title:"Final Interviews + Internship → PPO", priority:"CRITICAL",
        tasks:["Technical round: Always state your approach before coding. Think aloud.","System Design round: Scope → API → Data Model → Scale","Internship Day 1: Deliver your project 20% ahead of schedule","Ask for feedback at Week 4 and Week 8 of internship — explicitly","Keep posting on LinkedIn during internship: 'What I learned Week 1 as an intern'","PPO: Perform in top 25% of interns. Make your manager's job easier every day.","Build: Fraud Detection Pipeline — Kafka + XGBoost + AWS SageMaker (crown jewel project)","CGPA: Maintain above 8.0 for offer letter"],
        resource:"Your manager | Alex Xu System Design | Pramp final practice",
        checkpoint:"INTERNSHIP OFFER | PPO CONVERTED | FAMILY'S FINANCIAL FREEDOM ACHIEVED",
        videoInsight:"Even during internship, post about what you are learning. This builds your brand and your next job will find you." },
    ]
  },
];

const PYRAMID = [
  { level:1, title:"Learn How to Code", tag:"Avoid tutorial hell. Use the Build-to-Code framework.", color:"#3b82f6",
    desc:"Most people fall into tutorial hell — watching endless tutorials without building anything. You do NOT learn coding by watching. You learn by doing. Build-to-Code: learn a concept → build something with it immediately.",
    actions:["Start CS50 by Harvard (cs50.harvard.edu) — free, covers algorithms, data structures, computer architecture","Pick Python — used in web dev, data science, ML, easiest to start with","Use Codex.io — learn Python through a Zelda-like game. Write loops and functions to fight enemies.","Use FreeCodeCamp.org for traditional Python lessons","While learning: build a To-Do List app, Calculator, and Web Scraper simultaneously"],
    warning:"If you spend more time watching tutorials than writing code, you are in tutorial hell. Stop. Open your code editor and BUILD." },
  { level:2, title:"Build Real Projects", tag:"Projects are work experience before you have work experience.", color:"#f97316",
    desc:"Your day-to-day as an engineer is just doing projects. Before you get hired, you need quality projects to prove you have the skills. Technology does NOT matter as much as IMPACT.",
    actions:["Build Expense Tracker with Pandas + Matplotlib + Flask — practical, deployable, can be sold","Build Password Manager using Python's cryptography library + Pygame GUI — cybersecurity concepts","Build NLP Chatbot using NLTK, then integrate Google Speech API for voice","For ideas: search 'practical-tutorials' repository on GitHub","ALWAYS write: 'This helps [who] do [what] better by [how much].' before every build."],
    warning:"A project with no clear problem statement is weak. If you cannot explain the impact in one sentence, rethink the project." },
  { level:3, title:"Build a Standout Resume", tag:"The format that got a college student hired at Amazon.", color:"#22c55e",
    desc:"Your resume contains psychological triggers that make recruiters pause. Most are skipped in 6 seconds. Yours needs to demand 60 seconds.",
    actions:["Header: Name bold + centered. Email + Phone only. Add LinkedIn and GitHub.","Education: Bold college. Italicize degree + graduation date. CGPA only if 8.0+.","Skills: Use exact keywords from job descriptions for ATS scanning.","Projects: Name, tech stack, 2–3 bullets with action verbs, measurable impact numbers.","Experience: Frame everything with impact — 'reduced X by Y%', 'served N users'."],
    warning:"One page. Always. No colors. No photos. No objectives. If it is 2 pages, you are not editing enough." },
  { level:4, title:"Networking and Referrals", tag:"Level 3 makes recruiters come to YOU.", color:"#a855f7",
    desc:"Most people only do Level 1 (cold applying). Engineers getting the best jobs are doing Level 3.",
    actions:["Level 1 — Cold Applications: Apply on LinkedIn, Amazon Jobs, Google Careers.","Level 2 — The LeBron Referral: Connect with hiring managers directly. Have them vouch for you.","Level 3 — Inbound Networking: Post projects on LinkedIn and Twitter. Founders reach out to YOU.","Post every project: demo video, tech stack, problem it solves","Goal: By Year 3, recruiters message YOU because of your content — not the other way around"],
    warning:"If you only cold apply, you compete with 10,000 others. If you build an online presence, recruiters come to you. Post on LinkedIn this week." },
  { level:5, title:"Technical Interview Prep", tag:"The exact sequence to never fail a technical interview.", color:"#ef4444",
    desc:"You have projects, resume, and interview calls. Now you must pass. Here is the exact sequence.",
    actions:["Step 1: csvvistool.com (Georgia Tech) — see data structures animate with code. Start here.","Step 2: visualgo.net for intermediate/advanced structures with real code.","Step 3: Google 'LeetCode Amazon questions' — practice company-specific problems only.","Step 4: Reddit r/leetcode for recently asked company questions before your interview.","Step 5: Stuck on LeetCode? GFG: Read fully → close window → code from memory. Never copy-paste."],
    warning:"150 company-specific problems beats 500 random problems. In the video, the engineer got the EXACT problem 'Find K Smallest Pair Distance' from an Amazon-specific list in their final round." },
];

const PROJECTS = [
  { tier:1, name:"Distributed URL Shortener", year:"Year 2", difficulty:"HARD",
    tech:["Python","Redis","MySQL","Docker","AWS EC2"],
    why:"Amazon and Google's #1 system design interview question. When they ask 'Design a URL shortener', you say: 'I built one.'",
    impact:"10K concurrent requests, consistent hashing, Redis caching, rate limiting, analytics dashboard",
    bullet:"Built distributed URL shortener handling 10K+ concurrent requests using Redis caching, MySQL persistence, Docker deployed on AWS EC2",
    skills:["Distributed Systems","Caching","REST API","Docker","Cloud"],
    tip:"Post on LinkedIn with an architecture diagram. It attracts MAANG engineers to comment — inbound networking in action." },
  { tier:1, name:"Real-Time Chat Application", year:"Year 2", difficulty:"HARD",
    tech:["Python","WebSockets","Redis Pub/Sub","MongoDB","React"],
    why:"Meta builds communication systems. Amazon has Chime. Shows real-time architecture mastery.",
    impact:"500+ concurrent users, message persistence, typing indicators, read receipts",
    bullet:"Developed real-time chat supporting 500+ concurrent users using WebSocket protocol, Redis Pub/Sub broadcasting, MongoDB persistence",
    skills:["WebSockets","Real-time","Full Stack","Message Queues"],
    tip:"'How I built a real-time chat in 2 weeks' performs extremely well on LinkedIn and builds engineering credibility." },
  { tier:1, name:"NLP Chatbot with Voice (AIML Advantage)", year:"Year 2–3", difficulty:"MEDIUM-HARD",
    tech:["Python","NLTK","Google Speech API","FastAPI","React"],
    why:"Your AIML specialization in action. NLP + voice using production APIs shows you build real AI, not just Jupyter notebooks.",
    impact:"Intent classification → Google Speech-to-Text → real-time voice conversations via API",
    bullet:"Built voice-enabled NLP chatbot using Python NLTK for intent classification and Google Speech-to-Text API, handling real-time voice via FastAPI",
    skills:["NLP","Voice AI","APIs","Full Stack","ML"],
    tip:"Start with NLTK predefined responses, then integrate Google Speech API. The voice feature makes it dramatically more impressive." },
  { tier:1, name:"Real-Time Fraud Detection System", year:"Year 3", difficulty:"HARD",
    tech:["Python","XGBoost","Apache Kafka","AWS SageMaker","Docker"],
    why:"Amazon Pay, Google Pay, Meta Pay — all have fraud detection. Shows Day 1 production thinking.",
    impact:"1000+ transactions/sec, 91% accuracy, real-time alerts, automated retraining pipeline",
    bullet:"Engineered fraud detection pipeline processing 1K+ transactions/sec using XGBoost (91% accuracy), Kafka streaming, AWS SageMaker deployment",
    skills:["MLOps","Streaming Data","Cloud","Model Deployment"],
    tip:"Your Year 3 crown jewel. Impact is crystal clear: prevents financial fraud in real time." },
  { tier:2, name:"Expense Tracker", year:"Year 1", difficulty:"MEDIUM",
    tech:["Python","Flask","Pandas","Matplotlib","SQLite"],
    why:"Uses data manipulation, visualization, and a web framework — three skills in one project. Can be deployed and sold.",
    impact:"User auth, spending categories, monthly Matplotlib charts, CSV export, Flask web UI",
    bullet:"Built full-stack expense tracker using Flask + Pandas with interactive Matplotlib spending visualizations and user authentication",
    skills:["Flask","Data Analysis","Visualization","Authentication"],
    tip:"If you build this well, deploy it and consider selling it as a side hustle." },
  { tier:2, name:"Password Manager (Cybersecurity)", year:"Year 1", difficulty:"MEDIUM",
    tech:["Python","cryptography library","Pygame","SQLite"],
    why:"Shows security-by-design thinking. MAANG companies care deeply about security. Encryption, secure storage, retrieval.",
    impact:"AES-256 encryption, zero plaintext storage, master password auth, Pygame GUI",
    bullet:"Developed encrypted password manager using Python cryptography library (AES-256), Pygame GUI, SQLite — secure-by-design principles",
    skills:["Cybersecurity","Encryption","GUI","Security Design"],
    tip:"Video calls this 'a pretty big deal' in interviews. Prepare to explain: algorithm, storage, retrieval." },
  { tier:2, name:"Web Scraper", year:"Year 1", difficulty:"EASY-MEDIUM",
    tech:["Python","BeautifulSoup","requests","Pandas"],
    why:"Shows you work with real web data and external libraries. Foundation skill for data engineering.",
    impact:"Scrape multiple sites, parse structured data, export to CSV/JSON, error handling",
    bullet:"Built Python web scraper using BeautifulSoup extracting structured data from 5+ websites with error handling and Pandas-based CSV export",
    skills:["Web Data","APIs","Data Parsing","Libraries"],
    tip:"Build this in Week 4 alongside learning requests/BeautifulSoup. Quick to build, teaches real library usage." },
  { tier:2, name:"E-Commerce REST API Backend", year:"Year 2", difficulty:"MEDIUM",
    tech:["Python","FastAPI","MySQL","JWT","Redis"],
    why:"Amazon IS e-commerce. A backend API with auth, CRUD, and caching shows you understand what they build.",
    impact:"50+ endpoints, JWT auth, Redis caching reducing DB load by 40%",
    bullet:"Built e-commerce REST API with JWT authentication, 50+ endpoints, Redis caching reducing database load by 40%",
    skills:["REST APIs","Auth","Databases","Caching","Backend"],
    tip:"Add a real metric: 'supports 1000 concurrent users' or 'sub-100ms response time on all endpoints.'" },
];

const DAILY_TASKS = [
  { id:"leetcode", icon:"⚡", text:"Solved at least 1 LeetCode problem (use company-specific list, not random)", cat:"DSA" },
  { id:"build", icon:"🏗️", text:"Wrote real project code today — NOT just watched a tutorial (Build-to-Code rule)", cat:"Projects" },
  { id:"theory", icon:"📖", text:"Studied CS theory 30+ min (OS / DBMS / CN / OOPs)", cat:"Theory" },
  { id:"github", icon:"🐙", text:"Made at least 1 GitHub commit today", cat:"GitHub" },
  { id:"course", icon:"🎓", text:"Completed at least 1 module of active course (LinkedIn Learning / CS50P / Codex.io)", cat:"Learning" },
  { id:"linkedin", icon:"💼", text:"Posted, commented, or sent a connection request with personal message on LinkedIn", cat:"Network" },
  { id:"visual", icon:"👁️", text:"Used csvvistool.com or visualgo.net to visualize a DSA concept", cat:"DSA Visual" },
  { id:"cp", icon:"🏆", text:"Practiced on Codeforces or participated in a contest", cat:"CP" },
  { id:"noTutHell", icon:"🚫", text:"Did NOT spend more time watching coding tutorials than actually writing code", cat:"Discipline" },
  { id:"explain", icon:"🗣️", text:"Explained one concept or project out loud — communication practice", cat:"Comms" },
];

const CERTIFICATIONS = [
  { name:"CS50x (Harvard Computer Science)", provider:"Harvard/edX", cost:"FREE", when:"Year 1 — NOW", priority:"DO NOW", why:"Harvard's name. Google recruiters recognize CS50 immediately.", link:"https://cs50.harvard.edu" },
  { name:"HackerRank Python 5-Star", provider:"HackerRank", cost:"FREE", when:"Year 1 — Now", priority:"DO NOW", why:"Amazon and Microsoft use HackerRank for OA tests. 5-star badge = cleared their hardest challenges.", link:"https://hackerrank.com" },
  { name:"HackerRank SQL 5-Star", provider:"HackerRank", cost:"FREE", when:"Year 1", priority:"DO NOW", why:"SQL tested directly at Amazon and Microsoft.", link:"https://hackerrank.com" },
  { name:"AWS Cloud Practitioner (CLF-C02)", provider:"Amazon Web Services", cost:"~₹9,000", when:"Year 2, Sem 3", priority:"HIGH", why:"Amazon runs on AWS. You speak their language from Day 1.", link:"https://aws.amazon.com/certification" },
  { name:"DeepLearning.AI TensorFlow Developer", provider:"Coursera + Google", cost:"~₹3,600/mo", when:"Year 2", priority:"HIGH", why:"Your AIML advantage. Proof you can build and deploy neural networks.", link:"https://coursera.org" },
  { name:"AWS Solutions Architect Associate", provider:"Amazon Web Services", cost:"~₹13,500", when:"Year 3", priority:"GOLD", why:"Gold standard cloud cert. Mentioned directly in Amazon SDE job postings.", link:"https://aws.amazon.com/certification" },
  { name:"Meta Back-End Developer Certificate", provider:"Meta/Coursera", cost:"~₹3,600/mo", when:"Year 2", priority:"HIGH", why:"Meta's own certificate. Django, APIs, databases. Meta recruiters notice it.", link:"https://coursera.org" },
  { name:"Google Professional ML Engineer", provider:"Google Cloud", cost:"~₹18,000", when:"Year 3", priority:"HIGH", why:"Google values this for ML-adjacent SDE roles. AIML degree + this cert is a strong combination.", link:"https://cloud.google.com/learn/certification" },
];

const SKILLS_DATA = {
  "Languages": [
    { name:"Python", level:90, target:"Primary — master this first" },
    { name:"SQL", level:75, target:"Tested at Amazon & Microsoft" },
    { name:"Java", level:40, target:"Useful for Amazon/Microsoft" },
    { name:"JavaScript", level:35, target:"Frontend basics" },
    { name:"C++", level:30, target:"CP and low-level coding" },
  ],
  "Frameworks & Libraries": [
    { name:"FastAPI/Flask", level:70, target:"Backend APIs — primary" },
    { name:"React", level:45, target:"Frontend for projects" },
    { name:"Pandas/NumPy", level:65, target:"Data manipulation" },
    { name:"scikit-learn", level:55, target:"ML models" },
    { name:"NLTK", level:50, target:"NLP chatbot project" },
    { name:"cryptography lib", level:50, target:"Password manager" },
  ],
  "Databases & Caching": [
    { name:"MySQL", level:65, target:"Primary RDBMS" },
    { name:"Redis", level:30, target:"Caching — URL shortener project" },
    { name:"MongoDB", level:35, target:"NoSQL — chat app project" },
    { name:"SQLite", level:70, target:"Dev/project databases" },
  ],
  "Cloud & DevOps": [
    { name:"AWS (EC2, S3, Lambda)", level:25, target:"Cloud Practitioner → SAA path" },
    { name:"Docker", level:30, target:"LinkedIn Learning course" },
    { name:"GitHub Actions", level:35, target:"CI/CD pipeline project" },
    { name:"Git", level:75, target:"Daily — commit every day" },
  ],
  "CS Fundamentals": [
    { name:"Data Structures & Algorithms", level:50, target:"Daily LeetCode to 400+" },
    { name:"Operating Systems", level:40, target:"Gate Smashers YouTube" },
    { name:"DBMS", level:50, target:"Gate Smashers YouTube" },
    { name:"System Design", level:15, target:"Gaurav Sen YouTube — Year 2" },
    { name:"OOPs", level:55, target:"LinkedIn Learning course done" },
  ],
};

const LINKEDIN_LEARNING = [
  { name:"Python Essential Training", instructor:"Ryan Mitchell", duration:"4h 30m", when:"Week 2 — NOW", priority:"CRITICAL", cat:"Programming", why:"All Python essentials by a senior engineer." },
  { name:"Programming Foundations: Algorithms", instructor:"Joe Marini (Google Dev Advocate)", duration:"3h 45m", when:"Week 3", priority:"CRITICAL", cat:"DSA", why:"Taught by a Google Developer Advocate. Directly tested in MAANG interviews." },
  { name:"Git Essential Training", instructor:"Kevin Skoglund", duration:"3h 10m", when:"Week 4", priority:"CRITICAL", cat:"Tools", why:"Every MAANG engineer uses Git. Not knowing it in an interview is disqualifying." },
  { name:"SQL Essential Training", instructor:"Walter Shields", duration:"3h 50m", when:"Week 6", priority:"CRITICAL", cat:"Databases", why:"SQL tested directly at Amazon and Microsoft." },
  { name:"Programming Foundations: OOP", instructor:"Olivia Chiu Stone", duration:"2h 45m", when:"Sem 2 end", priority:"HIGH", cat:"OOPs", why:"Inheritance, polymorphism, abstraction — tested at Amazon and Microsoft." },
  { name:"Become a Software Developer (Path)", instructor:"Multiple Experts", duration:"~20h", when:"Year 2 Sem 3", priority:"HIGH", cat:"Full Path", why:"7-course path. Directly matches MAANG fresher expectations." },
  { name:"Docker Essential Training", instructor:"Arthur Ulfeldt", duration:"2h 40m", when:"Year 2 Sem 3", priority:"HIGH", cat:"DevOps", why:"MAANG engineers use Docker daily." },
  { name:"REST APIs", instructor:"LinkedIn Learning", duration:"4h path", when:"Year 2 Sem 3", priority:"HIGH", cat:"Backend", why:"Deep HTTP and authentication understanding is mandatory." },
  { name:"Machine Learning with Python: Foundations", instructor:"Derek Jedamski", duration:"3h 20m", when:"Year 2 Sem 4", priority:"HIGH", cat:"ML/AI", why:"Core ML in Python — your AIML advantage." },
  { name:"AI Foundations: Machine Learning", instructor:"Doug Rose", duration:"1h 50m", when:"Year 2 Sem 4", priority:"HIGH", cat:"ML/AI", why:"Conceptual ML foundations. What Google and Amazon build with AI." },
  { name:"Learning Kubernetes", instructor:"Kim Schlesinger", duration:"2h 20m", when:"Year 2", priority:"MEDIUM", cat:"DevOps", why:"MAANG runs Kubernetes at massive scale." },
  { name:"AWS Cloud Practitioner Exam Prep", instructor:"LinkedIn Learning", duration:"8h path", when:"Year 2 before exam", priority:"HIGH", cat:"Cloud", why:"Direct prep for AWS CLF certification." },
  { name:"AWS Solutions Architect Prep", instructor:"LinkedIn Learning", duration:"10h path", when:"Year 3", priority:"HIGH", cat:"Cloud", why:"Direct prep for AWS SAA — your most powerful certification." },
  { name:"Strategic Thinking", instructor:"Dorie Clark", duration:"2h", when:"Year 2+", priority:"MEDIUM", cat:"Soft Skills", why:"MAANG evaluates cognitive ability and big-picture thinking." },
];

const DSA_TOOLS = [
  { name:"csvvistool.com", level:"Beginner → Intermediate", levelColor:"#3b82f6", linkColor:"#3b82f6",
    desc:"Built by Georgia Tech. Animates data structures with step-by-step visualization and pseudocode. Watch exactly what happens when you add to an ArrayList, traverse a tree, or run DFS with recursive stack visible.",
    bestFor:["Arrays","Linked Lists","Stacks","Queues","Trees","Graphs DFS/BFS","Recursion"],
    tip:"Especially powerful for Graphs — DFS visualization shows visited set, current vertex, and recursive stack all updating in real time.",
    when:"Week 4 onwards", url:"https://csvvistool.com" },
  { name:"visualgo.net", level:"Intermediate → Advanced", levelColor:"#22c55e", linkColor:"#22c55e",
    desc:"More comprehensive than csvvistool. Shows actual code (not pseudocode). Better for Binary Heaps, AVL Trees, Dijkstra, Union-Find, and advanced sorting algorithms.",
    bestFor:["Binary Heap","AVL Trees","Sorting algorithms","Dijkstra","Union-Find"],
    tip:"Graduate here from Week 5. Explains WHY elements swap during heap construction and shows time complexity changes live.",
    when:"Week 5 onwards", url:"https://visualgo.net" },
  { name:"Codex.io", level:"Absolute Beginner", levelColor:"#f97316", linkColor:"#f97316",
    desc:"Teaches Python through a Zelda-like game. You write actual for loops, conditionals, and functions to defeat in-game enemies. Makes Week 1 Python learning addictive instead of boring.",
    bestFor:["For loops","Conditionals","Functions","Variables","Basic OOPs"],
    tip:"Complete first 10 levels in Week 1–2 alongside CS50P. Game format forces you to write code — not just watch.",
    when:"Week 1–2 only", url:"https://codex.io" },
  { name:"GeeksForGeeks — The Right Way", level:"All Levels", levelColor:"#a855f7", linkColor:"#a855f7",
    desc:"The correct GFG method: Stuck on LeetCode 30+ min → Google + GeeksForGeeks → READ the solution and ALL diagrams → Understand time/space complexity → CLOSE THE WINDOW → Code from memory.",
    bestFor:["Stuck LeetCode","Algorithm explanations","CS theory","Interview articles"],
    tip:"NEVER copy-paste from GFG. Read, close, then code from memory. If you fail, read again, close, try again. This is the only method that works.",
    when:"From Day 1 — for stuck problems only", url:"https://geeksforgeeks.org" },
  { name:"LeetCode Company-Specific Lists", level:"Interview Prep", levelColor:"#ef4444", linkColor:"#ef4444",
    desc:"Search 'top Amazon LeetCode questions' on Google. Curated lists of previously asked questions exist. In the video, the engineer got the EXACT problem 'Find K Smallest Pair Distance' from an Amazon list in their final round.",
    bestFor:["Amazon interview","Google interview","Microsoft OA","Company-specific prep"],
    tip:"150 company-specific problems beats 500 random. Also check Reddit r/leetcode for recently asked questions before your interview.",
    when:"Year 3 — 3 months before apps open", url:"https://leetcode.com/company" },
];

const POSTING_SCHEDULE = [
  { when:"Every Sunday", what:"Weekly update: LeetCode count, what you built, what you struggled with, next week plan" },
  { when:"Project launch", what:"30-second demo video + tech stack + problem it solves + GitHub link" },
  { when:"Cert earned", what:"Certificate image + what you learned + next target certification" },
  { when:"LeetCode milestone", what:"100/200/300/400 problems — post stats screenshot with those numbers" },
  { when:"Hackathon result", what:"Problem you solved + architecture + lessons learned — even if you didn't win" },
  { when:"Monthly", what:"Technical post: explain one DSA concept (Graphs, DP, Sliding Window) with a diagram" },
  { when:"DSA discovery", what:"'I was confused about [X] until I used csvvistool.com.' Educational posts get massive engagement." },
];

const RESUME_RULES = [
  "ONE PAGE ONLY — no exceptions, ever",
  "Use Jake's Resume Template (LaTeX) on Overleaf.com — free",
  "Font: Computer Modern or Times New Roman, 11pt. Margins: 0.5 inch.",
  "NO photo, NO objective statement, NO colors",
  "Header: Name bold + centered. Email + Phone only. Add LinkedIn + GitHub.",
  "Education: Bold college name. Italicize degree + graduation date. CGPA only if 8.0+.",
  "Every bullet: Action Verb → What You Built → Measurable Impact (%, number of users, latency ms)",
  "File name: FirstName_LastName_Resume.pdf",
  "ATS keywords: include exact words from job descriptions — 'distributed systems', 'REST API', 'Python', 'Docker', 'AWS'",
  "Test: Read each bullet out loud. If it sounds weak, add a number.",
];

/* ═══════════════════════════════════════════════
   HELPERS & STATE
═══════════════════════════════════════════════ */
const START_DATE = new Date('2026-03-09');
const todayDate = () => new Date();
const dateKey = d => d.toISOString().split('T')[0];
const todayKey = () => dateKey(todayDate());

const load = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

const clamp = (v, mn, mx) => Math.min(mx, Math.max(mn, v));
const pct = (v, max) => Math.round(clamp((v/max)*100, 0, 100));

/* ═══════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
});

// Theme toggle
let darkMode = load('theme', true);
const applyTheme = () => {
  document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = darkMode ? '🌙' : '☀️';
};
applyTheme();
document.getElementById('themeToggle').addEventListener('click', () => {
  darkMode = !darkMode;
  save('theme', darkMode);
  applyTheme();
});

// Sticky nav
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  nb.style.background = window.scrollY > 60
    ? (darkMode ? 'rgba(8,12,20,.98)' : 'rgba(240,244,255,.98)')
    : '';
});

/* ═══════════════════════════════════════════════
   HERO DAY COUNTER
═══════════════════════════════════════════════ */
const dayNum = Math.max(1, Math.floor((todayDate() - START_DATE) / 86400000) + 1);
document.getElementById('dayCounter').textContent = dayNum;

/* ═══════════════════════════════════════════════
   STATS / MODAL
═══════════════════════════════════════════════ */
let statsData = load('stats', { leetcode:0, cf:0, github:0, cgpa:0 });
let _editKey, _editMax, _editDecimal;

const updateStats = () => {
  ['leetcode','cf','github','cgpa'].forEach(k => {
    const maxMap = { leetcode:400, cf:1400, github:365, cgpa:10 };
    const v = statsData[k] || 0;
    const el = document.getElementById('val-'+k);
    const fill = document.getElementById('fill-'+k);
    if (el) el.textContent = k === 'cgpa' ? parseFloat(v).toFixed(1) : v;
    if (fill) fill.style.width = pct(v, maxMap[k]) + '%';
  });
};
updateStats();

window.openModal = (key, title, max, decimal=false) => {
  _editKey = key; _editMax = max; _editDecimal = decimal;
  document.getElementById('modalTitle').textContent = 'Update: ' + title;
  document.getElementById('modalInput').value = statsData[key] || 0;
  document.getElementById('modalInput').step = decimal ? '0.1' : '1';
  document.getElementById('modalBg').classList.add('open');
  document.getElementById('modalInput').focus();
};
window.closeModal = () => document.getElementById('modalBg').classList.remove('open');
window.saveModal = () => {
  const v = parseFloat(document.getElementById('modalInput').value) || 0;
  statsData[_editKey] = _editDecimal ? Math.min(v, _editMax) : Math.min(Math.round(v), _editMax);
  save('stats', statsData);
  updateStats();
  closeModal();
};
document.getElementById('modalInput').addEventListener('keydown', e => { if (e.key === 'Enter') saveModal(); });

/* ═══════════════════════════════════════════════
   CURRENT WEEK
═══════════════════════════════════════════════ */
const weekNum = Math.min(Math.ceil(dayNum / 7), 17);
const allWeeks = WEEKLY_ROADMAP.flatMap(p => p.weeks);
const cw = allWeeks[Math.min(weekNum - 1, allWeeks.length - 1)];
if (cw) {
  document.getElementById('cwTitle').textContent = `Week ${cw.weekNum} · ${cw.title}`;
  document.getElementById('cwDates').textContent = cw.dates;
  const ul = document.getElementById('cwTasks');
  cw.tasks.slice(0,5).forEach(t => {
    const li = document.createElement('li'); li.textContent = t; ul.appendChild(li);
  });
}

/* ═══════════════════════════════════════════════
   ROADMAP
═══════════════════════════════════════════════ */
let activePhase = 0;
const tabsCont = document.getElementById('phaseTabs');
const weeksCont = document.getElementById('weeksContainer');

const makeEl = (tag, cls) => { const e = document.createElement(tag); if (cls) e.className = cls; return e; };
const setTxt = (el, txt) => { el.textContent = txt; return el; };

const renderRoadmap = () => {
  tabsCont.innerHTML = '';
  WEEKLY_ROADMAP.forEach((phase, i) => {
    const btn = document.createElement('button');
    btn.className = 'phase-tab' + (i === activePhase ? ' active' : '');
    btn.textContent = phase.phaseShort;
    btn.onclick = () => { activePhase = i; renderRoadmap(); };
    tabsCont.appendChild(btn);
  });

  weeksCont.innerHTML = '';
  WEEKLY_ROADMAP[activePhase].weeks.forEach(week => {
    const card = makeEl('div', 'week-card reveal');

    // Header
    const header = makeEl('div', 'week-header');
    const numBadge = makeEl('div', 'week-num'); numBadge.textContent = 'W' + week.weekNum;
    const info = makeEl('div', 'week-info');
    const titleDiv = makeEl('div', 'week-title'); titleDiv.textContent = week.title;
    const datesDiv = makeEl('div', 'week-dates'); datesDiv.textContent = week.dates;
    info.appendChild(titleDiv); info.appendChild(datesDiv);
    const pri = makeEl('span', 'week-priority priority-' + week.priority); pri.textContent = week.priority;
    const arrow = makeEl('span', 'week-arrow'); arrow.textContent = '▼';
    header.appendChild(numBadge); header.appendChild(info); header.appendChild(pri); header.appendChild(arrow);
    header.onclick = () => { body.classList.toggle('open'); arrow.classList.toggle('open'); };
    card.appendChild(header);

    // Body
    const body = makeEl('div', 'week-body');

    // Tasks
    const ul = makeEl('ul', 'week-tasks');
    (week.tasks || []).forEach((t, i) => {
      const li = document.createElement('li');
      const sp = document.createElement('span'); sp.textContent = (i + 1) + '.';
      li.appendChild(sp);
      li.appendChild(document.createTextNode(t));
      ul.appendChild(li);
    });
    body.appendChild(ul);

    // Meta
    const meta = makeEl('div', 'week-meta');
    const res = makeEl('div', 'week-res');
    const resB = document.createElement('strong'); resB.textContent = '📚 Resources';
    res.appendChild(resB); res.appendChild(document.createTextNode(week.resource || ''));
    const chk = makeEl('div', 'week-check');
    const chkB = document.createElement('strong'); chkB.textContent = '✅ Checkpoint';
    chk.appendChild(chkB); chk.appendChild(document.createTextNode(week.checkpoint || ''));
    meta.appendChild(res); meta.appendChild(chk);
    body.appendChild(meta);

    // Insight
    if (week.videoInsight) {
      const ins = makeEl('div', 'week-insight');
      const insB = document.createElement('strong'); insB.textContent = '🎬 Video: ';
      ins.appendChild(insB); ins.appendChild(document.createTextNode(week.videoInsight));
      body.appendChild(ins);
    }
    card.appendChild(body);
    weeksCont.appendChild(card);
  });
  observeReveal();
};
renderRoadmap();

window.toggleWeek = header => {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.week-arrow');
  body.classList.toggle('open');
  arrow.classList.toggle('open');
};

/* ═══════════════════════════════════════════════
   PYRAMID
═══════════════════════════════════════════════ */
const pyrWrap = document.getElementById('pyramidWrap');
PYRAMID.forEach(p => {
  const div = makeEl('div', 'pyr-item reveal');
  div.style.borderLeft = '4px solid ' + p.color;

  const hdr = makeEl('div', 'pyr-header');
  const num = makeEl('div', 'pyr-num'); num.textContent = String(p.level); num.style.background = p.color;
  const info = makeEl('div', 'pyr-info');
  const ti = makeEl('div', 'pyr-title'); ti.textContent = p.title;
  const tg = makeEl('div', 'pyr-tag'); tg.textContent = p.tag;
  info.appendChild(ti); info.appendChild(tg);
  const ar = makeEl('span', 'week-arrow'); ar.textContent = '▼';
  hdr.appendChild(num); hdr.appendChild(info); hdr.appendChild(ar);

  const body = makeEl('div', 'pyr-body');
  const desc = makeEl('p', 'pyr-desc'); desc.textContent = p.desc;
  body.appendChild(desc);

  const acts = makeEl('div', 'pyr-actions');
  p.actions.forEach((a, i) => {
    const row = makeEl('div', 'pyr-action');
    const sp = document.createElement('span'); sp.textContent = (i+1) + '.'; sp.style.color = p.color;
    row.appendChild(sp); row.appendChild(document.createTextNode(a));
    acts.appendChild(row);
  });
  body.appendChild(acts);

  const warn = makeEl('div', 'pyr-warn');
  const wb = document.createElement('strong'); wb.textContent = 'Warning: ';
  warn.appendChild(wb); warn.appendChild(document.createTextNode(p.warning));
  body.appendChild(warn);

  hdr.onclick = () => { body.classList.toggle('open'); ar.classList.toggle('open'); };
  div.appendChild(hdr); div.appendChild(body);
  pyrWrap.appendChild(div);
});

/* ═══════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════ */
let projStatuses = load('proj_statuses', {});
const STATUS_OPTS = ['Not Started','In Progress','Deployed','On Resume'];
const DIFF_COLOR = { HARD:'badge-red', 'MEDIUM-HARD':'badge-orange', MEDIUM:'badge-blue', 'EASY-MEDIUM':'badge-green' };

const renderProjects = () => {
  // Summary
  const all = PROJECTS;
  const inProg = all.filter(p => projStatuses[p.name]==='In Progress').length;
  const deployed = all.filter(p => projStatuses[p.name]==='Deployed'||projStatuses[p.name]==='On Resume').length;
  const onResume = all.filter(p => projStatuses[p.name]==='On Resume').length;
  document.getElementById('projSummary').innerHTML = [
    { label:'Total Projects', val:all.length, color:'#3b82f6' },
    { label:'In Progress', val:inProg, color:'#f97316' },
    { label:'Deployed', val:deployed, color:'#22c55e' },
    { label:'On Resume', val:onResume, color:'#a855f7' },
  ].map(s=>`<div class="ps-card"><div class="ps-num" style="color:${s.color}">${s.val}</div><div class="ps-label">${s.label}</div></div>`).join('');

  const list = document.getElementById('projectsList');
  list.innerHTML = '';

  [1,2].forEach(tier => {
    const tProj = PROJECTS.filter(p => p.tier === tier);
    const tLabel = document.createElement('div');
    tLabel.className = `tier-label tier-${tier}`;
    tLabel.textContent = tier === 1 ? '⭐ TIER 1 — INTERVIEW MAGNETS' : '🔧 TIER 2 — BUILD-TO-CODE PROJECTS';
    list.appendChild(tLabel);

    tProj.forEach(proj => {
      const status = projStatuses[proj.name] || 'Not Started';
      const div = document.createElement('div');
      div.className = 'proj-card reveal';
      const statusBadge = { 'Not Started':'badge-blue','In Progress':'badge-orange','Deployed':'badge-green','On Resume':'badge-purple' }[status];
      div.innerHTML = `
        <div class="proj-header" onclick="toggleProj(this)">
          <div class="proj-info">
            <div class="proj-name">${proj.name}
              <span class="badge ${DIFF_COLOR[proj.difficulty]||'badge-blue'}" style="margin-left:6px">${proj.difficulty}</span>
              <span class="badge badge-sky" style="margin-left:4px">${proj.year}</span>
            </div>
            <div class="proj-tags">${proj.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          </div>
          <span class="badge ${statusBadge}">${status}</span>
          <span class="week-arrow" style="margin-left:8px">▼</span>
        </div>
        <div class="proj-body">
          <div class="proj-section"><div class="proj-section-head">🏢 Why this gets you hired</div><div class="proj-text">${proj.why}</div></div>
          <div class="proj-section"><div class="proj-section-head">📊 Impact & Features</div><div class="proj-text">${proj.impact}</div></div>
          <div class="proj-section"><div class="proj-section-head">📄 Resume Bullet</div><div class="resume-bullet">• ${proj.bullet}</div></div>
          <div class="proj-section"><div class="proj-section-head">🛠 Skills</div><div class="proj-tags">${proj.skills.map(s=>`<span class="badge badge-purple">${s}</span>`).join('')}</div></div>
          ${proj.tip ? `<div class="proj-section"><div class="proj-section-head">🎬 Tip</div><div class="proj-text">${proj.tip}</div></div>` : ''}
          <div class="proj-section">
            <div class="proj-section-head">Update Status</div>
            <div class="proj-status-btns">${STATUS_OPTS.map(s=>`<button class="status-btn${s===status?' active':''}" onclick="setStatus('${proj.name}','${s}',this)">${s}</button>`).join('')}</div>
          </div>
        </div>`;
      list.appendChild(div);
    });
  });
  observeReveal();
};

window.toggleProj = h => { h.nextElementSibling.classList.toggle('open'); h.querySelector('.week-arrow').classList.toggle('open'); };
window.setStatus = (name, status, btn) => {
  projStatuses[name] = status;
  save('proj_statuses', projStatuses);
  btn.closest('.proj-status-btns').querySelectorAll('.status-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // update badge in header
  const card = btn.closest('.proj-card');
  const badgeMap = { 'Not Started':'badge-blue','In Progress':'badge-orange','Deployed':'badge-green','On Resume':'badge-purple' };
  const badge = card.querySelector('.proj-header .badge');
  badge.className = `badge ${badgeMap[status]}`;
  badge.textContent = status;
  renderSummary();
};
const renderSummary = () => {
  const all = PROJECTS;
  const inProg = all.filter(p => projStatuses[p.name]==='In Progress').length;
  const deployed = all.filter(p => projStatuses[p.name]==='Deployed'||projStatuses[p.name]==='On Resume').length;
  const onResume = all.filter(p => projStatuses[p.name]==='On Resume').length;
  const cards = document.querySelectorAll('#projSummary .ps-num');
  if (cards[1]) cards[1].textContent = inProg;
  if (cards[2]) cards[2].textContent = deployed;
  if (cards[3]) cards[3].textContent = onResume;
};

renderProjects();

/* ═══════════════════════════════════════════════
   DAILY CHECKLIST
═══════════════════════════════════════════════ */
let allChecklist = load('checklist', {});
let allNotes = load('cl_notes', {});

const getTodayChecked = () => allChecklist[todayKey()] || [];

const updateRing = () => {
  const checked = getTodayChecked();
  const score = checked.length;
  const total = DAILY_TASKS.length;
  const p = Math.round((score/total)*100);
  document.getElementById('scoreNum').textContent = score;
  const circ = 314; // 2 * PI * 50
  const offset = circ - (p / 100) * circ;
  document.getElementById('ringProg').style.strokeDashoffset = offset;
  const labels = ['Start your day!', 'Keep going!', 'Halfway there!', 'Almost done!', '🏆 Perfect day!'];
  document.getElementById('clLabel').textContent = p === 100 ? '🏆 Perfect day!' : p >= 70 ? 'Almost done!' : p >= 50 ? 'Halfway there!' : p >= 20 ? 'Keep going!' : 'Start your day!';
};

const calcStreak = () => {
  let s = 0;
  const d = new Date();
  while (true) {
    const k = dateKey(d);
    if ((allChecklist[k]||[]).length >= Math.ceil(DAILY_TASKS.length * 0.5)) s++;
    else break;
    d.setDate(d.getDate() - 1);
    if (s > 365) break;
  }
  return s;
};

const renderChecklist = () => {
  const today = todayDate();
  document.getElementById('clDate').textContent = today.toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('streakNum').textContent = calcStreak();
  const checked = getTodayChecked();
  const list = document.getElementById('tasksList');
  list.innerHTML = '';
  DAILY_TASKS.forEach(t => {
    const done = checked.includes(t.id);
    const div = document.createElement('div');
    div.className = 'task-item' + (done ? ' done' : '');
    div.innerHTML = `
      <div class="task-check"><span class="task-check-mark">✓</span></div>
      <span class="task-icon">${t.icon}</span>
      <div class="task-text">${t.text}</div>
      <span class="task-cat">${t.cat}</span>`;
    div.onclick = () => {
      const c = getTodayChecked();
      const next = c.includes(t.id) ? c.filter(x=>x!==t.id) : [...c, t.id];
      allChecklist[todayKey()] = next;
      save('checklist', allChecklist);
      div.classList.toggle('done');
      updateRing();
      document.getElementById('streakNum').textContent = calcStreak();
    };
    list.appendChild(div);
  });
  const note = allNotes[todayKey()] || '';
  document.getElementById('dailyNote').value = note;
  updateRing();
};

window.saveNote = () => {
  allNotes[todayKey()] = document.getElementById('dailyNote').value;
  save('cl_notes', allNotes);
  const btn = document.querySelector('.btn-save');
  btn.textContent = '✅ Saved!';
  setTimeout(() => btn.textContent = 'Save Note', 2000);
};

let histOpen = false;
window.toggleHistory = () => {
  histOpen = !histOpen;
  document.getElementById('histArrow').textContent = histOpen ? '▲' : '▼';
  const grid = document.getElementById('histGrid');
  grid.style.display = histOpen ? 'flex' : 'none';
  if (!histOpen) return;
  grid.innerHTML = '';
  const days = Object.entries(allChecklist)
    .filter(([k])=>k!==todayKey())
    .sort((a,b)=>b[0].localeCompare(a[0]))
    .slice(0,14);
  if (!days.length) { grid.innerHTML = '<p style="font-size:13px;color:var(--text3);padding:12px">No history yet — come back tomorrow!</p>'; return; }
  days.forEach(([key,ids]) => {
    const count = ids.length;
    const p = Math.round((count/DAILY_TASKS.length)*100);
    const d = new Date(key);
    const label = d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
    const note = allNotes[key] || '';
    const fillColor = p>=80?'var(--green)':p>=50?'var(--accent)':'var(--orange)';
    const row = document.createElement('div');
    row.className = 'hist-row';
    row.innerHTML = `
      <div class="hist-date">${label}</div>
      <div class="hist-bar-wrap">
        <div class="hist-bar"><div class="hist-fill" style="width:${p}%;background:${fillColor}"></div></div>
        ${note ? `<div class="hist-note">${note}</div>` : ''}
      </div>
      <div class="hist-score" style="color:${fillColor}">${count}/${DAILY_TASKS.length}</div>`;
    grid.appendChild(row);
  });
};

renderChecklist();

/* ═══════════════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════════════ */
let certsEarned = load('certs_earned', []);

const renderCerts = () => {
  const count = certsEarned.length;
  document.getElementById('certCount').textContent = `${count} / ${CERTIFICATIONS.length}`;
  document.getElementById('certBarFill').style.width = pct(count, CERTIFICATIONS.length) + '%';
  const list = document.getElementById('certsList');
  list.innerHTML = '';
  const PCOL = { 'DO NOW':'badge-red', HIGH:'badge-orange', GOLD:'badge-blue' };
  CERTIFICATIONS.forEach(cert => {
    const earned = certsEarned.includes(cert.name);
    const div = document.createElement('div');
    div.className = 'cert-item reveal' + (earned ? ' earned-item' : '');
    div.innerHTML = `
      <div class="cert-check${earned?' earned':''}" onclick="toggleCert('${cert.name}',this)"><span class="ck">✓</span></div>
      <div class="cert-info">
        <div class="cert-name">${cert.name} <span class="badge ${PCOL[cert.priority]||'badge-blue'}">${cert.priority}</span></div>
        <div class="cert-meta"><span>🏢 ${cert.provider}</span><span>💰 ${cert.cost}</span><span>📅 ${cert.when}</span></div>
        <div class="cert-why">${cert.why}</div>
      </div>
      <a href="${cert.link}" target="_blank" class="cert-open">→ Open</a>`;
    list.appendChild(div);
  });
  observeReveal();
};

window.toggleCert = (name, el) => {
  certsEarned = certsEarned.includes(name) ? certsEarned.filter(n=>n!==name) : [...certsEarned, name];
  save('certs_earned', certsEarned);
  el.classList.toggle('earned');
  el.closest('.cert-item').classList.toggle('earned-item');
  document.getElementById('certCount').textContent = `${certsEarned.length} / ${CERTIFICATIONS.length}`;
  document.getElementById('certBarFill').style.width = pct(certsEarned.length, CERTIFICATIONS.length) + '%';
};

renderCerts();

/* ═══════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════ */
const skillsWrap = document.getElementById('skillsWrap');
const getSkillColor = (level) => {
  if (level >= 80) return '#22c55e';
  if (level >= 60) return '#3b82f6';
  if (level >= 40) return '#38bdf8';
  if (level >= 20) return '#f97316';
  return '#ef4444';
};

Object.entries(SKILLS_DATA).forEach(([cat, skills]) => {
  const div = document.createElement('div');
  div.className = 'skills-category';
  div.innerHTML = `
    <div class="skills-cat-title">${cat}</div>
    <div class="skills-row">${skills.map(s=>`
      <div class="skill-item reveal">
        <div class="skill-top"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.level}%</span></div>
        <div class="skill-bar"><div class="skill-fill" style="width:${s.level}%;background:${getSkillColor(s.level)}"></div></div>
        <div class="skill-target">${s.target}</div>
      </div>`).join('')}
    </div>`;
  skillsWrap.appendChild(div);
});

/* ═══════════════════════════════════════════════
   LINKEDIN LEARNING
═══════════════════════════════════════════════ */
let llDone = load('ll_done', []);
const PCOL2 = { CRITICAL:'badge-red', HIGH:'badge-orange', MEDIUM:'badge-blue' };

const renderLL = () => {
  document.getElementById('llCount').textContent = `${llDone.length} / ${LINKEDIN_LEARNING.length}`;
  document.getElementById('llFill').style.width = pct(llDone.length, LINKEDIN_LEARNING.length) + '%';
  const list = document.getElementById('llList');
  list.innerHTML = '';
  LINKEDIN_LEARNING.forEach(course => {
    const done = llDone.includes(course.name);
    const div = document.createElement('div');
    div.className = 'll-item reveal' + (done ? ' ll-done' : '');
    div.innerHTML = `
      <div class="ll-check${done?' done':''}" onclick="toggleLL('${course.name.replace(/'/g,"\\'")}',this)"><span class="ck">✓</span></div>
      <div class="ll-info">
        <div class="ll-name">${course.name} <span class="badge ${PCOL2[course.priority]||'badge-blue'}">${course.priority}</span> <span class="badge badge-sky">${course.cat}</span></div>
        <div class="ll-instructor">${course.instructor}</div>
        <div class="ll-meta"><span>⏱ ${course.duration}</span><span>📅 ${course.when}</span></div>
        <div class="ll-why">${course.why}</div>
      </div>`;
    list.appendChild(div);
  });
  observeReveal();
};

window.toggleLL = (name, el) => {
  llDone = llDone.includes(name) ? llDone.filter(n=>n!==name) : [...llDone, name];
  save('ll_done', llDone);
  el.classList.toggle('done');
  el.closest('.ll-item').classList.toggle('ll-done');
  document.getElementById('llCount').textContent = `${llDone.length} / ${LINKEDIN_LEARNING.length}`;
  document.getElementById('llFill').style.width = pct(llDone.length, LINKEDIN_LEARNING.length) + '%';
};

renderLL();

/* ═══════════════════════════════════════════════
   DSA TOOLS
═══════════════════════════════════════════════ */
const dsaGrid = document.getElementById('dsaGrid');
DSA_TOOLS.forEach(tool => {
  const div = document.createElement('div');
  div.className = 'dsa-card reveal';
  div.innerHTML = `
    <div class="dsa-card-head" style="border-left:4px solid ${tool.levelColor}">
      <div class="dsa-card-name">${tool.name}</div>
      <div class="dsa-card-level" style="color:${tool.levelColor}">${tool.level} · ${tool.when}</div>
    </div>
    <div class="dsa-card-body">
      <div class="dsa-desc">${tool.desc}</div>
      <div class="dsa-best">${tool.bestFor.map(b=>`<span class="tag">${b}</span>`).join('')}</div>
      <div class="dsa-tip">💡 ${tool.tip}</div>
      <a href="${tool.url}" target="_blank" class="dsa-link" style="background:${tool.linkColor}">→ Open ${tool.url.replace('https://','')}</a>
    </div>`;
  dsaGrid.appendChild(div);
});

/* ═══════════════════════════════════════════════
   LINKEDIN PROFILE
═══════════════════════════════════════════════ */
const postGrid = document.getElementById('postGrid');
POSTING_SCHEDULE.forEach(item => {
  const div = document.createElement('div');
  div.className = 'post-card reveal';
  div.innerHTML = `<div class="post-when">${item.when}</div><div class="post-what">${item.what}</div>`;
  postGrid.appendChild(div);
});

window.copyEl = (id, btn) => {
  const el = document.getElementById(id);
  const text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '📋 Copy'; btn.classList.remove('copied'); }, 2500);
  });
};

/* ═══════════════════════════════════════════════
   RESUME
═══════════════════════════════════════════════ */
const rulesDiv = document.getElementById('resumeRules');
RESUME_RULES.forEach((rule, i) => {
  const div = document.createElement('div');
  div.className = 'rule-item reveal';
  div.innerHTML = `<span class="rule-num">${i+1}.</span><span class="rule-text">${rule}</span>`;
  rulesDiv.appendChild(div);
});

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
const observeReveal = () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
};
observeReveal();
