const Button = (props) => {
    return(
        <button onClick={props.setFunction}>
            {props.name}
        </button>
    );
}
export default Button;