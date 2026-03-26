export const tabs = [
  'Optometry & Vision Sciences',
  'Allied Health Sciences',
  'Healthcare Management',
  'Nutrition & Dietetics',
] as const

export type TabKey = (typeof tabs)[number]

export type CourseRecord = {
  slug: string
  title: string
  description: string
  image: string
  category: TabKey
  overview: string
  roleOfCourse: string
  syllabus: string[]
  eligibility: string
  duration: string
  careerOutcomes: string[]
}

const heroImg = '/generated/hero-bg.png'

export const allCourses: CourseRecord[] = [
  {
    slug: 'bsc-optometry',
    title: 'BSc Optometry',
    description: 'Build strong clinical and diagnostic skills for optometry.',
    image: heroImg,
    category: 'Optometry & Vision Sciences',
    overview:
      'BSc Optometry develops strong foundations in vision science, clinical diagnostics, refraction, and primary eye care through real patient exposure.',
    roleOfCourse:
      'This course prepares students to support ophthalmologists, run vision assessments, and deliver quality eye-care services in hospitals and clinics.',
    syllabus: [
      'Ocular Anatomy and Physiology',
      'Visual Optics and Refraction',
      'Clinical Optometry Practice',
      'Contact Lens and Low Vision Care',
    ],
    eligibility: 'Plus Two (Science stream preferred) with qualifying marks.',
    duration: '3 years + internship',
    careerOutcomes: [
      'Optometrist in hospitals and eye clinics',
      'Vision care specialist in optical chains',
      'Clinical assistant in ophthalmology departments',
    ],
  },
  {
    slug: 'msc-optometry',
    title: 'MSc Optometry',
    description: 'Advanced training in clinical optometry, diagnostics.',
    image: heroImg,
    category: 'Optometry & Vision Sciences',
    overview:
      'MSc Optometry offers advanced clinical training in diagnostics, specialty eye care, and evidence-based optometric practice.',
    roleOfCourse:
      'The program builds specialist-level competency for advanced patient assessment, academic roles, and clinical leadership.',
    syllabus: [
      'Advanced Ocular Disease Management',
      'Specialty Contact Lens Practice',
      'Research Methodology and Biostatistics',
      'Clinical Case-Based Optometry',
    ],
    eligibility: 'BSc Optometry or relevant equivalent qualification.',
    duration: '2 years',
    careerOutcomes: [
      'Senior optometrist / specialty clinician',
      'Academic and training roles',
      'Research and clinical consultancy',
    ],
  },
  {
    slug: 'diploma-optometry',
    title: 'Diploma in Optometry',
    description: 'Foundation for eye care, vision testing, and optical assistance.',
    image: heroImg,
    category: 'Optometry & Vision Sciences',
    overview:
      'Diploma in Optometry builds practical skills in vision screening, refraction basics, and patient support in eye-care settings.',
    roleOfCourse:
      'This course creates entry-level professionals who can assist in routine vision testing and optical dispensing workflows.',
    syllabus: [
      'Basic Ocular Sciences',
      'Refraction and Vision Screening',
      'Optical Instruments and Dispensing',
      'Clinical Posting and Patient Handling',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '2 years',
    careerOutcomes: [
      'Optometry assistant',
      'Vision screening technician',
      'Optical store clinical support',
    ],
  },
  {
    slug: 'certificate-ophthalmic-care',
    title: 'Certificate in Ophthalmic Care',
    description: 'Entry-level skills in ophthalmic assistance and patient support.',
    image: heroImg,
    category: 'Optometry & Vision Sciences',
    overview:
      'A short-term certificate focused on basic ophthalmic support, patient communication, and clinic workflow essentials.',
    roleOfCourse:
      'The course helps students begin careers in ophthalmic support roles and front-line eye-care services.',
    syllabus: [
      'Introduction to Eye Care',
      'Patient Communication and Records',
      'Basic Ophthalmic Procedures',
      'Clinical Safety and Hygiene',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '6-12 months',
    careerOutcomes: [
      'Ophthalmic assistant',
      'Eye clinic support staff',
      'Patient care coordinator',
    ],
  },
  {
    slug: 'optical-technician',
    title: 'Optical Technician',
    description: 'Optical dispensing and lens technology with hands-on training.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'Optical Technician training covers lens fitting, frame alignment, optical dispensing, and customer care.',
    roleOfCourse:
      'Graduates support optical outlets and clinics by ensuring accurate and comfortable visual correction devices.',
    syllabus: [
      'Lens Materials and Designs',
      'Frame Selection and Fitting',
      'Optical Dispensing Standards',
      'Customer Handling and Documentation',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '1 year',
    careerOutcomes: [
      'Optical dispensing technician',
      'Optical store operations support',
      'Lens fitting specialist',
    ],
  },
  {
    slug: 'diploma-mlt',
    title: 'Diploma in Medical Lab Technology',
    description: 'Practical lab training in microbiology, biochemistry & diagnostics.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'This diploma provides hands-on diagnostic lab exposure in microbiology, pathology, and biochemistry.',
    roleOfCourse:
      'The program prepares technicians to handle lab procedures, sample analysis, and quality processes in diagnostics.',
    syllabus: [
      'Clinical Biochemistry',
      'Microbiology and Serology',
      'Hematology and Pathology',
      'Lab Instrumentation and Quality Control',
    ],
    eligibility: 'Plus Two (Science preferred).',
    duration: '2 years',
    careerOutcomes: [
      'Medical laboratory technician',
      'Diagnostic center lab assistant',
      'Quality control support in labs',
    ],
  },
  {
    slug: 'diploma-nursing-anm',
    title: 'Diploma in Nursing (ANM)',
    description: 'Nursing fundamentals with patient care and clinical exposure.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'ANM Nursing equips students with nursing basics, patient care practices, and community health understanding.',
    roleOfCourse:
      'This course develops frontline nursing professionals for hospitals, clinics, and community health settings.',
    syllabus: [
      'Fundamentals of Nursing',
      'Community Health Nursing',
      'Maternal and Child Health',
      'Clinical Practice and Ward Posting',
    ],
    eligibility: 'Plus Two pass as per governing norms.',
    duration: '2 years',
    careerOutcomes: [
      'ANM nurse',
      'Community health worker',
      'Patient care assistant in hospitals',
    ],
  },
  {
    slug: 'bvoc-anesthesia-technology',
    title: 'B.Voc in Anesthesia Technology',
    description: 'Assist during anesthesia with OT preparation and monitoring.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'B.Voc Anesthesia Technology provides in-depth OT exposure, anesthesia support skills, and patient safety protocols.',
    roleOfCourse:
      'Students are trained to support anesthesiologists in perioperative preparation, monitoring, and equipment readiness.',
    syllabus: [
      'Basics of Anesthesia',
      'Operation Theatre Protocols',
      'Patient Monitoring and Safety',
      'Anesthesia Equipment Management',
    ],
    eligibility: 'Plus Two (Science preferred).',
    duration: '3 years',
    careerOutcomes: [
      'Anesthesia technician',
      'OT support technologist',
      'Perioperative care assistant',
    ],
  },
  {
    slug: 'bvoc-operation-theatre-technology',
    title: 'B.Voc in Operation Theatre Technology',
    description: 'Hands-on OT training: sterilization, surgical support, teamwork.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'This program develops practical OT competencies including sterilization, surgical setup, and intraoperative assistance.',
    roleOfCourse:
      'Graduates become essential OT team members who support surgeons and ensure smooth theatre workflow.',
    syllabus: [
      'Surgical Instruments and Sterilization',
      'Operation Theatre Procedures',
      'Infection Control and Asepsis',
      'Clinical OT Posting',
    ],
    eligibility: 'Plus Two (Science preferred).',
    duration: '3 years',
    careerOutcomes: [
      'Operation theatre technologist',
      'Surgical support assistant',
      'Sterilization and CSSD roles',
    ],
  },
  {
    slug: 'bvoc-medical-lab-technology',
    title: 'B.Voc in Medical Lab Technology',
    description: 'Practical diagnostics with quality testing and biomedical analysis.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'B.Voc MLT combines lab science theory with extensive diagnostic practice in modern laboratory settings.',
    roleOfCourse:
      'The course prepares students for advanced technician roles in pathology and diagnostic workflows.',
    syllabus: [
      'Clinical Pathology',
      'Advanced Laboratory Diagnostics',
      'Molecular Techniques Basics',
      'Laboratory Quality and Accreditation',
    ],
    eligibility: 'Plus Two (Science preferred).',
    duration: '3 years',
    careerOutcomes: [
      'Senior laboratory technician',
      'Diagnostic lab specialist',
      'Biomedical lab operations support',
    ],
  },
  {
    slug: 'bvoc-radiology-imaging-technology',
    title: 'B.Voc in Radiology & Imaging Technology',
    description: 'Imaging modalities, safety, and support in diagnostic radiology.',
    image: heroImg,
    category: 'Allied Health Sciences',
    overview:
      'This course trains students in diagnostic imaging support across X-ray, CT, and allied imaging modalities.',
    roleOfCourse:
      'Graduates support radiologists in safe imaging workflows and patient positioning standards.',
    syllabus: [
      'Radiographic Physics Basics',
      'Imaging Modalities and Positioning',
      'Radiation Safety and Protection',
      'Clinical Imaging Posting',
    ],
    eligibility: 'Plus Two (Science preferred).',
    duration: '3 years',
    careerOutcomes: [
      'Radiology technician support',
      'Imaging center assistant',
      'Diagnostic imaging workflow coordinator',
    ],
  },
  {
    slug: 'bvoc-hospital-management',
    title: 'B.Voc in Hospital Management',
    description: 'Hospital operations and management leadership with case learning.',
    image: heroImg,
    category: 'Healthcare Management',
    overview:
      'B.Voc Hospital Management focuses on administration, operations, patient services, and quality systems in healthcare institutions.',
    roleOfCourse:
      'The program prepares students for hospital front-office, operations, and managerial support roles.',
    syllabus: [
      'Hospital Administration Fundamentals',
      'Healthcare Operations and Quality',
      'Medical Records and HMIS',
      'Patient Relations and Service Management',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '3 years',
    careerOutcomes: [
      'Hospital operations executive',
      'Patient service coordinator',
      'Healthcare administration assistant',
    ],
  },
  {
    slug: 'diploma-hospital-management',
    title: 'Diploma in Hospital Management',
    description: 'Focused management training for healthcare operations.',
    image: heroImg,
    category: 'Healthcare Management',
    overview:
      'A focused diploma that introduces core hospital administration, billing, records, and patient service processes.',
    roleOfCourse:
      'This course creates job-ready professionals for administrative and operational hospital functions.',
    syllabus: [
      'Healthcare Administration Basics',
      'Front Office and Billing',
      'Medical Documentation',
      'Hospital Workflow Coordination',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '1 year',
    careerOutcomes: [
      'Hospital admin assistant',
      'Front office executive',
      'Medical records support staff',
    ],
  },
  {
    slug: 'diploma-human-resources-management',
    title: 'Diploma in Human Resources Management',
    description: 'HR fundamentals and talent management for healthcare.',
    image: heroImg,
    category: 'Healthcare Management',
    overview:
      'This diploma builds HR skills relevant to healthcare institutions, including staffing, compliance, and team development.',
    roleOfCourse:
      'Students are prepared to support recruitment, employee engagement, and HR operations in hospital environments.',
    syllabus: [
      'HR Fundamentals',
      'Recruitment and Onboarding',
      'Payroll and Compliance Basics',
      'Performance and Team Management',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '1 year',
    careerOutcomes: [
      'HR assistant in healthcare organizations',
      'Recruitment coordinator',
      'Administrative HR support roles',
    ],
  },
  {
    slug: 'bvoc-nutrition-dietetics',
    title: 'B.Voc in Nutrition & Dietetics',
    description: 'Clinical nutrition and diet planning for health & wellness.',
    image: heroImg,
    category: 'Nutrition & Dietetics',
    overview:
      'B.Voc Nutrition & Dietetics trains students in nutritional science, clinical diet planning, and wellness-oriented interventions.',
    roleOfCourse:
      'The course prepares professionals to assist in therapeutic nutrition planning and preventive health counseling.',
    syllabus: [
      'Human Nutrition Fundamentals',
      'Clinical Dietetics',
      'Food Service Management',
      'Community Nutrition Programmes',
    ],
    eligibility: 'Plus Two pass (Science preferred).',
    duration: '3 years',
    careerOutcomes: [
      'Dietetic assistant',
      'Nutrition counselor support',
      'Wellness and community nutrition roles',
    ],
  },
  {
    slug: 'diploma-clinical-nutrition',
    title: 'Diploma in Clinical Nutrition',
    description: 'Applied nutrition for therapeutic diets and community health.',
    image: heroImg,
    category: 'Nutrition & Dietetics',
    overview:
      'A practical diploma emphasizing clinical nutrition, therapeutic diets, and basic counseling for better patient outcomes.',
    roleOfCourse:
      'Students gain skills to support diet planning teams in hospitals, wellness centers, and community projects.',
    syllabus: [
      'Principles of Clinical Nutrition',
      'Therapeutic Diet Planning',
      'Nutrition Assessment Basics',
      'Community Health and Diet Education',
    ],
    eligibility: 'Plus Two pass or equivalent.',
    duration: '1 year',
    careerOutcomes: [
      'Clinical nutrition assistant',
      'Diet planning support staff',
      'Community health nutrition facilitator',
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
  'Nutrition & Dietetics': allCourses
    .filter((c) => c.category === 'Nutrition & Dietetics')
    .map((c) => c.title),
}
