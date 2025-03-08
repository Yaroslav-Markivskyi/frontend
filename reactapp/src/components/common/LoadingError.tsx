interface LoadingErrorProps {
    loading: boolean;
    error: string | null;
  }
  
  const LoadingError = ({ loading, error }: LoadingErrorProps) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return null;
  };
  
  export default LoadingError;
