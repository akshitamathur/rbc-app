import Profile from "../assets/bioData.json";
import Modal from "../components/Modal";
import { useState } from "react";

import "../assets/css/Profiles.css"

function Profiles({ personId } : {personId: number}) {

  const [ModalOpen, SetModalOpen] = useState(false);
  const profile = Profile.team[personId];

  const handleButtonClick = () => {
    SetModalOpen(false);
  };

  return (
    <>
      {ModalOpen && (
        <Modal onClose={handleButtonClick} userId={personId}></Modal>
      )}
      <div key={profile.name} className="col-3 headshot">
        <div onClick={() => SetModalOpen(true)} className="profile">
          <img src={profile.headshot} alt={profile.name + " image"} />
          <div className="row">
            <div className="col-10">
              <h3>
                {profile.name}
                {", " + profile.designation}
              </h3>
            </div>
            <div className="col-2">
              <p>
                <span>
                  <img className="arrow" src="src/assets/_Icons/Next.svg" />
                </span>
              </p>
            </div>
          </div>
          <p>{profile.title}</p>
        </div>
      </div>
    </>
  );
}

export default Profiles;
