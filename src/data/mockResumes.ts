export interface PresetResume {
  id: string;
  label: string;
  description: string;
  candidateName: string;
  currentRole: string;
  targetRole: string;
  targetCity: string;
  hoursPerWeek: number;
  text: string;
}

export const PRESET_RESUMES: PresetResume[] = [
  {
    id: 'mech-to-data',
    label: 'Mechanical Engineer',
    description: '3 years in automotive manufacturing with CAD, MATLAB, and advanced Excel. Looking to transition into Data Analytics.',
    candidateName: 'Rahul Verma',
    currentRole: 'Mechanical Design Engineer',
    targetRole: 'Data Analyst',
    targetCity: 'Bangalore',
    hoursPerWeek: 12,
    text: `RAHUL VERMA
Mechanical Design Engineer | Bangalore, India | rahul.verma@example.com

SUMMARY
Analytical Mechanical Engineer with 3+ years of experience in automotive component simulation, tolerance analysis, and manufacturing data logging. Seeking to leverage strong quantitative foundation, statistical troubleshooting, and data wrangling skills to transition into a full-time Data Analyst role.

TECHNICAL SKILLS
- Engineering & Design: AutoCAD 2024, SolidWorks, CATIA V5, ANSYS FEA Simulation.
- Data & Math: Microsoft Excel (VLOOKUP, INDEX/MATCH, Pivot Tables, Statistical Charts, Solver), Basic Python (NumPy arrays, script automation for thermal sensor CSV processing), MATLAB.
- Methodologies: Six Sigma Green Belt, Root Cause Analysis (RCA), Design of Experiments (DoE), GD&T.

PROFESSIONAL EXPERIENCE
Senior Mechanical Design Engineer | Precision AutoTech Corp, Bangalore
July 2023 - Present
- Analyzed thermal fatigue test datasets from 150+ engine block cycles using advanced Excel formulas and trendline modeling, reducing test cycle variance by 14%.
- Wrote basic Python utility scripts using pandas and matplotlib to clean and plot temperature sensor output logs from vibration test benches.
- Maintained production defect tracking spreadsheets, generating weekly defect rate charts for quality review meetings.

Graduate Engineering Trainee | Bharat Dynamics Solutions, Pune
Aug 2021 - June 2023
- Designed structural brackets in SolidWorks and performed finite element analysis in ANSYS.
- Automated repetitive component dimension checks in Excel using custom macro routines and lookup functions.

EDUCATION
Bachelor of Technology (B.Tech) in Mechanical Engineering
National Institute of Technology, 2021 - CGPA: 8.6/10
`
  },
  {
    id: 'tc3-excel-only',
    label: 'Excel Specialist (Non-Technical)',
    description: 'Candidate with only spreadsheet experience (no SQL/Python) to evaluate skill-gap detection without hallucination.',
    candidateName: 'Priya Sundaram',
    currentRole: 'Operations Analyst',
    targetRole: 'Data Analyst',
    targetCity: 'Hyderabad',
    hoursPerWeek: 10,
    text: `PRIYA SUNDARAM
Operations Analyst | Hyderabad, India | priya.s@example.com

SUMMARY
Operations coordinator with 2 years of experience managing supply chain records and inventory reports using Microsoft Excel spreadsheets.

CORE SKILLS
- Software: Microsoft Excel, Microsoft Word, PowerPoint, Google Sheets.
- Spreadsheet Capabilities: Pivot Tables, VLOOKUP, SUMIFS, Conditional Formatting, Data Validation, Charts.
- Domain: Supply Chain Logistics, Inventory Tracking, Order Fulfillment Reports.

EXPERIENCE
Operations Assistant | QuickLogistics India, Hyderabad
Sept 2022 - Present
- Compiled daily dispatch sheets across 12 warehouse hubs into master Excel workbooks.
- Built pivot tables to calculate stock turnover and dead-stock percentages.
- Handled invoice discrepancies and reconciled vendor delivery notes in spreadsheets.

EDUCATION
B.Com (General) | Osmania University, 2022
`
  },
  {
    id: 'junior-dev',
    label: 'IT Support Engineer',
    description: 'IT Systems Engineer with Linux, basic SQL queries, and Bash scripting aiming for Data Engineering.',
    candidateName: 'Arun Nair',
    currentRole: 'IT Systems Administrator',
    targetRole: 'Junior Data Engineer',
    targetCity: 'Remote',
    hoursPerWeek: 15,
    text: `ARUN NAIR
IT Systems Administrator | Remote | arun.nair@example.com

SUMMARY
IT Administrator with strong Linux scripting and basic relational database administration experience looking to transition to Junior Data Engineering.

SKILLS
- Scripting & OS: Linux / Ubuntu CLI, Bash scripting, Basic Python.
- Databases: MySQL (Basic SELECT, JOIN, INSERT, index backups), PostgreSQL basics.
- Networking & Cloud: Git, Docker basics, AWS EC2, Cron jobs.

EXPERIENCE
Systems Admin | CloudSphere Tech, Remote
2022 - Present
- Maintained server uptime and monitored PostgreSQL replication health logs.
- Automated daily backup dumps and cron schedule execution via Bash scripts.
`
  },
  {
    id: 'devops-to-mlops',
    label: 'DevOps to MLOps Engineer',
    description: '4 years maintaining Kubernetes, Terraform, and AWS CI/CD pipelines looking to transition into MLOps / AI Platform Engineer.',
    candidateName: 'Vikram Joshi',
    currentRole: 'Cloud DevOps Engineer',
    targetRole: 'MLOps Engineer',
    targetCity: 'San Francisco (Hybrid)',
    hoursPerWeek: 14,
    text: `VIKRAM JOSHI
Cloud DevOps Engineer | San Francisco, CA | vikram.j@example.com

SUMMARY
Infrastructure & DevOps Engineer with 4+ years designing high-availability Kubernetes clusters, Helm charts, and AWS GitOps pipelines. Eager to bridge infrastructure operations with machine learning model serving, vector stores, and automated training workflows as an MLOps Engineer.

CORE SKILLS
- Cloud & Containers: AWS (EKS, S3, IAM, CloudWatch), Docker, Kubernetes, Helm, Terraform.
- CI/CD & Observability: GitHub Actions, ArgoCD, Prometheus, Grafana, Datadog.
- Scripting & Code: Python, Bash, YAML, Basic PyTorch model deployment tests.
- Systems: Linux, Networking (VPC, DNS, TLS), Security Compliance.

EXPERIENCE
Cloud Infrastructure Engineer | ScaleVanguard Systems, SF
2022 - Present
- Architected multi-region AWS EKS clusters hosting 40+ microservices with 99.98% SLA.
- Reduced build artifact deployment times by 42% through optimized caching in GitHub Actions.
- Configured Prometheus alerts and Grafana dashboards for cluster memory and CPU autoscaling.

DevOps Associate | NovaCloud Tech, Austin
2020 - 2022
- Provisioned Terraform infrastructure-as-code modules for staging and production environments.
- Maintained Postgres database backups and daily migration automated smoke tests.

EDUCATION
B.S. in Computer Science | San Jose State University, 2020
`
  },
  {
    id: 'frontend-to-fullstack',
    label: 'Frontend to Full-Stack Engineer',
    description: 'React & TypeScript UI Developer with 3 years experience aiming to transition into Senior Full-Stack Engineer with Node.js & distributed architectures.',
    candidateName: 'Ananya Sharma',
    currentRole: 'Senior Frontend Engineer',
    targetRole: 'Full-Stack Software Engineer',
    targetCity: 'London (Remote)',
    hoursPerWeek: 12,
    text: `ANANYA SHARMA
Senior Frontend Engineer | London, UK | ananya.sharma@example.com

SUMMARY
Product-focused Frontend Engineer with 3+ years architecting performant React, Next.js, and TypeScript client applications. Seeking to expand into full-stack architecture, API microservices design, and distributed database modeling.

TECHNICAL PROFICIENCIES
- Frontend: React 18/19, TypeScript, Next.js, Tailwind CSS, TanStack Query, Redux Toolkit, Webpack/Vite.
- Backend & DB (Expanding): Node.js, Express, REST APIs, PostgreSQL basics, Prisma ORM, Redis caching concepts.
- Testing & Tools: Jest, React Testing Library, Cypress, Git, Figma.

EXPERIENCE
Frontend Software Engineer | OmniFlow Labs, London
2022 - Present
- Built high-throughput data grid widgets handling 100k+ real-time rows via web workers and virtualization.
- Improved Core Web Vitals (LCP from 3.2s to 1.1s) through aggressive route chunking and image pipeline optimization.
- Collaborated with backend team to specify OpenAPI / Swagger contracts for GraphQL and REST endpoints.

UI Developer | Apex Digital Studio, Cambridge
2021 - 2022
- Developed responsive web interfaces for fintech and healthtech client engagements.

EDUCATION
B.Sc. in Software Engineering | University of Bristol, 2021
`
  },
  {
    id: 'qa-to-backend',
    label: 'QA Engineer to Backend Developer',
    description: 'SDET with Python, PyTest, API testing, and SQL aiming to transition into Core Backend Engineering.',
    candidateName: 'David Chen',
    currentRole: 'SDET / QA Automation Engineer',
    targetRole: 'Backend Software Engineer',
    targetCity: 'New York (Hybrid)',
    hoursPerWeek: 16,
    text: `DAVID CHEN
SDET & Automation Engineer | New York, NY | david.chen@example.com

SUMMARY
Software Development Engineer in Test (SDET) with 3+ years building automated integration test harnesses, verifying distributed REST APIs, and writing backend validation scripts in Python and SQL. Targeting a full transition to Backend Software Engineering.

TECHNICAL SKILLS
- Languages: Python, JavaScript, SQL (PostgreSQL, SQLite).
- Testing & Frameworks: PyTest, Requests, FastAPI (prototyping), Postman, Selenium WebDriver, Playwright.
- Infrastructure: Docker, GitHub Actions, AWS S3, Linux, Git.

WORK EXPERIENCE
QA Automation Engineer | FinEdge Technologies, NYC
2022 - Present
- Authored 300+ automated API integration tests in Python PyTest for core transaction processing services.
- Created mock microservices and test databases using Docker Compose, reducing flaky test rates by 35%.
- Identified race conditions in concurrent banking ledger writes through stress testing simulations.

Associate Test Engineer | DataVerify Corp, Boston
2021 - 2022
- Executed functional and regression test runs against RESTful API endpoints.
- Queried PostgreSQL databases to validate transaction audit tables and reconciliation logs.

EDUCATION
B.S. in Information Systems | Northeastern University, 2021
`
  }
];
