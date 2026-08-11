import axios from 'axios'

export function getApiErrorMessage(err: unknown, fallback: string): string {
  if (axios.isAxiosError(err)) {
    const serverMessage = err.response?.data?.message
    if (typeof serverMessage === 'string' && serverMessage.trim()) {
      return serverMessage
    }
    if (typeof err.message === 'string' && err.message.trim()) {
      return err.message
    }
  }
  if (err instanceof Error && err.message) {
    return err.message
  }
  return fallback
}
