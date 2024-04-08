import "../assets/css/BannerMessage.css";
import Message from "../assets/bioData.json";

function BannerMessage() {
  const title = Message.section_cta[0].title;
  const text = Message.section_cta[0].text;
  const url = Message.section_cta[0].link.url;
  const buttontext = Message.section_cta[0].link.title;

  return (
    <>
      <div className="section mt-5">
        <div className="ctabackground">
          <h2 className="mb-5">{title}</h2>
          <p className="tagline">{text}</p>
          <a href={url}>
            <button>{buttontext}</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default BannerMessage;
