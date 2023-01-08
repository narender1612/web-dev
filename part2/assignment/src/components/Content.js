import Part from './Part';

const Content = (props) => {
    return(
        <div>
            {  props.data.map((part) => {
                return(
                    <Part key={part.id} name={part.name} exercises={part.exercises} />
                );
            })  }
                
            <p>total of { props.data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.exercises;
            }, 0) } exercises.</p>
        </div>
    );
}

export default Content;