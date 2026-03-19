import { useContext } from 'react';
import { UserContext } from "../../../contexts/user-context.js";
import { DishCounter } from "../../counter/DishCounter.jsx";

export const MenuList = ({ menu }) => {
    const { user } = useContext(UserContext);

    if (!menu || menu.length === 0) {
        return <p>No menu</p>;
    }

    return (
        <ul>
            {menu.map((item) => (
                <li key={item.id}>
                    {item.name}
                    {user.name !== null ? <DishCounter /> : null}
                </li>
            ))}
        </ul>
    );
};