    //SOLO SE ENCARGA DE REALIZAR LA PETICION A LA API
    export const getGifs = async (category) => {
        // const url ="https://api.giphy.com/v1/gifs/search?q=One+Punch&limit=10&api_key=al5afyhlzaJBBXW1hlwCVmqj8Qgri92R";
        const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=al5afyhlzaJBBXW1hlwCVmqj8Qgri92R`;
        const res = await fetch(url);
        const { data } = await res.json();
        //filtramos y devolvemos un nuevo objeto solo con lo necesario
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        //retorna una promesa con las imagenes
        return gifs;
    };