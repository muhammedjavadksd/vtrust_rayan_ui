export const tabs = [
  'Optometry & Vision Sciences',
  'Allied Health Sciences',
  'Healthcare Management',
] as const

export type TabKey = (typeof tabs)[number]

export type CourseRecord = {
  slug: string
  title: string
  description: string
  image: string
  brochurePdf?: string
  category: TabKey
  college: string
  university: string
  fees: string
  admissionFee: string
  registrationFee?: string
  ugcApproved: boolean
  highlights: string[]
  overview: string
  roleOfCourse: string
  syllabus: string[]
  eligibility: string
  duration: string
  careerOutcomes: string[]
}

const heroImg = '/generated/hero-bg.png'

export const allCourses: CourseRecord[] = [
  // User-provided official course list only
  {
    slug: 'msc-optometry',
    title: 'MSc Optometry',
    description:
      'UGC APPROVED postgraduate program focused on advanced optometric practice and clinical decision-making.',
    image: heroImg,
    brochurePdf: '/course/MSc.pdf',
    category: 'Optometry & Vision Sciences',
    college: 'VTrust College of Optometry',
    university: 'University of Mysore (UGC Approved)',
    fees: 'Online: Rs 35,000 per sem | Regular: Rs 55,000 per sem',
    admissionFee: 'Rs 10,000',
    registrationFee: 'Rs 10,000',
    ugcApproved: true,
    highlights: [
      'Hands-on Practical Learning',
      'Career-Focused Approach',
      'Placement & Career Support',
    ],
    overview:
      'M.Sc Optometry is a 2-year (4 semester) advanced course designed for optometry graduates who want stronger diagnostic capability, specialty practice readiness, and higher academic progression.',
    roleOfCourse:
      'The course builds advanced clinical confidence in refraction, ocular assessment, and patient management while strengthening pathways for leadership, teaching, and specialist practice.',
    syllabus: [
      'Advanced Ocular Disease Management',
      'Specialty Contact Lens Practice',
      'Research Methodology and Biostatistics',
      'Clinical Case-Based Optometry',
    ],
    eligibility: 'BSc Optometry / B.Voc in Optometry',
    duration: '2 years (4 semesters)',
    careerOutcomes: [
      'Senior Optometrist',
      'Clinical Educator / Trainer',
      'Specialty Eye-care and Research Support Roles',
    ],
  },
  {
    slug: 'bvoc-optometry',
    title: 'B.Voc in Optometry',
    description:
      'UGC APPROVED vocational degree with practical optometry training and strong patient-facing skill development.',
    image: heroImg,
    brochurePdf: '/course/B.Voc in Optometry.pdf',
    category: 'Optometry & Vision Sciences',
    college: 'VTrust College of Optometry',
    university:
      'BESTIU - Bharatiya Engineering Science and Technology Innovation University (UGC Approved)',
    fees: 'Rs 30,000 per semester',
    admissionFee: 'Rs 10,000',
    registrationFee: 'Rs 10,000',
    ugcApproved: true,
    highlights: [
      'Hands-on Practical Learning',
      'Career-Focused Approach',
      'Placement & Career Support',
    ],
    overview:
      'This 3-year (6 semester) B.Voc program combines foundational optometry theory with practical skills and real-world clinical exposure.',
    roleOfCourse:
      'Students are prepared for vision screening, refraction support, basic diagnostic workflows, and patient interaction roles in eye-care environments.',
    syllabus: [
      'Foundations of Vision Science',
      'Refraction and Clinical Optometry',
      'Ocular Disease Basics',
      'Clinical Posting and Skill Lab',
    ],
    eligibility: 'Plus Two (Commerce, Science, Humanities)',
    duration: '3 years (6 semesters)',
    careerOutcomes: [
      'Optometry Technologist',
      'Vision Screening Executive',
      'Clinical / Optical Practice Support Roles',
    ],
  },
  {
    slug: 'bvoc-operation-theatre-technology',
    title: 'B.Voc in Operation Theatre Technology (OTT)',
    description:
      'UGC APPROVED specialized program for operation theatre technology, surgical assistance, and OT environment management.',
    image: heroImg,
    brochurePdf: '/course/operation.pdf',
    category: 'Allied Health Sciences',
    college: 'VTrust College of Paramedical & Health Science',
    university:
      'BESTIU - Bharatiya Engineering Science and Technology Innovation University (UGC Approved)',
    fees: 'Rs 30,000 per semester',
    admissionFee: 'Rs 10,000',
    registrationFee: 'Rs 10,000',
    ugcApproved: true,
    highlights: [
      'Hands-on Practical Learning',
      'Career-Focused Approach',
      'Placement & Career Support',
    ],
    overview:
      'Operation Theatre Technology (OTT) has a wide range of career opportunities in the healthcare industry. This 3-year (6 semester) program combines general education with vocational training and real-world practical exposure.',
    roleOfCourse:
      'The program prepares students to work as operation theatre technologists, assist surgeons during procedures, and manage OT workflow with strict clinical protocols.',
    syllabus: [
      'Surgical Instruments and Sterilization',
      'Operation Theatre Procedures and Asepsis',
      'Perioperative Patient Safety and Monitoring',
      'Clinical OT Internship',
    ],
    eligibility: 'Plus Two (Commerce, Science, Humanities)',
    duration: '3 years (6 semesters)',
    careerOutcomes: [
      'Operation Theatre Technologist',
      'Surgical Assistance Support',
      'OT Workflow and Sterilization Roles',
    ],
  },
  {
    slug: 'bvoc-medical-lab-technology',
    title: 'B.Voc in Medical Laboratory Technology (MLT)',
    description:
      'UGC APPROVED vocational program focused on diagnostics, lab workflows, and practical biomedical testing.',
    image: heroImg,
    brochurePdf: '/course/MLT.pdf',
    category: 'Allied Health Sciences',
    college: 'VTrust College of Paramedical & Health Science',
    university:
      'BESTIU - Bharatiya Engineering Science and Technology Innovation University (UGC Approved)',
    fees: 'Rs 30,000 per semester',
    admissionFee: 'Rs 10,000',
    registrationFee: 'Rs 10,000',
    ugcApproved: true,
    highlights: [
      'Hands-on Practical Learning',
      'Career-Focused Approach',
      'Placement & Career Support',
    ],
    overview:
      'This 3-year (6 semester) MLT course builds strong diagnostic capability through intensive practical lab exposure and skill-focused training.',
    roleOfCourse:
      'Students are trained to manage sample handling, diagnostic testing, quality checks, and laboratory reporting support across healthcare settings.',
    syllabus: [
      'Clinical Biochemistry and Pathology',
      'Microbiology and Serology',
      'Hematology and Lab Quality Control',
      'Diagnostic Laboratory Internship',
    ],
    eligibility: 'Plus Two (Commerce, Science, Humanities)',
    duration: '3 years (6 semesters)',
    careerOutcomes: [
      'Medical Laboratory Technologist',
      'Diagnostic Lab Operations Support',
      'Pathology and Clinical Testing Roles',
    ],
  },
  {
    slug: 'dha',
    title: 'Diploma in Hospital Administration',
    description:
      'UGC APPROVED diploma designed for hospital administration, communication, and job-ready healthcare operations support.',
    image: heroImg,
    category: 'Healthcare Management',
    college: 'VTrust College of Paramedical & Health Science',
    university: 'Glocal University (UGC Approved)',
    fees: 'Rs 50,000',
    admissionFee: 'Rs 5,000',
    ugcApproved: true,
    highlights: [
      'Real Work Experience',
      'Communication Skill Development',
      'Interview Training Program',
      'Career-Focused Approach',
      'Placement & Career Support',
    ],
    overview:
      'The Diploma in Hospital Administration is a 6-month program focused on practical hospital operations, patient service systems, and administrative process readiness.',
    roleOfCourse:
      'The course prepares students for front-office coordination, patient communication, records workflow, and operations support roles in hospitals and clinics.',
    syllabus: [
      'Hospital Administration Fundamentals',
      'Patient Services and Communication',
      'Medical Documentation and Coordination',
      'Interview and Employability Training',
    ],
    eligibility: 'Plus Two (Commerce, Science, Humanities) / Degree',
    duration: '6 Months',
    careerOutcomes: [
      'Hospital Administration Assistant',
      'Patient Service Executive',
      'Healthcare Operations Coordinator',
    ],
  },
  {
    slug: 'dba',
    title: 'Diploma in Business Administration',
    description:
      'UGC APPROVED diploma with business communication, decision-making, and career-focused management training.',
    image: heroImg,
    brochurePdf: '/course/BA.pdf',
    category: 'Healthcare Management',
    college: 'VTrust College of Paramedical & Health Science',
    university: 'Glocal University (UGC Approved)',
    fees: 'Rs 50,000',
    admissionFee: 'Rs 5,000',
    ugcApproved: true,
    highlights: [
      'Real Work Experience',
      'Communication Skill Development',
      'Decision-Making',
      'Business Communication',
      'Career-Focused Approach',
    ],
    overview:
      'This 6-month diploma provides practical business and administration skills for students seeking quick-entry managerial support roles.',
    roleOfCourse:
      'The course strengthens communication, decision-making, and administrative discipline for business-facing and operations-focused career pathways.',
    syllabus: [
      'Principles of Business Administration',
      'Organizational Communication',
      'Decision-Making and Team Coordination',
      'Workplace Readiness and Interview Preparation',
    ],
    eligibility: 'Plus Two (Commerce, Science, Humanities) / Degree',
    duration: '6 Months',
    careerOutcomes: [
      'Business Administration Assistant',
      'Operations Support Executive',
      'Entry-level Management Coordinator',
    ],
  },
]

export const getCourseBySlug = (slug: string) =>
  allCourses.find((course) => course.slug === slug)

export const tabProgramTitles: Record<TabKey, string[]> = {
  'Optometry & Vision Sciences': allCourses
    .filter((c) => c.category === 'Optometry & Vision Sciences')
    .map((c) => c.title),
  'Allied Health Sciences': allCourses
    .filter((c) => c.category === 'Allied Health Sciences')
    .map((c) => c.title),
  'Healthcare Management': allCourses
    .filter((c) => c.category === 'Healthcare Management')
    .map((c) => c.title),
}
