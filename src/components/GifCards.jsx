import { useEffect, useState } from "react"
import { getGif } from "../helpers/ApiGif"

export const GifCards = ({categori}) => {

  const [dataGif, setDataGif] = useState([])

  useEffect(()=>{
    getGif(categori).then(res => setDataGif(res))
  }, [])

  return (
    <div>
        {
          dataGif.map((gif)=>(
            <div key={gif.id}>
                <img src={gif.url} alt="" width={300} height={300} />
                <p>{gif.title}</p>
            </div>
          ))
        }
    </div>
  )
}
