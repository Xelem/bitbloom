import React from "react";
import InputText from "../../../components/inputText";
import TextAreaInput from "../../../components/textAreaInput";
import TitleCard from "../../../components/titleCard";
import ToogleInput from "../../../components/toogleInput";

function ProfileSettings() {
  return (
    <>
      <TitleCard title="Profile Settings" topMargin="mt-2">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputText labelTitle="Name" defaultValue="Alex" />
            <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com" />
            <InputText labelTitle="Title" defaultValue="UI/UX Designer" />
            <InputText labelTitle="Place" defaultValue="California" />
            <TextAreaInput
              labelTitle="About"
              defaultValue="Doing what I love, part time traveller"
            />
          </div>
          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputText labelTitle="Language" defaultValue="English" />
            <InputText labelTitle="Timezone" defaultValue="IST" />
            <ToogleInput labelTitle="Sync Data" defaultValue={true} />
          </div>

          <div className="mt-16">
            <button className="btn btn-primary float-right">Update</button>
          </div>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
