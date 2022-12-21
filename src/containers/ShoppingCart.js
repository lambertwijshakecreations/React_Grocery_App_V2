import React from "react";
import List from "../componenten/List/List";

const ShoppingCart = ({ groceryItems, handleClickEmptyCart }) => {
	return (
		<div>
			<button className="button-primary" onClick={handleClickEmptyCart}>
				Empty Cart
			</button>
			<List readonly={true} items={groceryItems} />
		</div>
	);
};

export default ShoppingCart;
