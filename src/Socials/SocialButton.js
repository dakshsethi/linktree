const SocialButton = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="button" style={{ background: `linear-gradient(145deg, ${props.bgfrom}, ${props.bgto})` }} >
            {props.name}
        </a>
    );
}

export default SocialButton;