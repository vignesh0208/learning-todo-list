import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  componentDidCatch(error, errorMessage) {
    if (error) {
      this.setState({ hasError: true, errorMessage: errorMessage });
    }
  }

  render() {
    if (this.hasError) {
      return <div>{this.errorMessage}</div>;
    }
    return this.props.children;
  }
}
