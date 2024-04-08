import Message from "../assets/bioData.json";
import "../assets/css/MainMessage.css";

function MainMessage() {
  const title = Message.section_intro[0].title;
  const text = Message.section_intro[0].text;

  return (
    <>
      <div className="section">
        <div className="row justify-content-center mb-5">
          <div className="col-4 title">
            <h3>{title}</h3>
          </div>
          <div className="col-6">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMessage;
