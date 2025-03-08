type UseCrudResult<T>  = {
    data: T | T[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export default UseCrudResult;
