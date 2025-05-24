"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
              <p className="mb-4">We're sorry, but there was an error loading this page.</p>
              <button
                className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
                onClick={() => this.setState({ hasError: false })}
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
