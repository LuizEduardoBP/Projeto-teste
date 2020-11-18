import "./style.css"

function Input(props){
    const {value, onChange, placeholder} = props;
return <input name ="Item" type="text" onChange={onChange} value={value} placeholder={placeholder}/>;
}
export default Input;