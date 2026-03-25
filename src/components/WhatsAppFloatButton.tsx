export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/919072201050"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center p-0 transition-transform hover:scale-105"
    >
      <img
        src="/icons/whatsapp.png"
        alt=""
        className="h-14 w-14 object-contain"
        loading="lazy"
        aria-hidden
      />
    </a>
  )
}

