import { MenuList } from "../../menu/MenuList/MenuList";
import { ReviewsList } from "../../review/ReviewList/ReviewList.jsx";

export const RestaurantCard = ({ restaurant }) => {
    return (
        <div>
            <h1>Restaurant - {restaurant.name}</h1>
            <h3>Menu:</h3>
            <MenuList menu={restaurant.menu} />
            <h3>Reviews:</h3>
            <ReviewsList reviews={restaurant.reviews} />
        </div>
    );
};