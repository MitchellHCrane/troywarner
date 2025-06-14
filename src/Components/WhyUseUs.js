import "../css/useUs.css";
//
const WhyUseUs = () => {
  return (
    <main className="useUsMain" id="">
      <div className="useUsTextCont">
        <p className="useUsHeader">Why Choose Troy?</p>
        <p>
          Watch the video to hear what others <br /> have to say about their
          incredible <br /> experiences working with Troy and <br />
          First Class Home Mortgage.
        </p>
      </div>
      <div className="allVidCont">
        <gidget-component
          widget-type="block"
          venue-id="74e470a9-374a-489c-a39d-66abdad20a06"
          heading=""
          socialverse-id="a4b7e21d-36b5-4091-887e-560ebe606a4a"
          show-block-hero-name="false"
        />
      </div>
    </main>
  );
};

export default WhyUseUs;
