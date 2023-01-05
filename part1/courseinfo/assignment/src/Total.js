const Total = (props) => {
    return (
        <p>
            Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}
        </p>
    )
}

export default Total;