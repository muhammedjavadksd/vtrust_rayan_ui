export type FAQItem = {
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    question: 'What is the eligibility for B.Voc Optometry at VTRUST?',
    answer:
      'Eligibility is Plus Two (Commerce, Science, or Humanities) as per current admission guidelines for B.Voc Optometry.',
  },
  {
    question: 'Does VTRUST provide placement support for healthcare courses?',
    answer:
      'Yes. VTRUST provides career guidance, interview-oriented preparation, and placement assistance aligned with healthcare industry requirements.',
  },
  {
    question: 'Which are the best job-oriented paramedical courses after Plus Two?',
    answer:
      'At VTRUST, popular job-oriented options include B.Voc in OTT, B.Voc in MLT, B.Voc in Optometry, and short-term diplomas in administration domains.',
  },
  {
    question: 'Is VTRUST affiliated with UGC approved universities?',
    answer:
      'Yes. Courses are delivered under recognized affiliation pathways including UGC-approved university systems and approved vocational bodies as applicable to each program.',
  },
  {
    question: 'Where are VTRUST campuses located in Kerala and Karnataka?',
    answer:
      'VTRUST has presence in Thamarassery, Balussery, Koyilandy, and Vadakara to support students across key regions.',
  },
  {
    question: 'How can I apply for admission to VTRUST courses?',
    answer:
      'You can apply through the website enquiry process or contact the admissions team directly by phone for counselling and seat guidance.',
  },
  {
    question: 'Are hostel facilities available for students in VTRUST?',
    answer:
      'Hostel facilities are available for eligible students. Details on availability are provided during admissions.',
  },
  {
    question: 'What is the duration of diploma and degree courses at VTRUST?',
    answer:
      'Program durations vary by course. Degree programs typically take longer, while diplomas are shorter and focused.',
  },
] as const
