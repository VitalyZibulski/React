import { useState } from 'react';
import './tabs.css';
import { MenuList } from "../menu/MenuList/MenuList.jsx";
import { ReviewsList } from "../review/ReviewList/ReviewList.jsx";
import {TabsHeader} from "../tab-header/TabsHeader.jsx";

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
        <div className="tabs-container">
            <TabsHeader
                items={items}
                activeTabId={activeTabId}
                changeTab={changeTab}
            />

            <div className="tabs-content">
                <div className="content-inner">
                    <h3>Menu:</h3>
                    <MenuList menu={activeItem.menu}/>

                    <h3>Reviews:</h3>
                    <ReviewsList reviews={activeItem.reviews}/>
                </div>
            </div>
        </div>
    );
};