import Profile from "../assets/bioData.json";
import "../assets/css/Modal.css";

export const Modal = ({ onClose, userId } : { onClose:any, userId:number}) => {
  const profile = Profile.team[userId];
  
  return (
    <>
        <div className="modalContainer">
          <div className="modalBody">
            <div key={profile.name} className="modalHeading">
              <span onClick={() => onClose()} className="close">
                <img src="../src/assets/_Icons/X.svg" />
              </span>
            </div>
            <div className="modalContent">
              <div className="row">
                <div className="col-4">
                  <img src={profile.headshot} width="100%" />
                </div>
                <div className="col-6 content">
                  <h4>
                    {profile.name}
                    {", " + profile.designation}
                  </h4>
                  <p>{profile.title}</p>
                  <p>
                    <span>
                      <img
                        src="../src/assets/_Icons/Vector.svg"
                        className="mx-3"
                        height="12"
                      />
                    </span>
                    <span className="connect">{profile.number}</span>
                    <span>
                      <img
                        src="../src/assets/_Icons/mail_2.svg"
                        className="mx-3"
                        height="15"
                      />
                    </span>
                    <a className="connect" href={"mailto:"+profile.email}>
                      Email Me
                    </a>
                    <span>
                      <img
                        src="../src/assets/_Icons/linkedin_2.svg"
                        className="mx-3"
                        height="12"
                      />
                    </span>
                    <a className="connect" href={profile.linkedin}>
                      LinkedIn
                    </a>
                  </p>
                  <p>{profile.bio}</p>

                  <div className="row">
                    <div className="col-6">
                      <p className="navigation">
                        <span className="me-5">
                          <img src="../src/assets/_Icons/Previous.svg" />
                        </span>
                        Previous
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="navigation navigationNext">
                        Next
                        <span className="ms-5">
                          <img src="../src/assets/_Icons/Next.svg" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Modal;
