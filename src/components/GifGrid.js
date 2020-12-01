import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {data, loading} = useFetchGifs();

    return (
        <>
            <h3>{category}</h3>

            {loading ? "Cargando..." : "Fin de la carga de datos"}
        </>
    );
};

export default GifGrid;
