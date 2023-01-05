import Part from './Part'
const Content = (props) => {
    return (
        <div>
            <Part data={props.data.parts[0]} />
            <Part data={props.data.parts[1]} />
            <Part data={props.data.parts[2]} />
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