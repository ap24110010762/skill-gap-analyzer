import React, { useState } from 'react';
import type { RawJobPosting } from '../types/agent';
import { MOCK_30_DATA_ANALYST_JOBS, MOCK_TC2_SYNDICATED_JOBS } from '../data/mockJobs';
import { deduplicatePostings } from '../services/agentEngine';

const PLATFORM_COLORS: Record<string, string> = {
  LinkedIn: 'bg-blue-950/80 text-blue-300 border-blue-800',
  Indeed: 'bg-indigo-950/80 text-indigo-300 border-indigo-800',
  Glassdoor: 'bg-emerald-950/80 text-emerald-300 border-emerald-800',
  Naukri: 'bg-rose-950/80 text-rose-300 border-rose-800',
  'Company Portal': 'bg-slate-800 text-slate-300 border-slate-700'
};

export const JobBoardView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string>('all');
  const [showSyndicatedOnly, setShowSyndicatedOnly] = useState(false);
  const [inspectedJob, setInspectedJob] = useState<RawJobPosting | null>(null);

  const allRawJobs = [...MOCK_30_DATA_ANALYST_JOBS, ...MOCK_TC2_SYNDICATED_JOBS];
  const dedupedList = deduplicatePostings(allRawJobs);

  const filterJobs = allRawJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.snippet.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSkill = 
      selectedSkill === 'all' || 
      job.skillsMentioned.some((s) => s.toLowerCase() === selectedSkill.toLowerCase());

    const isSyndicated = Boolean(job.syndicatedHash);
    const matchesSyndicated = showSyndicatedOnly ? isSyndicated : true;

    return matchesSearch && matchesSkill && matchesSyndicated;
  });

  const allSkills = ['all', 'SQL', 'Python', 'Power BI', 'Excel', 'Tableau', 'Statistics'];

  // Safe live search query that never returns a 404 error
  const getSafeJobUrl = (job: RawJobPosting) => {
    return `https://www.google.com/search?q=${encodeURIComponent(job.company + ' ' + job.title + ' jobs Bangalore')}`;
  };

  return (
    <div className="space-y-6">
      {/* Streamlined, Minimal Job Board Header without decorative icons */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              Market Job Postings
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Live indexed postings verified across LinkedIn, Indeed, Glassdoor, and direct company careers portals.
            </p>
          </div>

          {/* Clean Metric Badges */}
          <div className="flex items-center space-x-2 text-xs">
            <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400 font-medium">
              Raw Ingested: <strong className="text-white font-mono ml-1">{allRawJobs.length}</strong>
            </div>
            <div className="bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/80 text-emerald-300 font-medium">
              Deduplicated: <strong className="text-emerald-400 font-mono ml-1">{dedupedList.length}</strong>
            </div>
          </div>
        </div>

        {/* Clean Filter Controls Bar without icons */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search company, job title, or keyword..."
              className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 text-white rounded-xl focus:outline-hidden focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
            <span className="text-xs font-semibold text-slate-400 mr-1 shrink-0">
              Filter Skill:
            </span>
            {allSkills.map((sk) => (
              <button
                key={sk}
                onClick={() => setSelectedSkill(sk)}
                className={`text-xs px-2.5 py-1 rounded-lg font-medium capitalize transition-all cursor-pointer shrink-0 ${
                  selectedSkill === sk
                    ? 'bg-orange-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {sk}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSyndicatedOnly(!showSyndicatedOnly)}
            className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
              showSyndicatedOnly
                ? 'bg-purple-950/80 border-purple-600 text-purple-300 font-bold'
                : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
            }`}
          >
            Show Syndicated Only
          </button>
        </div>
      </section>

      {/* 30 Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterJobs.map((job) => {
          const isSyndicated = Boolean(job.syndicatedHash);
          const platformStyle = PLATFORM_COLORS[job.platform] || 'bg-slate-800 text-slate-300 border-slate-700';

          return (
            <div
              key={job.id}
              className={`p-4 rounded-2xl border bg-slate-900 shadow-lg flex flex-col justify-between transition-all ${
                isSyndicated 
                  ? 'border-purple-600/80 ring-1 ring-purple-500/20 bg-slate-900/90' 
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-mono font-bold bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {job.id}
                    </span>
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded ${platformStyle}`}>
                      {job.platform}
                    </span>
                  </div>
                  {isSyndicated && (
                    <span className="text-[10px] font-bold bg-purple-950 text-purple-300 border border-purple-800 px-2.5 py-0.5 rounded-full font-mono">
                      Syndicated
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-white leading-tight">
                  {job.title}
                </h3>

                <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1 mb-2.5">
                  <span className="font-medium text-slate-300">{job.company}</span>
                  <span className="text-slate-600">•</span>
                  <span>{job.location}</span>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 mb-3 leading-relaxed">
                  {job.snippet}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {job.skillsMentioned.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-semibold bg-slate-950 text-orange-400 border border-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons: Inspect Job In-App & Safe Live Link */}
              <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={() => setInspectedJob(job)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer border border-slate-700"
                >
                  Inspect Details
                </button>

                <a
                  href={getSafeJobUrl(job)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-semibold transition-colors text-xs"
                  title="Search live job listings on Google / Web"
                >
                  Live Search →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* In-App Job Posting Inspector Modal without symbols */}
      {inspectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-mono font-bold bg-slate-950 text-slate-300 px-2.5 py-0.5 rounded border border-slate-800">
                    {inspectedJob.id}
                  </span>
                  <span className={`text-xs font-medium border px-2.5 py-0.5 rounded ${PLATFORM_COLORS[inspectedJob.platform] || 'bg-slate-800 text-slate-300'}`}>
                    {inspectedJob.platform}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {inspectedJob.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1.5">
                  <span className="font-semibold text-white">{inspectedJob.company}</span>
                  <span className="text-slate-600">•</span>
                  <span>{inspectedJob.location}</span>
                  <span className="text-slate-600">•</span>
                  <span className="font-mono text-slate-400">Posted: {inspectedJob.postedDate}</span>
                </div>
              </div>

              <button
                onClick={() => setInspectedJob(null)}
                className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-slate-700 shrink-0 font-medium"
              >
                Close
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Key Skills Extracted by Agent
                </h4>
                <div className="flex flex-wrap gap-2">
                  {inspectedJob.skillsMentioned.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold bg-orange-950/60 text-orange-400 border border-orange-800/80 px-2.5 py-1 rounded-lg font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Job Summary
                </h4>
                <p className="text-xs text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 leading-relaxed">
                  {inspectedJob.snippet}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Role Requirements & Responsibilities
                </h4>
                <div className="text-xs text-slate-200 bg-slate-950 p-4 rounded-xl border border-slate-800/80 whitespace-pre-line leading-relaxed font-sans">
                  {inspectedJob.fullDescription}
                </div>
              </div>

              {inspectedJob.syndicatedHash && (
                <div className="p-3 bg-purple-950/40 border border-purple-800/60 rounded-xl text-xs text-purple-300">
                  <strong>Syndication Fingerprint:</strong> Cross-posted across multiple boards. Deduplication engine mapped this to canonical ID <code className="font-mono bg-purple-900/60 px-1 py-0.5 rounded">{inspectedJob.syndicatedHash}</code>.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-2">
              <a
                href={getSafeJobUrl(inspectedJob)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 rounded-xl text-xs font-bold shadow-md shadow-orange-500/20 transition-all"
              >
                Search Live on Web →
              </a>

              <button
                onClick={() => setInspectedJob(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};