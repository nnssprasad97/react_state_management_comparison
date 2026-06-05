import React from 'react';
import { useSelector } from 'react-redux';

export default function UserInfo() {
  const name = useSelector(state => state.user.name);

  // Simulate an avatar initial
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="user-info">
      <div className="avatar">{initial}</div>
      <span className="user-name">{name}</span>
    </div>
  );
}
