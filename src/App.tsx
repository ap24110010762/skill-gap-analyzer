import { useState } from 'react';
import { Header } from './components/Header';
import { AgentWorkflowView } from './components/AgentWorkflowView';
import { TestCasesView } from './components/TestCasesView';
import { JobBoardView } from './components/JobBoardView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'testcases' | 'jobs'>('workflow');

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-slate-950">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {activeTab === 'workflow' && (
          <AgentWorkflowView
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'testcases' && (
          <TestCasesView />
        )}

        {activeTab === 'jobs' && (
          <JobBoardView />
        )}
      </main>
    </div>
  );
}