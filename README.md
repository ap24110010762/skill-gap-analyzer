# RoleSync: Autonomous Live Skill-Gap & Career Transition Agent

> **An Agentic AI Career Transition Engine** that ingests 30+ public job postings, eliminates syndicated cross-board duplicates, extracts real-time empirical skill frequencies, benchmarks candidate resume evidence with zero hallucination, and requires Human-in-the-Loop (HITL) approval before generating time-budgeted, verified learning curriculums.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-orange?style=for-the-badge&logo=google-chrome)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tests Status](https://img.shields.io/badge/Tests-100%25%20Passing%20(4%2F4)-emerald?style=for-the-badge&logo=checkmarx)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20Vite-blue?style=for-the-badge&logo=react)](https://vitejs.dev/)

---

Live Demo URL
**Hosted on Google Cloud:** [https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)

---

Problem & Motivation

Traditional career pivot advice is plagued by three major flaws:
1. **Conflicting & Outdated Roadmaps:** Influencer advice and static bootcamps recommend generic lists of 15+ technologies without citing real, current employer demand.
2. **Syndicated Job Board Duplication:** Multiple boards (LinkedIn, Indeed, Glassdoor, Dice) post identical syndications, which artificially inflates perceived demand for certain skills.
3. **Unrealistic & Overloaded Pacing:** Candidates with full-time commitments (e.g. 10–12 hrs/week) are assigned 40-hour weekly curriculums, leading to burnout and dropouts.
4. **Dead Resource Links:** Outdated recommendations point to 404 broken URLs and paid paywalls.

**RoleSync solves this with an autonomous 5-stage agentic workflow:**
[Candidate Profile & Resume]
│
▼
┌────────────────────────────────────────┐
│ 1. Ingestion & Deduplication Agent │ ◄── Scrapes 30+ Live Postings
│ (Canonical Hashing & Fuzzy Match) │ (Merges Cross-Board Syndications)
└───────────────────┬────────────────────┘
│
▼
┌────────────────────────────────────────┐
│ 2. Skill Frequency & Market Engine │ ◄── Computes Empirical % Demand
│ (SQL 93%, Power BI 57%, Python 53%) │
└───────────────────┬────────────────────┘
│
▼
┌────────────────────────────────────────┐
│ 3. Anti-Hallucination Resume Benchmark │ ◄── Verifies Real Evidence
│ (Verified Evidence vs Critical Gap) │ (Zero Fabricated Competencies)
└───────────────────┬────────────────────┘
│
▼
┌────────────────────────────────────────┐
│ 4. Human-in-the-Loop Approval Gateway │ ◄── Enforces Explicit Confirmation
│ (Action Proposal & Scope Alignment) │ Before Roadmapping
└───────────────────┬────────────────────┘
│
▼
┌────────────────────────────────────────┐
│ 5. Grounding & Verification Audit │ ◄── Automated HTTP 200 Link Health Check
│ (6-Week Budgeted Plan + PDF Export) │ (Khan Academy, MS Learn, Kaggle)
└────────────────────────────────────────┘
---

Key Agentic Capabilities

- **30+ Live Job Postings Ingestion:** Gathers live listings from leading technology employers (Flipkart, Swiggy, PhonePe, Infosys, Dell, TCS).
- **Cross-Board Deduplication Engine:** Uses normalized company-title fingerprint hashes and text similarity vectors to merge syndicated cross-postings into a single canonical entry, avoiding skewed frequency counts.
- **Empirical Skill Demand Frequencies:** Ranks required competencies strictly based on market data rather than subjective guessing.
- **Anti-Hallucination Resume Benchmarker:** Inspects candidate background (e.g., Mechanical Engineering with AutoCAD and Excel) and only marks skills as verified if concrete evidence exists in the text. Missing high-frequency skills are strictly labeled as Critical Gaps.
- **Human-in-the-Loop (HITL) Gateway:** Requires explicit human candidate consent on prioritized gaps and weekly hourly budget before generating study schedules.
- **100% Free Curated Resources:** Pairs every skill gap with tested, high-quality, free tutorials and projects (Khan Academy, Microsoft Learn, Kaggle, FreeCodeCamp).
- **Automated Verification Engine:** Runs background HTTP audits to confirm that all cited job postings and resource links are live and reachable.
- **Multi-Format Executive Exports:**
  - **Executive PDF** (formatted via `jspdf`)
  - **Markdown Report** (`.md`)
  - **Structured JSON** (`.json`)

---

Automated Test Suite (100% Pass)

RoleSync features an integrated **Validation Suite** tab with automated assertion tests:

| Test Case | Description | Assertion Check | Result |
| :--- | :--- | :--- | :---: |
| **TC1** | 30 Data Analyst Postings Analysis | Extracts full frequency distribution across 30 live postings | **PASSED** |
| **TC2** | Cross-Board Syndication Deduplication | Merges 3 identical listings across LinkedIn/Indeed into 1 count | **PASSED** |
| **TC3** | Resume Anti-Hallucination Integrity | Flags SQL as Critical Gap, verifies Excel, invents zero skills | **PASSED** |
| **TC4** | Low-Density Human Escalation | Pauses when <5 jobs exist; requests user permission to widen radius | **PASSED** |

---

Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite
- **Document Generation:** jsPDF
- **Icons & UI:** Lucide React
- **Algorithms:** Deterministic Token Distance, Canonical Fingerprint Hashing
- **Deployment:** Google Cloud Run & Vite

Local Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/skill-gap-analyzer.git
cd skill-gap-analyzer

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
