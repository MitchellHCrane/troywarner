import "../css/getStartedItem.css";

// Icons
import ApplicationIcon from "../images/get-started-icons/application.svg";
import LoanEducationIcon from "../images/get-started-icons/loan-education.svg";
import UploadDocumentIcon from "../images/get-started-icons/upload-documents.svg";
import ArrowRight from "../images/get-started-icons/arrow-right.svg";
import PeaceHand from "../images/get-started-icons/peaceHand.svg";
import reviewIcon from "../images/get-started-icons/review.svg";
import strategyBoard from "../images/get-started-icons/strategyBoard.svg";
import moneyIcon from "../images/get-started-icons/money-icon.svg";

function GetStartedItem(props) {
  const iconName = () => {
    switch (props.iconName) {
      case "applicationIcon":
        return ApplicationIcon;
      case "loanEducationIcon":
        return LoanEducationIcon;
      case "uploadDocumentIcon":
        return UploadDocumentIcon;
      case "peaceHand":
        return PeaceHand;
      case "reviewIcon":
        return reviewIcon;
      case "moneyIcon":
        return moneyIcon;
      case "strategyBoard":
        return strategyBoard;
      default:
        return ApplicationIcon;
    }
  };

  return (
    <div className="grid-item">
      <div>
        <div className="getStartedIcon">
          <img src={iconName()} alt="get started item icon" />
        </div>
        <h3 className="getStartedCard">{props.title}</h3>
        <p className="getStartedCardP">{props.description}</p>
      </div>
      <a href={props.url} target="_blank" rel="noreferrer" className="cardLink">
        {props.btnText}
        <img src={ArrowRight} alt="Arrow right icon" />
      </a>
    </div>
  );
}

export default GetStartedItem;
