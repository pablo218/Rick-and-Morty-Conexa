import { useCallback, useState } from "react";
import { useMountedRef } from './useMountedRef';

export const useRequest = (request, onSuccess, onerror)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const isMounted = useMountedRef();

    const sendRequest = useCallback((payload)=>{
        setLoading(true);
        request(payload)
        .then(response => {
            if(isMounted.current) {
                setData(response);
                setError(null)
                setLoading(false)
                onSuccess(response.data, response.status)
            }
        })
        .catch(error => {
            if(isMounted.current) {
                setError(error)
                setLoading(false)
                onerror(error)
            }
        })
    }, [request])

    const refreshData = ()=>{setData([])}

    return {data, loading, sendRequest, error, refreshData}
}
