import { useState, useEffect } from "react";
import UseCrudResult from "./types";

const useCrud = <T>(fetchFunction: () => Promise<T | T[]>): UseCrudResult<T> => {
    const [data, setData] = useState<T | T[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchFunction();
            setData(result);
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, refetch: fetchData };
};

export default useCrud;
