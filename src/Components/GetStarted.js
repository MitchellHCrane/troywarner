import "../css/getStarted.css";
import "../css/App.css";

function GetStarted() {
  return (
    <div className="getStarted-div" id="getStarted">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">Get Started</h2>
        <p className="getStartedP">
          Here are some helpful links to get you started with the purchase of
          your next home.
        </p>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3 className="getStartedCard">Loan Application</h3>
          <p className="getStartedCardP">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <a
            href="https://www.blink.mortgage/app/signup/p/firstclasshomemortgagellc/troywarner"
            className="cardLink"
          >
            Start Application
          </a>
        </div>
        <div className="grid-item">
          <h3 className="getStartedCard">Loan Education</h3>
          <p className="getStartedCardP">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <a
            href="https://documentguardian.com/filedrop/loans@troywarner.com"
            className="cardLink"
          >
            Start Learning
          </a>
        </div>
        <div className="grid-item">
          <h3 className="getStartedCard">Upload Documents</h3>
          <p className="getStartedCardP">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <a
            href="https://uwm.frameworkhomeownership.org/"
            className="cardLink"
          >
            Upload Documents
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
