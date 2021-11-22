import "../css/profile.css";
import "../css/App.css";
// import React, { Component } from 'react';
import ParticlesBg from 'particles-bg'

let config = {
  num: [4, 7],
  rps: 0.001,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 5,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};

function Profile() {
  return (
    <div className="profile-div">
      <ParticlesBg config={{config}} color="#004e82" num={75} type="cobweb" bg={true} />
      <div className="columnPic"><img
        className="troyProfilePic"
        src="../images/TroyProfile.jpeg"
        alt="Troy Warner Mortgage Banker"
      /></div>
      <div className="column2Name"><h1 className="profileName">Troy Warner</h1></div>
      <div className="column2NMLS"><h2 className="NMLS">Mortgage Banker (NMLS #102983)</h2></div>
      <div className="column2P"><p className="profileP">
        Hello! I’m Troy, I look forward to helping you along your home buying
        experience. I’ve provided a few useful links to get you started.
      </p></div>
      <div className="column2A"><a href="#getStarted" className="buttonBlueDiv">
        <button className="buttonBlue">Get Started</button>
      </a></div>
    </div>
  );
}

export default Profile;
