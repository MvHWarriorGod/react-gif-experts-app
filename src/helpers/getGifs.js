 export const getGifs=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BoEDgbUX2sZWjNMZqgs38elv23xun8A4`
    const resp=await fetch(url);
    const {data}=await resp.json();
    //console.log(data)
    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            //se pone signo de interrogacion para decir si por si no venga una imagen
            url:img.images?.downsized_medium.url
        }
    })
   return gifs;
}