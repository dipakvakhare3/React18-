import React,{useState, useEffect} from "react";

const useData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }   
                const data = await response.json();

                const deatailData = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return await res.json();
                    })
                );
                setData(deatailData);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }   
        };

        fetchData();
    }, [url]);
    return { data, loading, error };
}
export default useData;