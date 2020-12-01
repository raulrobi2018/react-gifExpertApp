export const getGifs = async (category) => {
    // encodeURI es una función javascript que transforma cualquier caracter no permitido en una url a
    //código valido, como por ejemplo reemplazar los espacios por %20
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
        category
    )}&api_key=3Ysdk9Dh04shPsSSyQtka6WqJ57UNWzO`;
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

    return gifs;
};
