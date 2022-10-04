
export const getImagePromise = async () => {
    try {
        const apiKey = 'GMzGDD79tTIRwOtYq7fTIEOfBfTWVHho';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        
         const {url} = data.images.original;
         return url;
    } catch (error) {
        console.log('No se encontro la imagen');
    }
    // console.log(data)
}
getImagePromise();