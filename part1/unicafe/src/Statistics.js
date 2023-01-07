import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    console.log('statistics line props: ', props);
    const good = props.values[0];
    const neutral = props.values[1];
    const bad = props.values[2];
    const total = good + neutral + bad;
    const avg = (good - bad) / total;
    const positivePercent = (good/total)*100;

    if(good > 0 || neutral > 0 || bad > 0){
        return (
            <div>
                <table>
                    <StatisticLine name='good' value={good} />
                    <StatisticLine name='neutral' value={neutral} />
                    <StatisticLine name='bad' value={bad} />
                    <StatisticLine name='all' value={total} />
                    <StatisticLine name='average' value={avg} />
                    <StatisticLine name='positive' value={positivePercent} />
                </table>
                 
            </div>
        );
    } 

    return (
        <p>
            No feedback given.
        </p>
    );
}

export default Statistics;