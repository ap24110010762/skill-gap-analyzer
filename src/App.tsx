import { useState } from 'react';
import { Header } from './components/Header';
import { AgentWorkflowView } from './components/AgentWorkflowView';
import { TestCasesView } from './components/TestCasesView';
import { JobBoardView } from './components/JobBoardView';
import { SubmissionKitView } from './components/SubmissionKitView';

export default function App() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'testcases' | 'jobs' | 'submission'>('workflow');

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-slate-950">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
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

        {activeTab === 'submission' && (
          <SubmissionKitView />
        )}
      </main>
    </div>
  );
}
