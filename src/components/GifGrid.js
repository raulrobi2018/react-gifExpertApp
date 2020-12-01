import React, {useState, useEffect} from "react";
import {getGifs} from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    // Utilizamos el useEffect para que el componente se reenderize
    // una sola vez
    // El segundo argumento es utilizado para decirle a React que si el
    //category cambia, entonces reenderize. En este caso no cambia pero
    //quitamos el warning del navegador que tira por este tema
    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <div className="cardGrid">
                {images.map((img) => {
                    // Al enviar '...img' estoy enviando cada una de las propiedades de la imagen
                    // de manera independiente
                    return <GifGridItem {...img} key={img.id} />;

                    // Otra forma
                    // return <GifGridItem img={img} key={img.id} />;
                })}
            </div>
        </>
    );
};

export default GifGrid;
