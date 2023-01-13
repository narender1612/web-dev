const Content = (props) => {
    return(
        <div>
            {
                props.names.map((name) => {
                    return <p key={name.phone}>{name.name} {name.phone}</p>
                })
            }
        </div>
    )
}

export default Content;