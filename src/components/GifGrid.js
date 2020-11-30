import React, {useState, useEffect} from "react";

export const GifGrid = ({category}) => {
    const [count, setcount] = useState(0);

    // Utilizamos el useEffect para que el componente se reenderize
    // una sola vez
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?limit=10&q=jorge&api_key=3Ysdk9Dh04shPsSSyQtka6WqJ57UNWzO";
        const resp = await fetch(url);

        const {data} = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.tile,
                // Ponemos el operador '?' para asegurarnos de que el atributo exista
                url: img.images?.downsized_medium.url
            };
        });

        console.log(gifs);
    };

    return (
        <div>
            <h3>{category}</h3>
            <h4>{count}</h4>
            <button onClick={() => setcount(count + 1)}></button>
        </div>
    );
};

export default GifGrid;
