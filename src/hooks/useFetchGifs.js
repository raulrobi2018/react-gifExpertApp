import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";

/* Los custom hooks funcionan como si fueran functional components. Pueden utilizar muchas características
de react y son simplemente funciones */

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // Utilizamos el useEffect para que el componente se reenderize
    // una sola vez
    // El segundo argumento es utilizado para decirle a React que si el
    //category cambia, entonces reenderize. En este caso no cambia pero
    //quitamos el warning del navegador que tira por este tema
    useEffect(() => {
        getGifs(category).then((imgs) => {
            setstate({
                data: imgs,
                // Va en false porque aquí ya retornó las imagenes
                loading: false
            });
        });
    }, [category]);

    return state; //retorna data = [] y loading = true
};
