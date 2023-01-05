import Part from './Part'
const Content = (props) => {
    console.log('the props of Content: ' + props);
    return (
        <div>
            <Part data={props.data[0]} />
            <Part data={props.data[1]} />
            <Part data={props.data[2]} />
        </div>
    )
}

export default Content;


/*

props will receive something like this from App
props = { data = {commonProps = {part1{}, part2{}, part3{} } } }

ALWAYS REMEMBER: props always get data as object and nothing else, if you send an object to props
it will receive it as if the object was encapsulated inside another object

*/