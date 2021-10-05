import Link from './../images/link.png'

const SocialButton = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="button" style={{ background: `linear-gradient(145deg, ${props.bgfrom}, ${props.bgto})` }} >
            <img src = { props.logo } alt="logo" />
            {props.name}
            <img src = { Link } alt="link" style={{ width: '20px' }} />
        </a>
    );
}

export default SocialButton;