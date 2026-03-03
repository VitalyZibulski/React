import { restaurants } from "../data/data.js";
import { RestaurantCard } from "./restaurant/RestaurantCard/RestaurantCard.jsx";

export const App = () => {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            ))}
        </div>
    );
};