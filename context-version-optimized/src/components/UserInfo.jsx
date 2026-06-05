import React, { useContext } from 'react';
import { UserContext } from '../context/SplitContexts';

export default function UserInfo() {
  const { state } = useContext(UserContext);
  const { name } = state;

  // Simulate an avatar initial
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="user-info">
      <div className="avatar">{initial}</div>
      <span className="user-name">{name}</span>
    </div>
  );
}
