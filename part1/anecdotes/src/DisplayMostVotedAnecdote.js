import DisplayAnecdote from "./DisplayAnecdote";

const DisplayMostVotedAnecdote = (props) => {
    let index = -1;
    let numOfVote = 0;

    for(let i = 0; i < props.votes.length; i++){
        if(props.votes[i] > numOfVote){
            index = i;
            numOfVote = props.votes[i]; 
        }
    }

    //first render when no anecdote have likes
    if(index === -1){
        return(
            <p>
                No anecdote has yet been liked!
            </p>
        );
    }

    //when we have some anecdotes with likes
    return(
        <div>
            <DisplayAnecdote value={props.anecdotes[index]} />
            <p>has {numOfVote} votes</p>
        </div>
    );
}

export default DisplayMostVotedAnecdote;