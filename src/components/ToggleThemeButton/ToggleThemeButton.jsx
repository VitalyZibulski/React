import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

export const ToggleThemeButton = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))}
    >
      Toggle Theme
    </button>
  );
};