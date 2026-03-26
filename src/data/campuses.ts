export type Campus = {
  id: string
  name: string
  /** Shorter label for tabs on small screens */
  tabLabel: string
  addressLines: string[]
  phone: string
  email: string
  /** Used for Google Maps search embed */
  mapQuery: string
  /** Direct public maps link for accurate branch destination */
  mapUrl: string
  /** Direct iframe embed src to preserve exact map view */
  mapEmbedSrc: string
  reachNote: string
}

export const campuses: Campus[] = [
  {
    id: 'thamarassery',
    name: 'Thamarassery',
    tabLabel: 'Thamarassery',
    addressLines: ['Thamarassery, Kerala', 'VTRUST Eye Hospital Thamarassery'],
    phone: '+91 9400920044',
    email: 'vtrustcollege@gmail.com',
    mapQuery: 'Thamarassery, Kerala, India',
    mapUrl: 'https://maps.app.goo.gl/YNHCVEoPm5xptF1y6',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.895041863402!2d75.9373315!3d11.415163699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba668fbfeffd0c7%3A0x3621aa79ed1886d5!2sVTRUST%20EYE%20HOSPITAL%20THAMARASSERY!5e0!3m2!1sen!2sin!4v1774517854784!5m2!1sen!2sin',
    reachNote: 'VTRUST Eye Hospital Thamarassery branch for support, inquiries, and student coordination.',
  },
  {
    id: 'koyilandi',
    name: 'Koyilandy',
    tabLabel: 'Koyilandy',
    addressLines: ['Koyilandy, Kozhikode district, Kerala', 'VTRUST Eye Hospital Koyilandy'],
    phone: '+91 9400920044',
    email: 'vtrustcollege@gmail.com',
    mapQuery: 'Koyilandy, Kerala, India',
    mapUrl: 'https://maps.app.goo.gl/AEEyb5KDsk2ZGLYn9',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4792168908657!2d75.69019999999999!3d11.445295999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba689d4a94c2979%3A0xa630d6cafa6827bf!2sV%20TRUST%20EYE%20HOSPITAL%20KOYILANDY!5e0!3m2!1sen!2sin!4v1774517889631!5m2!1sen!2sin',
    reachNote: 'VTRUST Eye Hospital Koyilandy branch supporting learners across the Koyilandy corridor.',
  },
  {
    id: 'balusery',
    // Display name matches user requirement; mapQuery uses canonical place spelling for better embeds.
    name: 'Balussery',
    tabLabel: 'Balussery',
    addressLines: ['Balussery, Kozhikode district, Kerala', 'VTRUST Eye Hospital Balussery'],
    phone: '+91 9400920044',
    email: 'vtrustcollege@gmail.com',
    mapQuery: 'Balussery, Kerala, India',
    mapUrl: 'https://maps.app.goo.gl/aL9XKv9M1mNwepNY8',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4501703693404!2d75.8276975!3d11.4473979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba666a06689b1e5%3A0x3e5a8ad2c60c5c53!2sV%20TRUST%20EYE%20HOSPITAL%20Balussery!5e0!3m2!1sen!2sin!4v1774517918086!5m2!1sen!2sin',
    reachNote: 'VTRUST Eye Hospital Balussery branch supporting student coordination and local inquiries.',
  },
  {
    id: 'vadakara',
    name: 'Vadakara',
    tabLabel: 'Vadakara',
    addressLines: ['Vadakara, Kerala', 'VTRUST Eye Hospital Vadakara'],
    phone: '+91 9400920044',
    email: 'vtrustcollege@gmail.com',
    mapQuery: 'Vadakara, Kerala, India',
    mapUrl: 'https://maps.app.goo.gl/96LRfA1HexxZqppb6',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.381008507717!2d75.5952719!3d11.596162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba685006c474ced%3A0xdd3f4a7e75352707!2sV%20TRUST%20EYE%20HOSPITAL%20VADAKARA!5e0!3m2!1sen!2sin!4v1774517944890!5m2!1sen!2sin',
    reachNote: 'VTRUST Eye Hospital Vadakara branch supporting inquiries from the northern region.',
  },
]

export function getGoogleMapsEmbedSrc(mapQuery: string) {
  const q = encodeURIComponent(mapQuery)
  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`
}
