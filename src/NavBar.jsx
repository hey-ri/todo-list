import React from 'react';
import { logout } from './services/api-server';

function NavBar({ user, onLogout }) {
  const logoutHandler = async () => {
    await logout();
    onLogout();
  };
  return (
    <div>
      <nav>
        <span>{user.username}</span>
        <a onClick={logoutHandler}>logout</a>
      </nav>
    </div>
  );
}

export default NavBar;
