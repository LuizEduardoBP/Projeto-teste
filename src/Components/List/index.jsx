import { ListItem } from "./ListItem";

function List(props){
    const {items = []} = props
    
    return (
    <div className="movie-list">
        {items.map((item, index) => 
        {
            return(
                <ListItem 
                items={items}
                key={index}
                index={index}
                name={item.name}
                year={item.year}
                genre={item.genre}/>
                
            )
        })}
    </div>
    )
}

export default List;