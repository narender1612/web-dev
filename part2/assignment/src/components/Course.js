import Header from './Header';
import Content from './Content';

const Course = (props) => {
    // const { courses } = props;
    // console.log(courses);
    return(
        <div>
            <Header name={props.course.name} />
            <Content data={props.course.parts} />
        </div>
    )
}

export default Course;