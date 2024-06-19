import { useState, useEffect } from 'react';

// Custom hook to fetch data with caching
const useFetchWithCache = (url, storageKey, useSessionStorage = false) => {
  const storage = useSessionStorage ? sessionStorage : localStorage;
  const [data, setData] = useState(() => {
    const cachedData = storage.getItem(storageKey);
    return cachedData ? JSON.parse(cachedData) : null;
  });
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    if (!data) {
      fetch(url)
        .then(response => response.json())
        .then(fetchedData => {
          setData(fetchedData);
          storage.setItem(storageKey, JSON.stringify(fetchedData));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [url, data, storageKey, storage]);

  return { data, loading };
};

export default useFetchWithCache;
