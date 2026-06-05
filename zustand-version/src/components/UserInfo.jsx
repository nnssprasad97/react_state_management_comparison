import React from 'react';
import { useAppStore } from '../store/useAppStore';

export default function UserInfo() {
  const name = useAppStore(state => state.user.name);

  // Simulate an avatar initial
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="user-info">
      <div className="avatar">{initial}</div>
      <span className="user-name">{name}</span>
    </div>
  );
}
