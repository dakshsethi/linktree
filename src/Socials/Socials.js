import SocialButton from './SocialButton';

const Socials = () => {
    return (
        <div className="socials">
            <h3 style={{ width: '90%' }}>Get in touch... 🌐🤙</h3>
            <SocialButton name="GitHub" bgfrom="#28bd69" bgto="#219f58" link="https://www.github.com/dakshsethi" />
            <SocialButton name="Instagram" bgfrom="#e13b8e" bgto="#bd3278" link="https://www.instagram.com/dakshxsethi" />
            <SocialButton name="Twitter" bgfrom="#3b8be1" bgto="#3275bd" link="https://www.twitter.com/sethidaksh02" />
            <SocialButton name="LinkedIn" bgfrom="#1c5693" bgto="#17487b" link="https://www.linkedin.com/in/daksh-sethi/" />
        </div>
    );
}

export default Socials;