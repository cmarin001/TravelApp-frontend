import { useState, useEffect } from 'react';

const useErrorBoundary = () => {
  const [error, setError] = useState<Error | null>(null);

  const resetError = () => setError(null);

  const ErrorBoundaryWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
      if (error) {
        console.error('Error caught by ErrorBoundary:', error);
      }
    }, [error]);

    if (error) {
      return <h1>Something went wrong.</h1>;
    }

    return <>{children}</>;
  };

  return { ErrorBoundaryWrapper, setError, resetError };
};

export { useErrorBoundary };