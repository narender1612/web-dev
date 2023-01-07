const StatisticLine = (props) => {
    if(props.name === 'positive'){
        return(
            <tbody>
                <tr>
                <td>{props.name}</td>
                <td>{props.value}%</td>
            </tr>
            </tbody>
        );
    }
    return (
        <tbody>
            <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
        </tbody>
        
    );
}

export default StatisticLine;