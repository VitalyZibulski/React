import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ToggleThemeButton } from "../ToggleThemeButton/ToggleThemeButton";

export const Layout = ({ children }) => {
    return (
        <div>
            <ProgressBar />
            <ToggleThemeButton />
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </div>
    );
};