import { Component } from 'react';
import { ERRORS } from '../config/constants';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <span className="material-icons text-6xl text-primary">error_outline</span>
            </div>
            <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Oops! Algo salió mal
            </h1>
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
              {ERRORS.general.unknown}
            </p>
            <button
              onClick={this.handleReset}
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-semibold"
            >
              Volver al inicio
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm" style={{ color: 'var(--text-muted)' }}>
                  Detalles del error (solo en desarrollo)
                </summary>
                <pre className="mt-2 p-4 bg-slate-900 text-red-400 rounded text-xs overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

