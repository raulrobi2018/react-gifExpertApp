import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

// Utilizando el comando rafc crea el componente con su contenido inicializado
//Inicializamos con defaultCategories que será un array que el usuario enviará por defecto
const GifExpertApp = ({defaultCategories = []}) => {
    // const [categories, setCategories] = useState(["One Punch"]);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     // Si hacemos esto está mal. Aquí lo que hace es pasar por arriba el state de categories
    //     // y lo convierte en un string
    //     // setCategories("Raul");

    //     // Extrae las categorías con el operador spread dentro del array y le agrega uno nuevo
    //     //Si se quiere agregar en primer lugar: ['Raul', ...categories]
    //     setCategories([...categories, "Raul"]);

    //     // Otra forma es retornar un callback
    //     // setCategories((cats) => [...cats, "Raul"]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Envía la función setCategories como props */}
            <AddCategory setCategories={setCategories} />

            <hr />
            <ol>
                {
                    // Siempre se necesita tener el key de cada elemento
                    // Por lo general el atributo "key" lleva un id de base de datos o un index
                    // El key es usado por React para tener una referencia del elemento cuando por ejemplo
                    // algo cambia en ese elemento y no tenga que renderizar todo
                    // En este caso, le ponemos category porque en el array no se repiten
                    categories.map((category) => (
                        <GifGrid category={category} key={category} />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
