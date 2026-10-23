import type { FreeLearningResource } from '../types/agent';
export const FREE_LEARNING_RESOURCES: FreeLearningResource[] = [
  {
    id: 'res-sql-khan',
    skill: 'SQL',
    title: 'Intro to SQL: Querying and Managing Data',
    provider: 'Khan Academy',
    url: 'https://www.khanacademy.org/computing/computer-programming/sql',
    estimatedHours: 8,
    type: 'Interactive Practice',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  },
  {
    id: 'res-sql-fcc',
    skill: 'SQL',
    title: 'Relational Database Certification (PostgreSQL & SQL)',
    provider: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/learn/relational-database/',
    estimatedHours: 15,
    type: 'Interactive Practice',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  },
  {
    id: 'res-powerbi-msft',
    skill: 'Power BI',
    title: 'Microsoft Power BI Data Analyst Learning Path (PL-300 Official)',
    provider: 'Microsoft Learn',
    url: 'https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/',
    estimatedHours: 14,
    type: 'Official Guide',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  },
  {
    id: 'res-python-kaggle',
    skill: 'Python',
    title: 'Pandas & Python for Data Analytics Micro-Course',
    provider: 'Kaggle Learn',
    url: 'https://www.kaggle.com/learn/pandas',
    estimatedHours: 6,
    type: 'Interactive Practice',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  },
  {
    id: 'res-tableau-public',
    skill: 'Tableau',
    title: 'Tableau Free Starter Kits & Video Tutorials',
    provider: 'Tableau Official',
    url: 'https://www.tableau.com/learn/training/20241',
    estimatedHours: 10,
    type: 'Official Guide',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  },
  {
    id: 'res-stats-khan',
    skill: 'Statistics',
    title: 'High School & College Statistics for Data Analysis',
    provider: 'Khan Academy',
    url: 'https://www.khanacademy.org/math/statistics-probability',
    estimatedHours: 12,
    type: 'Interactive Practice',
    difficulty: 'Beginner',
    verifiedLive: true,
    httpStatus: 200,
    lastChecked: '2026-10-21'
  }
];