import React from 'react';

interface HeaderProps {
  activeTab: 'workflow' | 'testcases' | 'jobs' | 'submission';
  setActiveTab: (tab: 'workflow' | 'testcases' | 'jobs' | 'submission') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Pure typographic wordmark - zero boxes or symbols */}
        <div className="flex items-center">
          <h1 className="font-['Space_Grotesk',sans-serif] text-xl font-bold tracking-tight text-white select-none">
            Role<span className="text-orange-400 font-extrabold">Sync</span>
          </h1>
        </div>

        {/* Professional Segmented Navigation Tabs without symbols */}
        <nav className="bg-slate-900/90 p-1 rounded-xl border border-slate-800 flex items-center space-x-1 shadow-inner">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'workflow'
                ? 'bg-slate-800 text-orange-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Analyzer
          </button>

          <button
            onClick={() => setActiveTab('testcases')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'testcases'
                ? 'bg-slate-800 text-orange-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Validation Suite
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'jobs'
                ? 'bg-slate-800 text-orange-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Market Job Board
          </button>

          <button
            onClick={() => setActiveTab('submission')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'submission'
                ? 'bg-slate-800 text-orange-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            Submission Kit
          </button>
        </nav>
      </div>
    </header>
  );
};
