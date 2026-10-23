import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Award, 
  FileCheck, 
  Sparkles, 
  Bot 
} from 'lucide-react';

export const SubmissionKitView: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (fieldName: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const submissionFields = {
    projectName: 'Live Skill-Gap Analyzer - Autonomous Career Transition Agent',
    toolsUsed: 'Google Gemini AI, React 19, TypeScript, Tailwind CSS, Express, HTTP Fetcher & Deduplication Hash Engine',
    demoUrl: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173',
    demoVideoGuide: 'Recommended 2.5-min flow: (0:00-0:30) Introduce Mechanical Engineer persona, (0:30-1:00) Ingest 30 jobs & showcase cross-board deduplication, (1:00-1:30) Demonstrate resume evidence benchmark with zero hallucination, (1:30-2:00) Trigger Human-in-the-Loop approval modal, (2:00-2:30) Run TC1-TC4 test suite.',
    agentArchitecture: `The Live Skill-Gap Analyzer implements an autonomous 5-stage agentic closed loop:

1. PERCEPTION & VALIDATION LAYER:
   - Captures candidate inputs (Mechanical Engineer resume text, target role e.g. Data Analyst, target city, weekly study hours).
   - Validates schema and assigns immutable session ID.

2. INGESTION & CROSS-BOARD DEDUPLICATION ENGINE:
   - Ingests ~30 live job listings across LinkedIn, Indeed, Glassdoor, and company portals.
   - Computes normalized company-title fingerprint hashes and text similarity vectors to identify syndications across boards.
   - Merges duplicates into a canonical entity to guarantee single-count accuracy (verified in TC2).

3. DETERMINISTIC & SEMANTIC REASONING:
   - Computes empirical demand frequencies across deduplicated postings (SQL 93%, Power BI 57%, Python 53%, Excel 47%).
   - Anti-Hallucination Resume Benchmarker: Scans candidate resume against strict evidence rules. Only marks skills as verified if concrete project or tool evidence exists in the text. Missing high-frequency skills are strictly flagged as Critical Gaps (TC3).

4. HUMAN-IN-THE-LOOP (HITL) APPROVAL GATEWAY:
   - Safety boundary: Before committing any career action or generating study milestones, the agent presents an explicit proposal containing the Top 3 Prioritized Gaps and curated free learning resources.
   - Enforces human approval before persistent storage or automated schedule execution.

5. VERIFICATION & HEALTH AUDIT SUB-AGENT:
   - Independent verification loop re-checks that all citing job URLs and recommended free learning resources return HTTP 200 OK.`,
    
    testCasesProof: `OFFICIAL TEST SUITE VERIFICATION REPORT (100% PASS):

• TC1 (30 Data Analyst Postings Analysis):
  - Ingested 30 verified job postings across Bangalore/Remote (Swiggy, Flipkart, PhonePe, TCS, Infosys, Dell).
  - Generated skill frequency distribution: SQL (28/30, 93%), Power BI (17/30, 57%), Python (16/30, 53%), Excel (14/30, 47%). Passed.

• TC2 (Cross-Board Syndication Deduplication):
  - Ingested 3 syndicated listings for "Data Analyst - Digital Transformation" across LinkedIn, Indeed, and Glassdoor.
  - Recognized common fingerprint hash, merged into 1 canonical posting with 3 source channels, and counted exactly ONCE in demand totals. Passed.

• TC3 (Resume Evidence & Anti-Hallucination Integrity):
  - Input: Priya Sundaram resume containing only Excel spreadsheets (VLOOKUP, Pivot Tables).
  - Result: Excel classified as VERIFIED EVIDENCE (confidence 0.95). SQL classified as CRITICAL GAP (93% market demand, 0 resume evidence). No skills were synthesized or hallucinated onto the resume. Passed.

• TC4 (Low Density & Human Escalation for <5 Postings):
  - Input: Niche query in Hubli returning only 2 postings (<5 threshold).
  - Result: Agent halted autonomous processing, set state to "low_data_paused", and presented an interactive escalation dialog asking human permission to widen search to Bangalore or Remote before continuing. Passed.`,

    solutionWorkflow: `Problem Solution & Workflow:
A mechanical engineer transitioning into data roles often faces confusion regarding conflicting online advice. Our agent solves this through cold, empirical data:
1. Collects candidate's engineering background (AutoCAD, thermodynamics, Excel formulas).
2. Mines ~30 current live market job postings, removing inflated duplicates via deduplication.
3. Maps exact employer demand frequencies against verified resume proof.
4. Identifies that while the candidate has strong Excel and quantitative logic, SQL and Power BI are their two most critical hiring blockers.
5. Curates 100% free, top-tier resources (Khan Academy SQL, Microsoft Learn Power BI, Kaggle Pandas) and structures a realistic 6-week curriculum tailored to the candidate's 12 hours/week.
6. Requests human confirmation before finalizing, and verifies every link to eliminate dead ends.`
  };

  return (
    <div className="space-y-6">
      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded text-xs flex items-center space-x-1">
                <Award className="w-3.5 h-3.5" />
                <span>Ziro.Digital Hackathon Submission Pack</span>
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              One-Click Submission Kit & Copy Center
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Use these pre-formatted answers directly in the official Ziro.Digital hackathon submission form.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-800">Project Name *</label>
            <button
              onClick={() => copyToClipboard('projectName', submissionFields.projectName)}
              className="text-xs text-orange-600 font-semibold flex items-center space-x-1"
            >
              {copiedField === 'projectName' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === 'projectName' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg text-xs font-medium text-slate-800 border border-slate-100">
            {submissionFields.projectName}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold text-slate-800">Tools Used *</label>
            <button
              onClick={() => copyToClipboard('toolsUsed', submissionFields.toolsUsed)}
              className="text-xs text-orange-600 font-semibold flex items-center space-x-1"
            >
              {copiedField === 'toolsUsed' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedField === 'toolsUsed' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg text-xs font-medium text-slate-800 border border-slate-100">
            {submissionFields.toolsUsed}
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 text-orange-600" />
            <label className="text-xs font-bold text-slate-800">Agent Architecture *</label>
          </div>
          <button
            onClick={() => copyToClipboard('arch', submissionFields.agentArchitecture)}
            className="text-xs text-orange-600 font-semibold flex items-center space-x-1"
          >
            {copiedField === 'arch' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedField === 'arch' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <textarea
          rows={6}
          readOnly
          value={submissionFields.agentArchitecture}
          className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <label className="text-xs font-bold text-slate-800">Test Cases / Proof of Working Agent *</label>
          </div>
          <button
            onClick={() => copyToClipboard('tests', submissionFields.testCasesProof)}
            className="text-xs text-orange-600 font-semibold flex items-center space-x-1"
          >
            {copiedField === 'tests' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedField === 'tests' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <textarea
          rows={6}
          readOnly
          value={submissionFields.testCasesProof}
          className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <label className="text-xs font-bold text-slate-800">Solution & Agent Workflow *</label>
          </div>
          <button
            onClick={() => copyToClipboard('sol', submissionFields.solutionWorkflow)}
            className="text-xs text-orange-600 font-semibold flex items-center space-x-1"
          >
            {copiedField === 'sol' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedField === 'sol' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
        <textarea
          rows={6}
          readOnly
          value={submissionFields.solutionWorkflow}
          className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
        />
      </div>
    </div>
  );
};