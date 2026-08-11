import { Component, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught an error:', error)
  }

  private reset = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-[50vh] items-center justify-center px-4 py-16">
            <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <h1 className="text-lg font-semibold text-slate-900">Something went wrong</h1>
              <p className="mt-2 text-sm text-slate-500">
                This section failed to load. Refresh the page to try again.
              </p>
              <button
                type="button"
                onClick={this.reset}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1D3557] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Try again
              </button>
            </div>
          </div>
        )
      )
    }
    return this.props.children
  }
}
