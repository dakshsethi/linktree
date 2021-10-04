import photo from './images/dp.jpg'

const Top = () => {
    return (
        <div className="top__area">
            <img src={photo} alt="DP" />
            <h3>Hi There, I'm Daksh Sethi 👋</h3>
            <span className="bio">
            I am an engineering student in VIT, Chennai. Loves to code and develop new things.
            I am also an Open Source Enthusiast as well and loves to try my hands on new technologies.
            </span>
        </div>
    );
}

export default Top;