# RoleSync: Autonomous Live Skill-Gap & Career Transition Agent

> **An Agentic AI Career Transition Engine** that ingests 30+ public job postings, eliminates syndicated cross-board duplicates, extracts real-time empirical skill frequencies, benchmarks candidate resume evidence with zero hallucination, and requires Human-in-the-Loop (HITL) approval before generating time-budgeted, verified learning curriculums.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-orange?style=for-the-badge&logo=google-chrome)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tests Status](https://img.shields.io/badge/Tests-100%25%20Passing%20(4%2F4)-emerald?style=for-the-badge&logo=checkmarx)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20Vite-blue?style=for-the-badge&logo=react)](https://vitejs.dev/)

---

## Live Demo URL 
https://skill-gap-analyzer-pearl.vercel.app/

---

## Problem & Motivation

Traditional career transition advice suffers from major flaws:
1. **Conflicting & Outdated Roadmaps:** Influencers recommend 15+ disconnected tools without citing empirical employer demand.
2. **Syndicated Job Board Duplication:** Multiple boards (LinkedIn, Indeed, Glassdoor) post identical listings, artificially distorting skill frequencies.
3. **Unrealistic Pacing:** Candidates with full-time commitments (e.g. 10–12 hrs/week) are assigned impossible 40-hr/week curriculums.
4. **Dead Resource Links:** Outdated recommendations point to 404 broken URLs and paid paywalls.

---

## Agentic Architecture & Pipeline Flow

The RoleSync system executes an autonomous 5-stage closed loop:

### 1️.Perception & Input Validation
* **Action:** Collects candidate profile (e.g., Mechanical Engineer background, AutoCAD, Excel formulas), target role (Data Analyst), target city, and realistic weekly study commitment (12 hrs/week).
* **Guarantees:** Strict schema validation with session-state immutability.

### 2️. Ingestion & Cross-Board Deduplication Engine
* **Action:** Ingests ~30 live postings across LinkedIn, Indeed, Glassdoor, and enterprise career portals.
* **Algorithm:** Computes normalized company-title fingerprint hashes and text similarity vectors to merge syndicated duplicates into one canonical posting.
* **Guarantees:** Prevents artificial inflation of skill demand frequencies (verified in TC2).

### 3️. Deterministic Skill Frequency & Resume Benchmarking
* **Action:** Calculates empirical demand percentages (SQL 93%, Power BI 57%, Python 53%, Excel 47%).
* **Anti-Hallucination Policy:** Evaluates the candidate resume strictly against extracted skills. Only assigns **Verified Evidence** if literal proof exists in the resume. High-frequency missing skills are strictly marked as **Critical Gaps**.

### 4️. Human-in-the-Loop (HITL) Approval Gateway
* **Action:** Before generating study schedules or saving action items, the agent pauses and presents an actionable proposal detailing top 3 prioritized gaps, weekly hour allocations, and project milestones.
* **Safety Boundary:** Enforces explicit human confirmation before the transition plan is finalized.

### 5️. Grounding & Automated Link Verification
* **Action:** Pairs every identified gap with 100% free, verified learning materials (Khan Academy SQL, Microsoft Learn Power BI, Kaggle Pandas).
* **Audit Sub-Agent:** Automatically tests every citation and resource link (HTTP 200 checks) to guarantee zero dead links.
* **Export Engine:** Produces downloadable executive reports in **PDF**, **Markdown**, and **JSON**.

---

## End-to-End Execution Pipeline Summary

| Stage | Sub-Agent | Core Responsibility | Output Artifact |
| :---: | :--- | :--- | :--- |
| **01** | **Ingestion Sub-Agent** | Scrapes 30+ live market listings across top tech employers | Clean raw job list |
| **02** | **Deduplication Engine** | Merges cross-board syndicated duplicates via canonical hashes | Deduplicated job dataset |
| **03** | **Frequency Engine** | Computes statistical skill demand frequencies across listings | Ranked skill demand matrix |
| **04** | **Resume Benchmarker** | Matches resume text against demand with zero hallucination | Verified skills vs. Critical gaps |
| **05** | **HITL Gateway** | Prompts candidate to review & approve the customized proposal | Human approval token |
| **06** | **Verification Engine** | Verifies resource links (HTTP 200) & builds time-budgeted plan | Executive PDF, Markdown & JSON |

---

## Key Agentic Capabilities

- **30+ Live Job Postings Ingestion:** Gathers live listings from leading technology employers (Flipkart, Swiggy, PhonePe, Infosys, Dell, TCS).
- **Cross-Board Deduplication Engine:** Uses normalized company-title fingerprint hashes to merge syndicated cross-postings into a single canonical entry, avoiding skewed frequency counts.
- **Empirical Skill Demand Frequencies:** Ranks required competencies strictly based on market data rather than subjective guessing.
- **Anti-Hallucination Resume Benchmarker:** Inspects candidate background (e.g., Mechanical Engineering with AutoCAD and Excel) and only marks skills as verified if concrete evidence exists in the text. Missing high-frequency skills are strictly labeled as Critical Gaps.
- **Human-in-the-Loop (HITL) Gateway:** Requires explicit human candidate consent on prioritized gaps and weekly hourly budget before generating study schedules.
- **100% Free Curated Resources:** Pairs every skill gap with tested, high-quality, free tutorials and projects (Khan Academy, Microsoft Learn, Kaggle, FreeCodeCamp).
- **Automated Verification Engine:** Runs background HTTP audits to confirm that all cited job postings and resource links are live and reachable.
- **Multi-Format Executive Exports:**
  -  **Executive PDF** (formatted via `jspdf`)
  -  **Markdown Report** (`.md`)
  -  **Structured JSON** (`.json`)

---

##  Automated Test Suite (100% Pass)

RoleSync features an integrated **Validation Suite** tab with automated assertion tests:

| Test Case | Description | Assertion Check | Result |
| :--- | :--- | :--- | :---: |
| **TC1** | 30 Data Analyst Postings Analysis | Extracts full frequency distribution across 30 live postings | **PASSED** |
| **TC2** | Cross-Board Syndication Deduplication | Merges 3 identical listings across LinkedIn/Indeed into 1 count | **PASSED** |
| **TC3** | Resume Anti-Hallucination Integrity | Flags SQL as Critical Gap, verifies Excel, invents zero skills | **PASSED** |
| **TC4** | Low-Density Human Escalation | Pauses when <5 jobs exist; requests user permission to widen radius | **PASSED** |

---

##  Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Vite
- **Document Generation:** jsPDF
- **Icons & UI:** Lucide React
- **Algorithms:** Deterministic Token Distance, Canonical Fingerprint Hashing
- **Deployment:** Google Cloud Run & Vite

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
