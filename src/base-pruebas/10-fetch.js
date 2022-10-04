
const apiKey = 'VYMuqQqSBIj6uhpPJPma9HlkDjR1gSF7';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
.then( resp => resp.json())
.then( ({data}) => {
    // console.log(resp)
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    // console.log(url)
})
.catch(console.warn)