const Header = (props) => {
    const heading = props.name;

    return(
        <h1>
            {heading}
        </h1>
    );
}

export default Header;