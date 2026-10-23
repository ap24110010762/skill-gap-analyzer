# RoleSync: Autonomous Live Skill-Gap & Career Transition Agent

> **An Agentic AI Career Transition Engine** that ingests 30+ public job postings, eliminates syndicated cross-board duplicates, extracts real-time empirical skill frequencies, benchmarks candidate resume evidence with zero hallucination, and requires Human-in-the-Loop (HITL) approval before generating time-budgeted, verified learning curriculums.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Application-orange?style=for-the-badge&logo=google-chrome)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tests Status](https://img.shields.io/badge/Tests-100%25%20Passing%20(4%2F4)-emerald?style=for-the-badge&logo=checkmarx)](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20Vite-blue?style=for-the-badge&logo=react)](https://vitejs.dev/)

---

## 🚀 Live Demo URL
**Hosted on Google Cloud:** [https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app](https://ais-pre-faagtfdpmlyear6ld6opni-515277225003.asia-northeast1.run.app)

---

## 📌 Problem & Motivation

Traditional career pivot advice is plagued by major flaws:
1. **Conflicting & Outdated Roadmaps:** Generic advice recommends 15+ disconnected tools without citing empirical employer demand.
2. **Syndicated Job Board Duplication:** Multiple boards (LinkedIn, Indeed, Glassdoor) post identical listings, artificially distorting skill frequencies.
3. **Unrealistic Pacing:** Candidates with full-time commitments (e.g. 10–12 hrs/week) are assigned impossible 40-hr/week curriculums.
4. **Dead Resource Links:** Outdated recommendations point to 404 broken URLs and paid paywalls.

---

## 🔄 Agentic Architecture & Workflow

```mermaid
flowchart TD
    A[👤 Candidate Profile & Resume<br/><b>e.g. Mechanical Engineer Background</b>] --> B[1. Ingestion & Deduplication Agent<br/><b>Scrapes 30+ Postings & Merges Cross-Board Duplicates</b>]
    B --> C[2. Empirical Skill Frequency Engine<br/><b>SQL 93%, Power BI 57%, Python 53%, Excel 47%</b>]
    C --> D[3. Anti-Hallucination Resume Benchmarker<br/><b>Strict Proof Matching: Verified Evidence vs Critical Gaps</b>]
    D --> E{4. Human-in-the-Loop Gateway<br/><b>Candidate Explicitly Approves Scope & Budget</b>}
    E -->|Approved| F[5. Grounding & Link Verification Audit<br/><b>Automated HTTP 200 Checks on Curated Resources</b>]
    F --> G[📄 Executive Export Engine<br/><b>PDF Report • Markdown Summary • JSON Data</b>]
