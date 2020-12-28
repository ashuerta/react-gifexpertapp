export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=7gkXawNcwT8k7l7fJPd7M4pwv6h69my1&limit=10`;
    const res = await fetch(url);
    const {data} = await res.json();
    //console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
}