import React, {useState, useEffect} from "react";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({category}) => {
    // Utilizamos el useEffect para que el componente se reenderize
    // una sola vez
    useEffect(() => {
        getGifs();
    }, []);

    const [images, setimages] = useState([]);

    const getGifs = async () => {
        const url =
            "https://api.giphy.com/v1/gifs/search?limit=10&q=cat&api_key=3Ysdk9Dh04shPsSSyQtka6WqJ57UNWzO";
        const resp = await fetch(url);

        const {data} = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                // Ponemos el operador '?' para asegurarnos de que el atributo exista
                url: img.images?.downsized_medium.url
            };
        });

        setimages(gifs);
    };

    return (
        <div>
            <h3>{category}</h3>
            {images.map((img) => {
                // Al enviar '...img' estoy enviando cada una de las propiedades de la imagen
                // de manera independiente
                return <GifGridItem {...img} key={img.id} />;

                // Otra forma
                // return <GifGridItem img={img} key={img.id} />;
            })}
        </div>
    );
};

export default GifGrid;
