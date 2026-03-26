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
  reachNote: string
}

export const campuses: Campus[] = [
  {
    id: 'thamarassery',
    name: 'Thamarassery',
    tabLabel: 'Thamarassery',
    addressLines: [
      'Near Old Bus Stand, Vezhu pur Road,',
      'Thamarassery, Kerala',
    ],
    phone: '+91 9072314474',
    email: 'info@vtrusteyehospital.com',
    mapQuery: 'Thamarassery Bus Stand, Thamarassery, Kerala, India',
    reachNote: 'Northern Kozhikode district — accessible for students from Wayanad and eastern Malabar.',
  },
  {
    id: 'koyilandy',
    name: 'Koyilandy',
    tabLabel: 'Koyilandy',
    addressLines: ['Main Road, Koyilandy, Kerala', '673305'],
    phone: '+91 7902666631',
    email: 'info@vtrusteyehospital.com',
    mapQuery: 'Koyilandy, Kerala, India',
    reachNote: 'Coastal belt of Kozhikode — strong connectivity along NH 66 for north–south travel.',
  },
  {
    id: 'balussery',
    name: 'Balussery',
    tabLabel: 'Balussery',
    addressLines: [
      'Near Bus Stand, Main Road,',
      'Balussery, Kerala 673612',
    ],
    phone: '+91 9072201050',
    email: 'info@vtrusteyehospital.com',
    mapQuery: 'Balussery, Kerala, India',
    reachNote: 'Central Kozhikode district — hub for students from neighbouring villages and towns.',
  },
  {
    id: 'vadakara',
    name: 'Vadakara',
    tabLabel: 'Vadakara',
    addressLines: ['Opp. New Bus stand,', 'Vadakara 673101'],
    phone: '+91 9497469902',
    email: 'info@vtrusteyehospital.com',
    mapQuery: 'Vadakara, Kerala, India',
    reachNote: 'Northern Malabar — extends VTRUST reach toward Kasaragod and Kannur corridors.',
  },
]

export function getGoogleMapsEmbedSrc(mapQuery: string) {
  const q = encodeURIComponent(mapQuery)
  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`
}
