import { useState } from 'react';
import { UserContext } from '../contexts/user-context';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: null, isAuthorized: false });

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};