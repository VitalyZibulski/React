import { useContext } from "react";
import { MenuList } from "../../menu/MenuList/MenuList";
import { ReviewsList } from "../../review/ReviewList/ReviewList.jsx";
import { ReviewForm } from "../../ReviewForm/ReviewForm";
import { ThemeContext } from "../../../contexts/theme-context";
import styles from './RestaurantCard.module.css';
import cn from "classnames";


export const RestaurantCard = ({ restaurant }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={cn(styles, {
                [styles.light]: theme === 'light',
                [styles.dark]: theme === 'dark',
            })}
    >
            <h1>Restaurant - {restaurant.name}</h1>
            <h3>Menu:</h3>
            <MenuList menu={restaurant.menu} />
            <h3>Reviews:</h3>
            <ReviewsList reviews={restaurant.reviews} />
            <ReviewForm key={restaurant.reviews.id} />
        </div>
    );
};