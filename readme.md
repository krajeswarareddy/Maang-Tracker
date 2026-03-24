# SDE Journey Track for Individual

> A self-hosted, single-page web application to track every milestone on the path from first-year student to MAANG software engineering intern.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

**remove this on 25th april 2026**

## Overview

**SDE Journey Tracker** is a lightweight, zero-dependency career progression tool built with pure HTML, CSS, and JavaScript. There is no npm, no build pipeline, and no framework — just three files that deploy in under a minute.

The application is structured around a structured, multi-year roadmap for achieving a software engineering internship at a MAANG-tier company by the third year of a B.Tech programme. All user data is persisted locally via `localStorage`; nothing is transmitted to any external server.

---

## Features

| Module | Description |
|---|---|
| **Dashboard** | Four editable stat cards (LeetCode, Codeforces, GitHub commits, CGPA) with live progress bars |
| **Roadmap** | 5-phase, 17-week-group curriculum from Year 1 Semester 2 through Year 3 Semester 6 |
| **Daily Checklist** | 10 tasks with animated score ring, streak counter, and daily notes |
| **History** | 14-day bar chart with per-day score and note review |
| **5-Level Blueprint** | Structured career framework adapted from a $191K MAANG engineer's system |
| **Projects** | 9 portfolio project cards with status tracking (Not Started → In Progress → Deployed → On Resume) |
| **Certifications** | 8 certification cards with tick-off progress and cost visibility |
| **LinkedIn Learning** | 14 course cards with instructor, duration, and completion tracking |
| **DSA Tools Guide** | Curated visual tool reference (csvvistool, VisuAlgo, GFG method, and more) |
| **Resume Guide** | Formatting rules with a live paper preview |
| **LinkedIn Templates** | Ready-to-use copy-paste profile and post templates |
| **Dark / Light Mode** | System-aware toggle with preference saved to `localStorage` |

---

## Project Structure

```
sde-tracker/
├── index.html      ← Page structure and all section markup
├── styles.css      ← Dark/light theme variables and all component styles
└── script.js       ← Application data constants and all interactivity
```

---

## Roadmap

| Phase | Period | Key Targets |
|---|---|---|
| Year 1 Sem 2 | Mar – May 2026 | Python, CS50P, 3 projects, 60 LeetCode problems |
| Year 2 Sem 3 | Jun – Nov 2026 | Graphs, OS/DBMS, 150 LeetCode, REST API, AWS CLF |
| Year 2 Sem 4 | Dec 2026 – May 2027 | System Design, URL Shortener, 300 LeetCode, ML project |
| Year 3 Sem 5 | Jun – Nov 2027 | 400 LeetCode, Chat App, AWS SAA, MAANG applications |
| Year 3 Sem 6 | Dec 2027 – May 2028 | Final interviews, internship secured, PPO conversion |

---

## Tech Stack Covered

The tracker spans 9 portfolio projects across the following technologies:

`Python` · `Flask` · `FastAPI` · `Redis` · `MySQL` · `SQLite` · `Docker` · `AWS EC2` · `AWS SageMaker` · `Apache Kafka` · `XGBoost` · `NLTK` · `Google Speech API` · `WebSockets` · `MongoDB` · `React` · `scikit-learn` · `Streamlit` · `Pygame` · `BeautifulSoup`

---

## Deployment

### Deploy to Vercel (< 60 seconds)

**1. Push files to GitHub**

```bash
# Create a new repository named "sde-tracker" on github.com
# Upload index.html, styles.css, and script.js
# (Drag-and-drop via the GitHub web interface works fine)
```

**2. Import to Vercel**

1. Navigate to [vercel.com](https://vercel.com) and click **New Project**
2. Import your GitHub repository
3. Set Framework Preset to **Other** — leave all other settings as default
4. Click **Deploy**

**3. Go live**

Your application is immediately available at `your-project.vercel.app`. Every subsequent push to `main` triggers an automatic redeployment.

---

### Run Locally

No installation required.

```bash
# Option 1 — Open directly in the browser
open index.html

# Option 2 — Serve via Python (recommended to avoid CORS issues)
python3 -m http.server 3000
# Visit http://localhost:3000
```

---

## Configuration

All content is defined as named constants at the top of `script.js` and is straightforward to customise:

| Constant | Purpose |
|---|---|
| `START_DATE` | Set to your actual start date (default: `'2026-03-09'`) |
| `WEEKLY_ROADMAP` | All 17 week-groups across 5 phases |
| `PYRAMID` | The 5-Level Blueprint cards |
| `PROJECTS` | Project cards, tech stacks, and resume bullet points |
| `DAILY_TASKS` | The 10 daily checklist items |
| `CERTIFICATIONS` | Certification cards with cost and rationale |
| `SKILLS_DATA` | Skill names and current proficiency levels |
| `LINKEDIN_LEARNING` | Courses with instructor and duration metadata |
| `DSA_TOOLS` | DSA visualisation tool references |
| `POSTING_SCHEDULE` | LinkedIn content calendar |
| `RESUME_RULES` | Resume formatting and content rules |

---

## Contributing

This repository is a personal career tracker, but it is designed to be forked and adapted for any student's journey.

1. Fork the repository
2. Update `START_DATE` in `script.js` to your start date
3. Customise `WEEKLY_ROADMAP`, `PROJECTS`, and `CERTIFICATIONS` to reflect your own targets
4. Deploy to Vercel

Pull requests that improve the core tooling (bug fixes, accessibility, performance) are welcome.

---

## License

This project is licensed under the **MIT License** — free to use, fork, and build upon.

---

<div align="center">

Built by [Rajeswara Reddy K](https://github.com/krajeswarareddy) &nbsp;·&nbsp; Started March 2026 &nbsp;·&nbsp; Target: MAANG Internship 2027

</div>

