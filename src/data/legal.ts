export type LegalSection = {
  heading: string
  paragraphs: string[]
}

export type LegalDocument = {
  title: string
  focusLabel: string
  effectiveDate: string
  summary: string
  sections: LegalSection[]
}

export const privacyPolicyContent: LegalDocument = {
  title: 'Privacy Policy',
  focusLabel: 'LEGAL TERMS',
  effectiveDate: '26 March 2026',
  summary:
    'This Privacy Policy explains how VTRUST Group of Institutions collects, uses, stores, and protects personal information submitted through our website, admissions interactions, and student support channels.',
  sections: [
    {
      heading: '1. Scope and Consent',
      paragraphs: [
        'By accessing this website or submitting any form, you consent to the collection and processing of your information under this Privacy Policy. If you do not agree, please do not submit personal data through our digital channels.',
        'This policy applies to prospective students, current students, parents or guardians, alumni, vendors, and website visitors who engage with VTRUST through official online touchpoints.',
      ],
    },
    {
      heading: '2. Information We Collect',
      paragraphs: [
        'We may collect identity information such as full name, date of birth, and contact details, along with educational records, enquiry messages, branch preference, and program interest.',
        'Technical information such as browser type, device details, IP address, and usage logs may be collected for analytics, platform security, and service improvement.',
      ],
    },
    {
      heading: '3. Purpose of Data Processing',
      paragraphs: [
        'Your information is processed to respond to enquiries, provide admission counseling, schedule campus interactions, and communicate updates related to programs, events, and institutional notices.',
        'We also process limited data for legal compliance, fraud prevention, operational reporting, grievance handling, and academic administration where applicable.',
      ],
    },
    {
      heading: '4. Legal Basis and Retention',
      paragraphs: [
        'Data is processed based on consent, legitimate institutional interest, contractual necessity, and legal obligations depending on the type of interaction.',
        'Records are retained only for as long as required for the relevant purpose, statutory obligations, or dispute resolution. Obsolete data is periodically archived or securely deleted.',
      ],
    },
    {
      heading: '5. Data Sharing and Third Parties',
      paragraphs: [
        'VTRUST does not sell personal data. Information may be shared with authorized service providers for hosting, analytics, communication delivery, and support operations under confidentiality obligations.',
        'Where required by law, data may be disclosed to regulators, law-enforcement authorities, courts, or accreditation bodies in a controlled and legally compliant manner.',
      ],
    },
    {
      heading: '6. Cookies and Tracking',
      paragraphs: [
        'This website may use cookies or similar tools for session continuity, user preference storage, performance monitoring, and traffic analytics.',
        'You may disable cookies via browser settings; however, some features may not function optimally when cookies are blocked.',
      ],
    },
    {
      heading: '7. Data Security',
      paragraphs: [
        'We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, alteration, disclosure, or loss.',
        'Despite standard safeguards, no internet transmission or storage mechanism can be guaranteed as completely secure. Users are advised to avoid sharing sensitive credentials through open channels.',
      ],
    },
    {
      heading: '8. Your Rights',
      paragraphs: [
        'You may request access, correction, update, or deletion of personal information subject to legal and operational constraints. You may also withdraw consent for non-essential processing at any time.',
        'To exercise these rights, please contact our support team through the Contact page with sufficient details to verify your request.',
      ],
    },
    {
      heading: '9. Policy Changes',
      paragraphs: [
        'We may revise this Privacy Policy to reflect legal updates, operational requirements, or digital service enhancements. The latest version will always be available on this page with an updated effective date.',
      ],
    },
  ],
}

