export type Testimonial = {
  name: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Christene Joyal',
    quote:
      'Choosing BSc Optometry at V Trust has been a turning point in my career. The combination of classroom learning and real clinical exposure helped me understand patient care and diagnostics. The faculty are supportive, and the hospital-based training gave me the confidence to handle real-world situations. I feel well-prepared to step into the healthcare field.',
    image: '/icons/image.png',
  },
  {
    name: 'Ayesha Kulkarni',
    quote:
      'V Trust gave me the confidence to work with patients from day one. The labs were advanced, the mentors were always available, and the clinical exposure was exactly what I needed to grow.',
    image: '/icons/image.png',
  },
  {
    name: 'Rohit Sharma',
    quote:
      'From academic learning to hands-on training, the program was well structured. I gained practical knowledge and real-world experience that helped me transition smoothly into my career.',
    image: '/icons/image.png',
  },
] as const
