import { useState } from "react"
import { FormGifs, GifCards } from "./components"

export const GifAplicationApp = () => {

    const [categories, setCategories] = useState(["Goku"])

    const addCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }

    return (
        <div>
            <h1>Applicativo Git Certus</h1>
            <h2>Busquedas</h2>
            {
                categories.map((categori) => (
                    <div>
                        <p>{categori}</p>
                    </div>
                ))
            }

            <FormGifs addCategoryProps={addCategory} />

            { /** va mostratr topdos los gid que trae la api */}
            
            {
                categories.map((categori)=>(
                    <GifCards key={categori} categori={categori} />
                ))
            }

        </div>
    )
}
