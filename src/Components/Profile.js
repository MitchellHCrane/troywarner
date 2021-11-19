import "../css/profile.css";
import "../css/App.css";


function Profile() {
  return (
    <div className="profile-div">
      <img className="troyProfilePic" src="../TroyProfile.jpeg" alt="Troy Warner Mortgage Banker" />
      <h2 className="profileName">Troy Warner</h2>
      <p className="NMLS">(NMLS #102983)</p>
      <p>
        Hello! I’m Troy, I look forward to helping you along your home buying
        experience. I’ve provided a few useful links to get you started.
      </p>
     <a href="#getStarted"><button className="buttonBlue">Get Started</button></a>
    </div>
  );
}

export default Profile;
