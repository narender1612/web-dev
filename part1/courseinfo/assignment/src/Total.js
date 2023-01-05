const Total = (props) => {
    return (
        <p>
            Number of exercises {props.data.parts[0].exercises + props.data.parts[1].exercises + props.data.parts[2].exercises}
        </p>
    )
}

export default Total;