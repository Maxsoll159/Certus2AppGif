export const getGif = async(categori) =>{
    //LgZYAoiXryvr4T9hMKF2FaFaPUGhQJ0y
    const url = `https://api.giphy.com/v1/gifs/search?api_key=LgZYAoiXryvr4T9hMKF2FaFaPUGhQJ0y&q=${categori}&limit=20`
    const response = await fetch(url)
    const dataGif = await response.json()
    const gifs = dataGif?.data?.map((img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}