# SDE Journey Tracker

> A complete, self-hosted web app to track every step of the journey from 1st-year student to MAANG SDE intern.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## What Is This?

This is a personal SDE career tracker built as a pure **HTML + CSS + JavaScript** single-directory website — no npm, no build tools, no frameworks. Drop it on Vercel and you're live in 60 seconds.

It tracks everything a student needs to get a software engineering internship at a MAANG-tier company by Year 3 of B.Tech:

- ✅ Daily checklist with streak counter and history
- 📊 Live stats dashboard (LeetCode, Codeforces, GitHub commits, CGPA)
- 🗺️ Week-by-week roadmap across 5 phases and 17 week-groups
- 🔺 5-Level Blueprint from a $191K MAANG engineer's system
- 🚀 9 project cards with status tracker and resume bullets
- 🏅 8 certification cards with tick-off and progress bar
- 💡 DSA visual tools guide (csvvistool, visualgo, GFG method)
- 🎓 14 LinkedIn Learning courses with completion tracking
- 📄 Resume guide with live paper preview
- 💼 LinkedIn profile copy-paste templates
- 🌙 Dark / light mode

All data persists locally in the browser via `localStorage`. Nothing is sent to any server.

---

## Screenshots

> Dashboard · Roadmap · Daily Checklist · Projects · Certifications

*(Add screenshots here after deployment)*

---

## Files

```
sde-tracker/
├── index.html      ← Full page structure and all sections
├── styles.css      ← Dark/light theme, all component styles
└── script.js       ← All data + all interactivity
```

That's it. Three files.

---

## Deploy to Vercel (60 seconds)

**Step 1 — Push to GitHub**

```bash
# Create a new repo on github.com called "sde-tracker"
# Then upload index.html, styles.css, script.js
# OR use the GitHub web interface to drag-and-drop the 3 files
```

**Step 2 — Deploy on Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project** → Import your GitHub repo
3. Framework Preset: **Other** (leave everything default)
4. Click **Deploy**

**Step 3 — Live**

Your site is live at `your-project.vercel.app`. Every push to GitHub auto-deploys.

---

## Run Locally

No installation needed. Just open the file:

```bash
# Option 1 — Open directly in browser
open index.html

# Option 2 — Serve locally with Python (avoids CORS on some browsers)
python3 -m http.server 3000
# Then visit http://localhost:3000
```

---

## Customising Your Data

All content lives in `script.js` at the top, clearly labelled:

| Constant | What to Edit |
|---|---|
| `WEEKLY_ROADMAP` | All 17 week-groups across 5 phases |
| `PYRAMID` | The 5-Level Blueprint cards |
| `PROJECTS` | All 9 project cards, tech stacks, bullets |
| `DAILY_TASKS` | The 10 daily checklist items |
| `CERTIFICATIONS` | 8 certifications with cost and why |
| `SKILLS_DATA` | Skill names and current levels |
| `LINKEDIN_LEARNING` | 14 courses with instructor and duration |
| `DSA_TOOLS` | 5 DSA visualization tools |
| `POSTING_SCHEDULE` | LinkedIn posting calendar |
| `RESUME_RULES` | Resume formatting rules |
| `START_DATE` | Change `'2026-03-09'` to your actual start date |

---

## Features

### Dashboard
Four editable stat cards — click the ✏️ button, enter your current number, save. Progress bars update instantly. Numbers persist in `localStorage`.

### Roadmap
Phase tabs (Year 1 Sem 2 → Year 3 Sem 6). Click any week card to expand full tasks, resources, checkpoint, and a video insight from a MAANG engineer.

### Daily Checklist
10 tasks. Click to tick. Score ring animates. Saves automatically for today. Streak counter calculates consecutive days where you completed ≥ 50% of tasks. Daily note field lets you log what you built.

### History
Past 14 days shown as horizontal bar chart with score and your daily note.

### Projects
Status tracker for each project: Not Started → In Progress → Deployed → On Resume. Summary counts update live.

### Certifications & LinkedIn Learning
Tick-off any item. Progress bars update. State persists between sessions.

### Dark / Light Mode
Toggle in the navbar. Preference saved to `localStorage`.

---

## Roadmap Contents (Summary)

| Phase | Period | Goal |
|---|---|---|
| Year 1 Sem 2 | Mar – May 2026 | Python, CS50P, 3 projects, 60 LeetCode |
| Year 2 Sem 3 | Jun – Nov 2026 | Graphs, OS/DBMS, 150 LeetCode, REST API, AWS CLF |
| Year 2 Sem 4 | Dec 2026 – May 2027 | System Design, URL Shortener, 300 LeetCode, ML project |
| Year 3 Sem 5 | Jun – Nov 2027 | 400 LeetCode, Chat App, AWS SAA, MAANG applications |
| Year 3 Sem 6 | Dec 2027 – May 2028 | Final interviews, internship, PPO conversion |

---

## Tech Stack Used in Projects

The tracker covers 9 portfolio projects using:

`Python` · `Flask` · `FastAPI` · `Redis` · `MySQL` · `SQLite` · `Docker` · `AWS EC2` · `AWS SageMaker` · `Kafka` · `XGBoost` · `NLTK` · `Google Speech API` · `WebSockets` · `MongoDB` · `React` · `scikit-learn` · `Streamlit` · `Pygame` · `BeautifulSoup`

---

## Contributing

This is a personal tracker, but if you want to fork it for your own journey:

1. Fork the repo
2. Update `START_DATE` in `script.js` to your actual start date
3. Customise the roadmap weeks, projects, and certifications to your own targets
4. Deploy to Vercel

---

## License

MIT — use it, fork it, build on it.

---

<div align="center">

Built by [Rajeswara Reddy K](https://github.com/krajeswarareddy) · Started March 9, 2026 · Target: MAANG Internship 2027

*"I don't just learn tech. I use it to build things that set my family free."*

</div>
