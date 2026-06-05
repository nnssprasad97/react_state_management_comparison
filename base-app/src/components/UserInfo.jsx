import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function UserInfo() {
  const { state } = useContext(AppContext);
  const { name } = state.user;

  // Simulate an avatar initial
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="user-info">
      <div className="avatar">{initial}</div>
      <span className="user-name">{name}</span>
    </div>
  );
}
