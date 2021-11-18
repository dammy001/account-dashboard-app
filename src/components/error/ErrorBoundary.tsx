import { ReactNode, Component } from 'react';

type ErrorBoundaryProp = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: any;
  errorInfo: any;
};

class ErrorBoundary extends Component<ErrorBoundaryProp, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProp) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="flex flex-col">
          <h2 className="text-center text-2xl">Oops!! Something went wrong.</h2>
          {this.state.error && this.state.error.toString()}
          {this.state.errorInfo.componentStack}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
