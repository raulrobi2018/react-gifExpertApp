import {useState} from "react";

/* Los custom hooks funcionan como si fueran functional components. Pueden utilizar muchas características
de react y son simplemente funciones */

export const useFetchGifs = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setstate({
            data: [1, 2, 3, 4, 5, 6],
            loading: false
        });
    }, 3000);

    return state; //retorna data = [] y loading = true
};
