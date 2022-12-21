import React from "react";
import List from "../componenten/List/List";
import InputField from "../componenten/Inputfield";

const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
	return (
		<div>
			<InputField onSubmit={addGrocery} />
			<List items={groceryItems} handleClickItem={handleClickGroceryItem} />
		</div>
	);
};

export default GroceryList;
