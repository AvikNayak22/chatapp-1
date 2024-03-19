import React from "react";
import { LogOut } from "react-feather";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const { user, handleUserLogout } = useAuth();
  return (
    <div className="header--wrapper">
      {user ? (
        <>
          Welcome {user.name}
          <LogOut onClick={handleUserLogout} className="header--link" />
        </>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

export default Header;
