export const TabsHeader = ({ items, activeTabId, changeTab }) => {
    return (
        <div className="tabs-header">
            {items.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => changeTab(tab.id)}
                    className={`tab-button ${activeTabId === tab.id ? 'active' : ''}`}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    );
};