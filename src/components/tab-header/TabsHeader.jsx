import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import styles from './TabsHeader.module.css';
import cn from 'classnames';
import { ToggleUserButton } from '../toggle-user-button/ToggleUserButton.jsx';

export const TabsHeader = ({ items, activeTabId, changeTab }) => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className={styles.headerUser}>
                <p>{user.isAuthorized ? user.name : null}</p>
                <ToggleUserButton />
            </div>
                <div>
                    {items.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => changeTab(tab.id)}
                            className={cn(styles.tabButton, { [styles.active]: activeTabId === tab.id })}
                        >
                            {tab.name}
                        </button>
                ))}
            </div>
        </>
    );
};