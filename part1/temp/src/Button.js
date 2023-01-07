const Button = (props) => {
    console.log(props);
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;