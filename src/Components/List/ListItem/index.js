import Button from "../../Button";
import removeMovie from "../"
import "./style.css"

export function ListItem(props){
    const {index, name, year, genre} = props;

    const movie = `Nome do filme: ${name} | Ano: ${year} | Genero: ${genre}`
    return (
        <div className="movie-container">
            <span>{movie}</span>
            <Button value="Remover Filme" onClick={"remove"}/>
        </div>
    )
}