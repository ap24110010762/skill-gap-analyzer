export type AgentStep = 
  | 'idle'
  | 'collecting_inputs'
  | 'ingesting_sources'
  | 'deduplicating'
  | 'analyzing_demand'
  | 'benchmarking_resume'
  | 'awaiting_approval'
  | 'verifying_urls'
  | 'completed'
  | 'low_data_paused';

export interface UserProfile {
  id: string;
  name: string;
  currentRole: string;
  targetRole: string;
  targetCity: string;
  hoursPerWeek: number;
  resumeText: string;
  createdAt: string;
}

export interface RawJobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  platform: 'LinkedIn' | 'Indeed' | 'Naukri' | 'Glassdoor' | 'Company Portal';
  url: string;
  postedDate: string;
  snippet: string;
  fullDescription: string;
  skillsMentioned: string[];
  syndicatedHash?: string;
}

export interface DeduplicatedJob {
  dedupId: string;
  title: string;
  company: string;
  location: string;
  skills: string[];
  platforms: {
    platform: string;
    url: string;
    retrievedAt: string;
  }[];
  isDuplicate: boolean;
  duplicateCount: number;
  primaryUrl: string;
  snippet: string;
}

export interface SkillFrequencyItem {
  skill: string;
  category: 'Core Tech' | 'Analytics & BI' | 'Databases' | 'Cloud & Tools';
  count: number;
  percentage: number;
  topCompaniesAsking: string[];
  citations: {
    jobId: string;
    company: string;
    quote: string;
  }[];
}

export interface ResumeEvidenceItem {
  skill: string;
  frequencyInMarket: number;
  marketPercentage: number;
  status: 'verified_evidence' | 'critical_gap' | 'secondary_gap' | 'uncertain';
  resumeQuote?: string;
  confidenceScore: number;
  reasoning: string;
}

export interface FreeLearningResource {
  id: string;
  skill: string;
  title: string;
  provider: string;
  url: string;
  estimatedHours: number;
  type: 'Interactive Practice' | 'Video Course' | 'Official Guide' | 'Project Sandbox';
  difficulty: 'Beginner' | 'Intermediate';
  verifiedLive: boolean;
  httpStatus: number;
  lastChecked: string;
}

export interface ActionPlan {
  id: string;
  timestamp: string;
  status: 'pending_approval' | 'approved' | 'rejected';
  targetRole: string;
  targetCity: string;
  weeklyHours: number;
  topThreeGaps: ResumeEvidenceItem[];
  curatedResources: FreeLearningResource[];
  curriculumWeeks: {
    week: number;
    skill: string;
    weeklyGoal: string;
    allocatedHours: number;
    recommendedMilestone: string;
  }[];
  approvedAt?: string;
  humanNotes?: string;
}

export interface VerificationAudit {
  runId: string;
  verifiedAt: string;
  allPassed: boolean;
  jobCitationsChecked: {
    jobId: string;
    company: string;
    url: string;
    status: 'live' | 'unreachable';
    responseMs: number;
  }[];
  resourceLinksChecked: {
    resourceId: string;
    title: string;
    url: string;
    status: 'live' | 'unreachable';
    statusCode: number;
  }[];
}

export type OfficialTestCaseId = 'TC1' | 'TC2' | 'TC3' | 'TC4';

export interface TestCaseResult {
  id: OfficialTestCaseId;
  title: string;
  scenario: string;
  expectedResult: string;
  actualResult: string;
  status: 'idle' | 'running' | 'passed' | 'failed' | 'paused_for_human';
  details: string;
  evidence: {
    inputSummary: string;
    outputSummary: string;
    metrics: Record<string, any>;
    logs: string[];
  };
}