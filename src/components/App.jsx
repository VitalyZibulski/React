import { restaurants } from "../data/data.js";
import { Tabs } from './tabs/Tabs';
import { Layout } from './layout/Layout.jsx';

export const App = () => {
    return (
        <Layout>
            <Tabs items={restaurants} />
        </Layout>
    );
};