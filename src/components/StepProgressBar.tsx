import React from 'react';
import { 
  FileText, 
  Globe2, 
  Cpu, 
  UserCheck, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import type { AgentStep } from '../types/agent';

interface StepProgressBarProps {
  currentStep: AgentStep;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({ currentStep }) => {
  const steps = [
    {
      num: 1,
      title: 'Collect Inputs',
      subtitle: 'Resume, Role & Hours',
      icon: FileText,
      activeWhen: ['collecting_inputs'],
      completedWhen: ['ingesting_sources', 'deduplicating', 'analyzing_demand', 'benchmarking_resume', 'awaiting_approval', 'verifying_urls', 'completed', 'low_data_paused']
    },
    {
      num: 2,
      title: 'Connect Sources',
      subtitle: '~30 Job Listings',
      icon: Globe2,
      activeWhen: ['ingesting_sources'],
      completedWhen: ['deduplicating', 'analyzing_demand', 'benchmarking_resume', 'awaiting_approval', 'verifying_urls', 'completed', 'low_data_paused']
    },
    {
      num: 3,
      title: 'Deduplicate & Decide',
      subtitle: 'Skill Demand & Gaps',
      icon: Cpu,
      activeWhen: ['deduplicating', 'analyzing_demand', 'benchmarking_resume'],
      completedWhen: ['awaiting_approval', 'verifying_urls', 'completed']
    },
    {
      num: 4,
      title: 'Take Action (HITL)',
      subtitle: 'Human Approval Required',
      icon: UserCheck,
      badge: 'Approval Required',
      activeWhen: ['awaiting_approval'],
      completedWhen: ['verifying_urls', 'completed']
    },
    {
      num: 5,
      title: 'Verification',
      subtitle: 'Check Postings & Links',
      icon: ShieldCheck,
      activeWhen: ['verifying_urls'],
      completedWhen: ['completed']
    },
    {
      num: 6,
      title: 'Result & Roadmap',
      subtitle: 'Frequency & Free Resources',
      icon: BarChart3,
      activeWhen: ['completed'],
      completedWhen: ['completed']
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-orange-400" />
          <span>Autonomous 6-Step Agentic Lifecycle</span>
        </h3>
        <span className="text-[11px] font-mono text-slate-500">Continuous Audit Trail</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {steps.map((st) => {
          const Icon = st.icon;
          const isActive = st.activeWhen.includes(currentStep);
          const isDone = st.completedWhen.includes(currentStep);

          let borderClass = 'border-slate-800 bg-slate-950/60 text-slate-400';
          if (isActive) {
            borderClass = 'border-orange-500 bg-orange-950/40 text-orange-300 ring-1 ring-orange-500/50 shadow-lg shadow-orange-500/10';
          } else if (isDone) {
            borderClass = 'border-emerald-800/80 bg-emerald-950/30 text-emerald-300';
          }

          return (
            <div
              key={st.num}
              className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${borderClass}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                  isDone 
                    ? 'bg-emerald-900/60 text-emerald-400' 
                    : isActive 
                    ? 'bg-orange-900/60 text-orange-400' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  0{st.num}
                </span>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Icon className={`w-4 h-4 ${isActive ? 'text-orange-400 animate-pulse' : 'text-slate-500'}`} />
                )}
              </div>

              <div>
                <div className="text-xs font-semibold leading-tight text-white">
                  {st.title}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {st.subtitle}
                </div>
              </div>

              {st.badge && (
                <div className="mt-2">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    isActive ? 'bg-rose-500 text-white animate-pulse' : 'bg-rose-950 text-rose-300 border border-rose-800'
                  }`}>
                    {st.badge}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};