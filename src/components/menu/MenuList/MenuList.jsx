import { Counter } from "../../counter/Counter.jsx";

export const MenuList = ({ menu }) => {
    if (!menu || menu.length === 0) {
        return <p>No menu</p>;
    }

    return (
        <ul>
            {menu.map((item) => (
                <li key={item.id}>
                    {item.name}
                    <Counter />
                </li>
            ))}
        </ul>
    );
};