import * as React from "react";

const Profile = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Profile</h1>

      <div className="bg-[#a166e3] p-4 rounded-md">
        <p className="text-2xl">Personal Information</p>
        <p className="text-lg text-gray-200">Your personal info</p>

        <div className="my-8 px-8">
          <div className="border-b p-2 my-2 flex justify-between hover:cursor-pointer bg-deepPurple">
            <p>Full Name</p>
            <p>John Doe</p>
          </div>
          <div className="border-b p-2 my-2 flex justify-between hover:cursor-pointer bg-deepPurple">
            <p>Email</p>
            <p>John Doe</p>
          </div>
          <div className="border-b p-2 my-2 flex justify-between hover:cursor-pointer bg-deepPurple">
            <p>Withdrawal Address</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
