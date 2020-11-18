import "./style.css"

function Button(props){
    const {value, onClick} = props;
return <button className="btn" onClick={onClick}>{value}</button>;
}

export default Button;