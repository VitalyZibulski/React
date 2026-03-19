import styles from './TabsHeader.module.css';
import cn from 'classnames';

export const TabsHeader = ({ items, activeTabId, changeTab }) => {
    return (
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
    );
};