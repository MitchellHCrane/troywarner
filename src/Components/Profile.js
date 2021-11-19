import "../css/profile.css";
import "../css/App.css";


function Profile() {
  return (
    <div className="profile-div">
      <img className="troyProfilePic" src="../images/TroyProfile.jpeg" alt="Troy Warner Mortgage Banker" />
      <h1 className="profileName">Troy Warner</h1>
      <h2 className="NMLS">Mortgage Banker (NMLS #102983)</h2>
      <p>
        Hello! I’m Troy, I look forward to helping you along your home buying
        experience. I’ve provided a few useful links to get you started.
      </p>
     <a href="#getStarted"><button className="buttonBlue" id="getStarted">Get Started</button></a>
    </div>
  );
}

export default Profile;
