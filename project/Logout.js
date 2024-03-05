import React from 'react';

const Logout = ({ setIsLoggedIn, setUserName }) => {
  const handleLogout = async () => {
    try {
      // Perform logout operation (if needed)
      // For example, you might want to send a logout request to your backend server
      // axios.post("http://localhost:8000/logout");

      // Clear user data and update state
      setIsLoggedIn(false);
      setUserName('');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
