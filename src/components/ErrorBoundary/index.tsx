import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
  fallback: React.ReactNode
}

type ErrorBoundaryState = {
  error: unknown
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
      error
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary
