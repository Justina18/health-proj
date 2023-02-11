import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "./UserContext";

function Logout() {
    const [user, setUser] = useContext(UserContext);
  
    setUser(null);
  
    return <Redirect to="/" />;
  }

export default Logout


// import React, { useState } from 'react';

// const LogoutButton = () => {
//   const handleLogout = async () => {
//     try {
//       const response = await fetch('https://api.example.com/logout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       if (response.ok) {
//         localStorage.removeItem('token');
//         window.location.reload();
//       } else {
//         throw new Error('Logout failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <button onClick={handleLogout}>Logout</button>
//   );
// };

// export default LogoutButton;
