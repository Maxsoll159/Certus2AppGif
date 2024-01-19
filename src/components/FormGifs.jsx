import { useState } from "react"

export const FormGifs = ({addCategoryProps}) => {

    const [inputValue, setInpuValue] = useState("")

    const onInputChange = (event) =>{
        setInpuValue(event.target.value)
    }

    const onSubmitGif = (event) =>{
        event.preventDefault()
        addCategoryProps(inputValue)
        setInpuValue("")
    }
 
    return (
        <form onSubmit={onSubmitGif}>
            <input value={inputValue} onChange={onInputChange} type="text" placeholder="Buscar Gif" />
            <button>Buscar</button>
        </form>
    )
}
