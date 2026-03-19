import { useState } from 'react';
import styles from './Tabs.module.css';
import { MenuList } from "../menu/MenuList/MenuList.jsx";
import { ReviewsList } from "../review/ReviewList/ReviewList.jsx";
import {TabsHeader} from "../tab-header/TabsHeader.jsx";
import { RestaurantCard } from '../restaurant/RestaurantCard/RestaurantCard';

export const Tabs = ({ items }) => {
    const [activeTabId, setActiveTabId] = useState(items[0].id);

    if (!items) {
        return <div>No items</div>;
    }

    const changeTab = (id) => {
        if (id === activeTabId) {
            return;
        }

        setActiveTabId(id);
    };

    const activeItem = items.find((item) => item.id === activeTabId);

    return (
        <div className={styles.tabsContainer}>
            <TabsHeader
                items={items}
                activeTabId={activeTabId}
                changeTab={changeTab}
            />

            <div className={styles.tabsContent}>
                <RestaurantCard restaurant={activeItem} />
            </div>
        </div>
    );
};