import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/Profile.css';


const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  return (
    isAuthenticated && (

      <div className="informacionp">
      <div className="informacionu">
        <img className="fotou" src={user.picture} alt={user.name} />
        <h2 className="info1">{user.name}</h2>
        <p className="info2">{user.email}</p>
        {/* <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )} */}
      </div>
      </div>
    )
  );
};

export default Profile;