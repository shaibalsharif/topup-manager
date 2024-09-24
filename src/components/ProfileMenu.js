import React from 'react';

const ProfileMenu = ({ user, logout }) => {
  return (
    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded">
      <div className="p-4">
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Logged in at: {user.loggedInAt}</p>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
    </div>
  );
};

export default ProfileMenu;
