import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import styles from './ToggleUserButton.module.css';

export const ToggleUserButton = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <button
      className={styles.toggleUserButton}
      onClick={() => setUser(user => ({
        name: user.name === null ? 'User' : null,
        isAuthorized: !user.isAuthorized
      }))}
    >
      {user.name !== 'User' ? 'Log in' : 'Log out'}
    </button>
    );
};