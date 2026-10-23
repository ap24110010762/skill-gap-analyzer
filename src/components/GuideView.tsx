import React from 'react';
import { Award, Video } from 'lucide-react';
export const GuideView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <section className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center space-x-2 text-xs font-semibold bg-white/20 w-fit px-2.5 py-1 rounded-full mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Agentic AI Hackathon 2026 Master Guide</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black">
          How to Understand & Present Your Project to Win
        </h2>
        <p className="text-sm text-orange-100 mt-2 max-w-3xl leading-relaxed">
          Assigned: <strong>Live Skill-Gap Analyzer</strong> in <strong>Education & Career AI</strong>.
        </p>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
          <Award className="w-4 h-4 text-orange-600" />
          <span>Official 100-Point Scoring Breakdown</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 rounded-lg border border-orange-200 bg-orange-50">
            <div className="text-xs font-semibold text-slate-600">Agentic Capability</div>
            <div className="text-xl font-black text-orange-600 mt-1">25 pts</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-semibold text-slate-600">Problem Fit</div>
            <div className="text-xl font-black text-slate-800 mt-1">20 pts</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-semibold text-slate-600">Technical Build</div>
            <div className="text-xl font-black text-slate-800 mt-1">20 pts</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-semibold text-slate-600">Innovation</div>
            <div className="text-xl font-black text-slate-800 mt-1">15 pts</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-semibold text-slate-600">User Experience</div>
            <div className="text-xl font-black text-slate-800 mt-1">10 pts</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
            <div className="text-xs font-semibold text-slate-600">Presentation</div>
            <div className="text-xl font-black text-slate-800 mt-1">10 pts</div>
          </div>
        </div>
      </section>

      <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center space-x-2">
          <Video className="w-4 h-4 text-orange-600" />
          <span>Your 2–3 Minute Demo Video Script</span>
        </h3>
        <div className="space-y-3 text-xs text-slate-700">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-orange-700 font-mono">[0:00 - 0:35] Problem & Persona</span>
            <p className="mt-1">
              "Hello judges! Our project is the <strong>Live Skill-Gap Analyzer</strong> for the Education & Career AI track. We help a Mechanical Engineer transition into Data roles by grounding recommendations in 30 real-world deduplicated job postings."
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-orange-700 font-mono">[0:35 - 1:15] Deduplication & Skill Demand</span>
            <p className="mt-1">
              "When I click <em>Run Autonomous Agent</em>, it ingests 30 listings from Swiggy, Flipkart, and PhonePe, automatically deduplicating cross-syndicated postings across LinkedIn, Indeed, and Glassdoor so stats are accurate."
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-orange-700 font-mono">[1:15 - 1:50] Human-in-the-Loop Approval</span>
            <p className="mt-1">
              "Per safety rules, the agent pauses on Step 4 and asks for human approval to prioritize SQL, Power BI, and Python, then verifies every link is live."
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="font-bold text-orange-700 font-mono">[1:50 - 2:30] Official Test Cases (TC1 – TC4)</span>
            <p className="mt-1">
              "In the <em>Official Test Cases</em> tab, all 4 scenarios (TC1 to TC4) pass with 100% accuracy, verifying ingestion volume, deduplication, zero-hallucination, and sparse data escalation."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};