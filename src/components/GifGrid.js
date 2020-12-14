import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && (
                <p className="animate__animated animate__flash">Cargando...</p>
            )}

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;