export const termsConditionsContent: LegalDocument = {
  title: 'Terms & Conditions',
  focusLabel: 'LEGAL TERMS',
  effectiveDate: '26 March 2026',
  summary:
    'These Terms & Conditions govern use of the VTRUST website, digital forms, and institution-provided online information services. By using this website, you agree to comply with these terms.',
  sections: [
    {
      heading: '1. Acceptance of Terms',
      paragraphs: [
        'Accessing or using this website constitutes acceptance of these Terms & Conditions and all applicable policies referenced herein.',
        'If you do not agree to these terms, you must discontinue use of the website and related digital services.',
      ],
    },
    {
      heading: '2. Institutional Information Disclaimer',
      paragraphs: [
        'Content on this website is provided for general informational purposes regarding programs, campuses, admissions, and student services.',
        'While we strive for accuracy and timely updates, program structure, fees, schedules, eligibility, and administrative procedures may change without prior public notice.',
      ],
    },
    {
      heading: '3. User Responsibilities',
      paragraphs: [
        'Users must provide true, current, and complete information when submitting enquiry or admission-related forms.',
        'You agree not to misuse the website for unlawful activity, security probing, impersonation, spam, or any action that disrupts institutional systems.',
      ],
    },
    {
      heading: '4. Admissions and Enrollment',
      paragraphs: [
        'Submission of an enquiry form, application, or supporting documents does not guarantee admission, seat allocation, scholarship approval, or enrollment confirmation.',
        'Final admission decisions are subject to institutional eligibility criteria, document verification, seat availability, fee compliance, and regulatory requirements.',
      ],
    },
    {
      heading: '5. Intellectual Property',
      paragraphs: [
        'All website content including design, logos, media, text, and downloadable materials is owned by or licensed to VTRUST unless otherwise stated.',
        'You may not copy, distribute, modify, republish, or commercially exploit content without prior written permission from authorized representatives.',
      ],
    },
    {
      heading: '6. External Links',
      paragraphs: [
        'This website may contain links to third-party services for maps, social channels, forms, or informational resources. VTRUST is not responsible for external content, privacy practices, or availability.',
        'Use of external websites is subject to their independent terms and policies.',
      ],
    },
    {
      heading: '7. Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by law, VTRUST shall not be liable for direct, indirect, incidental, or consequential loss arising from website usage, service interruption, or reliance on website content.',
        'Users are responsible for validating critical admission or compliance information through official communication channels before acting on it.',
      ],
    },
    {
      heading: '8. Termination or Restriction of Access',
      paragraphs: [
        'We reserve the right to restrict, suspend, or terminate access to any user who violates these terms or engages in activity harmful to institutional interests or digital security.',
      ],
    },
    {
      heading: '9. Governing Law and Jurisdiction',
      paragraphs: [
        'These terms are governed by the laws of India. Any dispute arising from website use shall be subject to the jurisdiction of competent courts in Kerala unless otherwise required by applicable law.',
      ],
    },
  ],
}

export const refundPolicyContent: LegalDocument = {
  title: 'Refund Policy',
  focusLabel: 'LEGAL TERMS',
  effectiveDate: '26 March 2026',
  summary:
    'This Refund Policy outlines the conditions under which fee refunds, cancellations, and related adjustments are processed for admissions, registrations, and institution-linked payments.',
  sections: [
    {
      heading: '1. Policy Applicability',
      paragraphs: [
        'This policy applies to application fees, registration deposits, tuition-related payments, and other charge categories paid through authorized VTRUST channels.',
        'Certain fees marked as non-refundable at the time of payment may remain non-refundable irrespective of subsequent cancellation requests.',
      ],
    },
    {
      heading: '2. Refund Eligibility',
      paragraphs: [
        'Refund eligibility depends on payment category, cancellation timeline, administrative processing stage, and seat/allocation status at the time of request.',
        'Requests made after commencement of classes, after document verification completion, or after seat blocking may be subject to partial refund or rejection under institutional rules.',
      ],
    },
    {
      heading: '3. Cancellation and Request Procedure',
      paragraphs: [
        'All refund requests must be submitted in writing through official support channels with payment proof, applicant details, and reason for cancellation.',
        'Incomplete or unverifiable requests may be held until supporting documentation is provided. Processing timelines begin only after complete request receipt.',
      ],
    },
    {
      heading: '4. Processing Timelines',
      paragraphs: [
        'Eligible refunds are generally processed within 10 to 21 business days, depending on banking cycles, payment gateway settlements, and internal verification requirements.',
        'In exceptional cases requiring legal or regulatory review, processing may take longer, and the applicant will be informed of the delay where practicable.',
      ],
    },
    {
      heading: '5. Deductions and Administrative Charges',
      paragraphs: [
        'Approved refunds may be subject to administrative deductions, processing charges, or prorated fee components as disclosed in admission communications or fee schedules.',
        'Gateway charges, bank charges, and taxes already remitted may not be fully recoverable in every case.',
      ],
    },
    {
      heading: '6. Mode of Refund',
      paragraphs: [
        'Refunds are typically remitted to the original payment source wherever technically feasible. If that is not possible, the payer may be required to submit verified bank details.',
        'Cash refunds are generally not issued unless specifically mandated by applicable law or approved by finance administration.',
      ],
    },
    {
      heading: '7. Duplicate or Failed Transactions',
      paragraphs: [
        'If a transaction is duplicated or debited but not reflected in our records, reconciliation is performed with payment partners before initiating reversal or refund.',
        'Users should retain transaction references and share them with support to expedite resolution.',
      ],
    },
    {
      heading: '8. Dispute Resolution',
      paragraphs: [
        'Any dispute related to refund decisions must be raised through official grievance channels within the period communicated by the institution.',
        'Final decisions are taken after internal review of payment records, admission status, and applicable regulations.',
      ],
    },
  ],
}
