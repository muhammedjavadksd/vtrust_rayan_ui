import { MessageCircle } from 'lucide-react'

export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919072201050"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden />
    </a>
  )
}

